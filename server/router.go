package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

// Handler type
type Handler func(*Client, interface{})

// Router sruct
type Router struct {
	rules map[string]Handler
}

// NewRouter for constructing new Route
func NewRouter() *Router {
	return &Router{
		rules: make(map[string]Handler),
	}
}

// Handle routes
func (rt *Router) Handle(msgName string, handler Handler) {
	rt.rules[msgName] = handler
}

// FindHandler which finds handler by message name
func (rt *Router) FindHandler(msgName string) (Handler, bool) {
	handler, found := rt.rules[msgName]
	return handler, found
}

func (rt *Router) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, err.Error())
		return
	}
	client := NewClient(socket, rt.FindHandler)
	go client.Write()
	client.Read()
}
