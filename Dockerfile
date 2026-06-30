# Base stage with pnpm setup
FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Build stage - install dependencies only when package.json changes
FROM base AS builder
ENV PNPM_CONFIG_IGNORE_COMPATIBILITY_DB=true
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --fetch-timeout 120000
COPY . .
RUN pnpm build

# Production stage
FROM base AS production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json pnpm-lock.yaml ./

EXPOSE 5173

CMD ["pnpm", "preview"]
