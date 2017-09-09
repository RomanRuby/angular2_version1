package utils

import (
	"net/http"
	"github.com/gorilla/mux"

)

func ReceiveHandler(request *http.Request,params...string) ( []string) {
	var responseArray []string
	vars := mux.Vars(request)
	for i := 0; i < len(params); i++ {
		responseArray = append(responseArray,vars[params[i]] )
	}
	return responseArray
}