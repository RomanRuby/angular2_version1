package cluster

import(
	server "github.com/gorilla/mux"
)

func AddURL(router *server.Router) {
	router.HandleFunc("/clusterrolebinding/create", CreateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/update", UpdateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/delete/{name}", DeleteClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/deleteCollection", DeleteCollectionClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/get/{name}", GetClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/list", ListClusterRoleBinding).Methods("POST")
}