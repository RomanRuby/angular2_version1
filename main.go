package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	mux "github.com/gorilla/mux"
	role "./routing"
)


func main() {
	port := flag.Int("port", 8081, "port to serve on")
	dir := flag.String("directory","" , "directory of web files")
	flag.Parse()

	fs := http.Dir(*dir)
	fileHandler := http.FileServer(fs)

	router := mux.NewRouter()
	router.Handle("/", http.RedirectHandler("/static/index.html", 302))

	router.HandleFunc("/role/create",role.Create).Methods("POST")
	router.HandleFunc("/role/update", role.Update).Methods("POST")
	router.HandleFunc("/role/delete/{name}/{namespace}", role.Delete).Methods("POST")
	router.HandleFunc("/role/deleteCollection/{namespace}", role.DeleteCollection).Methods("POST")
	router.HandleFunc("/role/get/{name}/{namespace}", role.Get).Methods("POST")
	router.HandleFunc("/role/list/{namespace}", role.List).Methods("POST")
	router.HandleFunc("/role/watch/{namespace}", role.Watch).Methods("POST")
	router.HandleFunc("/role/patch/{name}/{namespace}", role.Patch).Methods("POST")

	router.HandleFunc("/clusterrole/create",role.CreateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/update", role.UpdateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/delete/{name}", role.DeleteCluster).Methods("POST")
	router.HandleFunc("/clusterrole/deleteCollection", role.DeleteCollectionCluster).Methods("POST")
	router.HandleFunc("/clusterrole/get/{name}", role.GetCluster).Methods("POST")
	router.HandleFunc("/clusterrole/list", role.ListCluster).Methods("POST")
	router.HandleFunc("/clusterrole/watch", role.WatchCluster).Methods("POST")
	router.HandleFunc("/clusterrole/patch/{name}", role.PatchCluster).Methods("POST")


	router.HandleFunc("/clusterrolebinding/create",role.CreateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/update", role.UpdateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/delete/{name}", role.DeleteClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/deleteCollection", role.DeleteCollectionClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/get/{name}", role.GetClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/list", role.ListClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/watch", role.WatchClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/patch/{name}", role.PatchClusterRoleBinding).Methods("POST")

	router.HandleFunc("/rolebinding/create",role.CreateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/update", role.UpdateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/delete/{name}/{namespace}", role.DeleteRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/deleteCollection/{namespace}", role.DeleteCollectionRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/get/{name}/{namespace}", role.GetRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/list/{namespace}", role.ListRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/watch/{namespace}", role.WatchRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/patch/{name}/{namespace}", role.PatchRoleBinding).Methods("POST")


	router.PathPrefix("/").Handler(http.StripPrefix("/static", fileHandler))
	http.Handle("/", router)

	log.Printf("Running on port %d\n", *port)

	addr := fmt.Sprintf("127.0.0.1:%d", *port)
	err := http.ListenAndServe(addr, nil)
	fmt.Println(err.Error())
}



