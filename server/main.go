package main

import (
	"net/http"
)

// Message struct
type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data"`
}

// Channel struct
type Channel struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	router.Handle("channel add", addChannel)
	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
