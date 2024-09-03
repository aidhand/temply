# syntax = docker/dockerfile:1

FROM oven/bun:alpine as base

WORKDIR /app
LABEL fly_launch_runtime="Bun"
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Copy application code
COPY --link . .
RUN bun install

# Build application
RUN bun run build

# Final stage for app image
FROM base
COPY --from=build /app/apps/nuxiiii/.output /app

# Bundle it all into a single file
RUN bun build server/index.mjs --target=bun --minify --outfile server.mjs
RUN rm -rf server && mkdir server
RUN mv server.mjs server/index.mjs

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "--smol", "server/index.mjs" ]
