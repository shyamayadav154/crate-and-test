FROM node:16-alpine AS deps

# Create app directory
WORKDIR /app

COPY package.json package-lock.json* ./


RUN npm ci


FROM node:16-alpine AS runner

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


## comment for testing purpose blah blah




