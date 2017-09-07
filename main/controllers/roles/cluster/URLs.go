package cluster
import(
	server "github.com/gorilla/mux"
)

func AddURL(router *server.Router){
	router.HandleFunc("/clusterrole/create",CreateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/update", UpdateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/delete/{name}", DeleteCluster).Methods("POST")
	router.HandleFunc("/clusterrole/deleteCollection", DeleteCollectionCluster).Methods("POST")
	router.HandleFunc("/clusterrole/get/{name}", GetCluster).Methods("POST")
	router.HandleFunc("/clusterrole/list", ListCluster).Methods("POST")
}
