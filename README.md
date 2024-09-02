A single serving website that provides random epigrams from Alan Perlis, built for fun.

Whenever I see one of these quotes, I tend to be impressed by how relevant a lot of them still seem, and how insane of a Twitter poster he'd probably have been if he was still around today.

Hosted with [Fly.io](https://fly.io/), though any way to deploy Docker containers would work.

## Development

To test the application locally, run:

```
docker-compose up --build
```

Navigate to `localhost:8080` to see the application, and `localhost:8080/api` to get a random quote.

To stop the containers, run:

```
docker-compose down
```

Alternatively, you can run the Go server directly with `go run main.go`. But you'll need to make sure:

1. The frontend has been built (`cd frontend && npm run build`)
2. You have an instance of Redis running locally. For example, you can run one with Docker: `docker run --name perlis-redis -d redis`
3. The `REDIS_URL` environment variable is set to `redis://localhost:6379`

For hot reloading (backend), you can use [air](https://github.com/air-verse/air) to automatically restart the server when you make changes:

```
REDIS_URL=redis://localhost:6379 air -build.exclude_dir "frontend/node_modules"
```

Other helpful commands:

* `cd frontend && npm run build` - build the frontend
* `cd frontend && npm run start` - run the frontend locally
* `fly deploy` - deploy to Fly.io
* `fly secrets`, `fly certs`, `fly redis` - manage Fly.io resources for this app
