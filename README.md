A single serving website that provides random epigrams from Alan Perlis, built for fun.

Whenever I see one of these quotes, I tend to be impressed by how relevant a lot of them still seem, and how insane of a Twitter poster he'd probably have been if he was still around today.

Hosted with [fly.io](https://fly.io/), though any way to deploy Docker containers would work.

## Development

* `cd frontend && npm run build` - build the frontend
* `cd frontend && npm run start` - run the frontend locally
* `go run main.go` - run the Go server locally
* `fly deploy` - deploy to fly.io

To run the application as a docker container, run:

```
docker build -t perlis .
docker run -p 8080:8080 perlis
```

Then navigate to `localhost:8080` to see the application.
