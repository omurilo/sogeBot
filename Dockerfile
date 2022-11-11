FROM node:18-bullseye-slim as builder

ENV LAST_UPDATED 2022-11-09-1237

ENV NODE_ENV production
ENV ENV production

RUN apt-get update
RUN apt-get install -y build-essential unzip nasm libtool make bash git autoconf wget zlib1g-dev python3

# Copy artifact
ADD *.zip /

# Unzip zip file
RUN unzip *.zip -d /app

# Change working directory
WORKDIR /app

# Install latest npm
RUN npm install -g npm@latest

# Install dependencies
RUN npm install
# Remove dev dependencies (not needed anymore)
RUN npm prune --production
# Get latest ui dependencies in time of build
RUN npm update @sogebot/ui-admin @sogebot/ui-overlay @sogebot/ui-helpers @sogebot/ui-oauth @sogebot/ui-public

FROM node:18-bullseye-slim

USER node

COPY --chown=node:node --from=builder /app /app

VOLUME "./logs" "/app/logs"

# Expose API port to the outside
EXPOSE 20000
# Expose profiler to the outside
EXPOSE 9229

# Add startup script
COPY --chown=node:node docker.sh /app
RUN chmod +x /app/docker.sh
ENTRYPOINT ["/app/docker.sh"]
