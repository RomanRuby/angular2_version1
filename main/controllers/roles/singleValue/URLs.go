package singleValue

import(
	server "github.com/gorilla/mux"
)

func AddURL(router *server.Router){
	router.HandleFunc("/role/create",Create).Methods("POST")
	router.HandleFunc("/role/update", Update).Methods("POST")
	router.HandleFunc("/role/delete/{name}/{namespace}", Delete).Methods("POST")
	router.HandleFunc("/role/deleteCollection/{namespace}", DeleteCollection).Methods("POST")
	router.HandleFunc("/role/get/{name}/{namespace}", Get).Methods("POST")
	router.HandleFunc("/role/list/{namespace}", List).Methods("POST")
}
