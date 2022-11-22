FROM node:18-bullseye-slim

ENV LAST_UPDATED 2022-11-09-1237

# Defaults to production, docker-compose overrides this to development on build and run.
ARG NODE_ENV=production
ARG ENV=production
ENV NODE_ENV $NODE_ENV
ENV ENV $ENV

RUN apt-get update
RUN apt-get install -y build-essential unzip nasm libtool make bash git autoconf wget zlib1g-dev python3

# Copy artifact
ADD *.zip /

# Unzip zip file
RUN unzip *.zip -d /app

# Change working directory
WORKDIR /app

# Add startup script
COPY docker.sh /
RUN chmod +x /docker.sh

# Install packages and clean .npm cache (not needed)
RUN npm ci && npm cache clean --force

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
