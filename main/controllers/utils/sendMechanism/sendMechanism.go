package sendMechanism


import (
	"encoding/json"
	"net/http"
	"strconv"
)

func SendJson(response http.ResponseWriter, object interface{}) {
	body, err := json.Marshal(object)
	response.WriteHeader(200)
	if err == nil {
		sendResponse(response, "application/json", body)
	} else {
		SendError(response, err)
	}
}

func SendError(response http.ResponseWriter, err error) {
	response.WriteHeader(400)
	sendResponse(response, "text/plain", []byte(err.Error()))
}

func sendResponse(response http.ResponseWriter, mimeType string, body[] byte) {
	response.Header().Set("Content-Type", mimeType + "; charset=UTF-8")
	response.Header().Set("Content-Length", strconv.Itoa(len(body)))
	response.Write(body)
}
