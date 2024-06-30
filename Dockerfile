FROM node:20-slim AS base

## Sharp dependencies, copy all the files for production
FROM base AS sharp
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

RUN pnpm add sharp

## Install dependencies only when needed
FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY .npmrc ./

# If you want to build docker in China
# RUN npm config set registry https://registry.npmmirror.com/
RUN pnpm i

COPY . .

ENV NEXT_PUBLIC_BASE_PATH ""

ARG NEXT_PUBLIC_SERVICE_MODE="server"
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_Y2xlcmsubWlzdGVyNS5uZXQk"
ARG NEXT_PUBLIC_S3_DOMAIN="https://s3-for-5chat.mystudies.net"

ENV NEXT_PUBLIC_SERVICE_MODE=$NEXT_PUBLIC_SERVICE_MODE
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_S3_DOMAIN=$NEXT_PUBLIC_S3_DOMAIN

ENV KEY_VAULTS_SECRET="VMelKsBfIx1eDUay8h4P/yXppVKwhWw02fNRyWJnF64="
ENV DATABASE_DRIVER="node"
ENV DATABASE_URL="postgres://default:aMHmRuOU1wN7@172.30.0.2:5432/aichat_db"

# Clerk 相关配置
ENV CLERK_WEBHOOK_SECRET="whsec_3ow9bxFKkqHI3A14BsKhR+Z+YLSnNZ0C"
ENV CLERK_SECRET_KEY="sk_live_xo2oxB4hccGUNHDwAcRO2EZuMsHKFgz2S68nVhFdPW"

# S3 相关配置（上传图片必须）
ENV S3_ACCESS_KEY_ID="e7602f1b96b8fdcc98b4f1de0682a1c7"
ENV S3_SECRET_ACCESS_KEY="527f56f03b58a31df30403a8c1a7bc0f157875420b4339bd024e7fac0ef17b93"
ENV S3_ENDPOINT="https://173994cc6b91cd2cb423389b3eeac8cf.r2.cloudflarestorage.com"
ENV S3_BUCKET="mrngchat"

# Sentry
ENV NEXT_PUBLIC_SENTRY_DSN ""
ENV SENTRY_ORG ""
ENV SENTRY_PROJECT ""

# Posthog
ENV NEXT_PUBLIC_ANALYTICS_POSTHOG ""
ENV NEXT_PUBLIC_POSTHOG_KEY ""
ENV NEXT_PUBLIC_POSTHOG_HOST ""

# Umami
ENV NEXT_PUBLIC_ANALYTICS_UMAMI ""
ENV NEXT_PUBLIC_UMAMI_SCRIPT_URL ""
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID ""

# Node
ENV NODE_OPTIONS "--max-old-space-size=8192"

# run build standalone for docker version
RUN npm run build:docker

## Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=sharp --chown=nextjs:nodejs /app/node_modules/.pnpm ./node_modules/.pnpm

COPY entrypoint.sh .
RUN ["chmod", "+x", "/app/entrypoint.sh"]

USER nextjs

EXPOSE 3210

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"
ENV PORT=3210

# General Variables
ENV ACCESS_CODE ""

ENV API_KEY_SELECT_MODE ""

# OpenAI
ENV OPENAI_API_KEY ""
ENV OPENAI_PROXY_URL ""
ENV OPENAI_MODEL_LIST ""

# Azure OpenAI
ENV USE_AZURE_OPENAI ""
ENV AZURE_API_KEY ""
ENV AZURE_API_VERSION ""

# Google
ENV GOOGLE_API_KEY ""

# Zhipu
ENV ZHIPU_API_KEY ""

# Moonshot
ENV MOONSHOT_API_KEY ""

# Ollama
ENV OLLAMA_PROXY_URL ""
ENV OLLAMA_MODEL_LIST ""

# Perplexity
ENV PERPLEXITY_API_KEY ""

# Anthropic
ENV ANTHROPIC_API_KEY ""

# Mistral
ENV MISTRAL_API_KEY ""

# OpenRouter
ENV OPENROUTER_API_KEY ""
ENV OPENROUTER_MODEL_LIST ""

# 01.AI
ENV ZEROONE_API_KEY ""

# TogetherAI
ENV TOGETHERAI_API_KEY ""

# Minimax
ENV MINIMAX_API_KEY ""

# DeepSeek
ENV DEEPSEEK_API_KEY ""

# Qwen
ENV QWEN_API_KEY ""

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["node", "server.js"]
