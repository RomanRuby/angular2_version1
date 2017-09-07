package utils

import (
	"net/http"
	message "./sendMechanism"
)

func Send(response http.ResponseWriter,  object interface{}, err error) {
	if err == nil {
		message.SendJson(response, object)
	} else {
		message.SendError(response, err)
	}
}