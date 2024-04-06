ARG NODE_VERSION=20.11.1
ARG PNPM_VERSION=8.15.5

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
RUN npm install -g pnpm@${PNPM_VERSION}
RUN pnpm config set store-dir /app/.pnpm-store

COPY package.json pnpm-lock.yaml ./
EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

FROM base as builder
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build

FROM base as production
WORKDIR /app
ENV NODE_ENV=production
RUN pnpm install
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
CMD pnpm start

FROM base as development
WORKDIR /app
ENV NODE_ENV=development
RUN pnpm install 
COPY . .
CMD pnpm dev
