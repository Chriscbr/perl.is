package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"
)

type Response struct {
	Message string `json:"message"`
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Received request: %s %s", r.Method, r.URL.Path)
	response := Response{Message: "Hello from the API"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s %s", r.Method, r.RequestURI, time.Since(start))
	})
}

func main() {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Ldate | log.Ltime | log.Lmicroseconds | log.Lshortfile)

	// Serve the React static files
	fs := http.FileServer(http.Dir("./frontend/build"))
	http.Handle("/", loggingMiddleware(fs))

	// Handle the API endpoint
	http.Handle("/api", loggingMiddleware(http.HandlerFunc(apiHandler)))

	// Start the server
	log.Println("Server starting on :8080")
	http.ListenAndServe(":8080", nil)
}
