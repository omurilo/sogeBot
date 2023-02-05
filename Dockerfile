FROM node:18-bullseye-slim

ENV LAST_UPDATED 2022-11-09-1237

# Defaults to production, docker-compose overrides this to development on build and run.
ARG NODE_ENV=production
ARG ENV=production
ENV NODE_ENV $NODE_ENV
ENV ENV $ENV

RUN apt-get update
RUN apt-get install -y build-essential unzip nasm libtool make bash git autoconf wget zlib1g-dev python3

# Downgrade to npm 8, permission issue caused by https://github.com/npm/cli/issues/5889
# ERROR: failed to register layer: Error processing tar file(exit status 1): failed to Lchown "/app/node_modules/brorand/.npmignore" for UID 120012366, GID 120012366: lchown /app/node_modules/brorand/.npmignore: invalid argument
RUN npm install -g npm@8

# Copy artifact
ADD *.zip /

# Unzip zip file
RUN unzip *.zip -d /app

# Change working directory
WORKDIR /app

# Add startup script
COPY docker.sh /
RUN chmod +x /docker.sh

# Install packages (forcing to)
RUN npm install --verbose --force
# Clean .npm cache (not needed)
RUN npm cache clean --force

FROM node:16-bullseye-slim

COPY --from=builder /app /app

WORKDIR /app

VOLUME "./logs" "/app/logs"

# Expose API port to the outside
EXPOSE 20000
# Expose profiler to the outside
EXPOSE 9229

# Add startup script
COPY docker.sh /app
RUN chmod +x /app/docker.sh
ENTRYPOINT ["/app/docker.sh"]
