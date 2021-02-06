package main

import (
	"github.com/gorilla/websocket"
)

// FindHandler signature
type FindHandler func(string) (Handler, bool)

// Client struct
type Client struct {
	send        chan Message
	socket      *websocket.Conn
	findHandler FindHandler
}

// NewClient for constructing a new client
func NewClient(socket *websocket.Conn, findHandler FindHandler) *Client {
	return &Client{
		send:        make(chan Message),
		socket:      socket,
		findHandler: findHandler,
	}
}

func (client *Client) Write() {
	for msg := range client.send {
		if err := client.socket.WriteJSON(msg); err != nil {
			break
		}
	}
	client.socket.Close()
}

func (client *Client) Read() {
	var message Message
	for {
		if err := client.socket.ReadJSON(&message); err != nil {
			break
		}
		if handler, found := client.findHandler(message.Name); found {
			handler(client, message.Data)
		}
	}
}
