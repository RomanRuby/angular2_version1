package routing

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	mux "github.com/gorilla/mux"
	controllers "./controllers"
)

func Start(){
	port := flag.Int("port", 8081, "port to serve on")
	dir := flag.String("directory","" , "directory of web files")
	flag.Parse()

	fs := http.Dir(*dir)
	fileHandler := http.FileServer(fs)

	router := mux.NewRouter()
	router.Handle("/", http.RedirectHandler("/static/index.html", 302))
	controllers.AddRouting(router)

	router.PathPrefix("/").Handler(http.StripPrefix("/static", fileHandler))
	http.Handle("/assets/", http.FileServer(http.Dir(".")))
	http.Handle("/", router)

	log.Printf("Running on port %d\n", *port)

	addr := fmt.Sprintf("127.0.0.1:%d", *port)
	err := http.ListenAndServe(addr, nil)
	fmt.Println(err.Error())
}

