package singleValue

import(
	server "github.com/gorilla/mux"
)

func AddURL(router *server.Router){
	router.HandleFunc("/rolebinding/create",CreateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/update", UpdateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/delete/{name}/{namespace}", DeleteRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/deleteCollection/{namespace}", DeleteCollectionRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/get/{name}/{namespace}", GetRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/list/{namespace}", ListRoleBinding).Methods("POST")
}