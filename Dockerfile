ARG GO_VERSION=1
FROM golang:${GO_VERSION}-bookworm as builder

WORKDIR /app
COPY . .
RUN go build -v -o /run-app .

FROM node:20 as frontend-builder
WORKDIR /app/frontend
COPY frontend .
RUN npm install && npm run build

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /run-app .
COPY --from=frontend-builder /app/frontend/build ./frontend/build

EXPOSE 8080

CMD ["./run-app"]
