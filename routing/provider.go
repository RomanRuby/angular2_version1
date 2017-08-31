package routing

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	mux "github.com/gorilla/mux"
)

func Provide(){
	port := flag.Int("port", 8081, "port to serve on")
	dir := flag.String("directory","" , "directory of web files")
	flag.Parse()

	fs := http.Dir(*dir)
	fileHandler := http.FileServer(fs)

	router := mux.NewRouter()
	router.Handle("/", http.RedirectHandler("/static/index.html", 302))

	router.HandleFunc("/role/create",Create).Methods("POST")
	router.HandleFunc("/role/update", Update).Methods("POST")
	router.HandleFunc("/role/delete/{name}/{namespace}", Delete).Methods("POST")
	router.HandleFunc("/role/deleteCollection/{namespace}", DeleteCollection).Methods("POST")
	router.HandleFunc("/role/get/{name}/{namespace}", Get).Methods("POST")
	router.HandleFunc("/role/list/{namespace}", List).Methods("POST")

	router.HandleFunc("/clusterrole/create",CreateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/update", UpdateCluster).Methods("POST")
	router.HandleFunc("/clusterrole/delete/{name}", DeleteCluster).Methods("POST")
	router.HandleFunc("/clusterrole/deleteCollection", DeleteCollectionCluster).Methods("POST")
	router.HandleFunc("/clusterrole/get/{name}", GetCluster).Methods("POST")
	router.HandleFunc("/clusterrole/list", ListCluster).Methods("POST")

	router.HandleFunc("/clusterrolebinding/create",CreateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/update", UpdateClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/delete/{name}", DeleteClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/deleteCollection", DeleteCollectionClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/get/{name}", GetClusterRoleBinding).Methods("POST")
	router.HandleFunc("/clusterrolebinding/list", ListClusterRoleBinding).Methods("POST")

	router.HandleFunc("/rolebinding/create",CreateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/update", UpdateRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/delete/{name}/{namespace}", DeleteRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/deleteCollection/{namespace}", DeleteCollectionRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/get/{name}/{namespace}", GetRoleBinding).Methods("POST")
	router.HandleFunc("/rolebinding/list/{namespace}", ListRoleBinding).Methods("POST")


	router.PathPrefix("/").Handler(http.StripPrefix("/static", fileHandler))
	http.Handle("/assets/", http.FileServer(http.Dir(".")))
	http.Handle("/", router)

	log.Printf("Running on port %d\n", *port)

	addr := fmt.Sprintf("127.0.0.1:%d", *port)
	err := http.ListenAndServe(addr, nil)
	fmt.Println(err.Error())
}