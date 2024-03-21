package main

import (
	"fmt"
	"log"
	"net/http"
)

const schema = "http"
const host = "localhost"
const port = 8080

var url = fmt.Sprintf("%s://%s:%d", schema, host, port)

func main() {
	fileServer := http.FileServer(http.Dir("../Static"))
	http.Handle("/", fileServer)

	log.Printf("Starting server for client on %s", url)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
