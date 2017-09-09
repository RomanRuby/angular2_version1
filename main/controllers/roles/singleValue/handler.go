package singleValue

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	models "../../../models"
	handler "../../utils"
)

func Create(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Create(&roleInterfaceParsing)
	handler.Send(response,roles,err)
}

func Update(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Update(&roleInterfaceParsing)
	handler.Send(response,roles,err)
}
func List(response http.ResponseWriter, request *http.Request) {
	var requestParams = handler.ReceiveHandler(request,"namespace")
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface :=models.ClientSettings.Roles(requestParams[0])
	roles, err := roleInterface.List(roleInterfaceParsing)
	handler.Send(response,roles,err)
}

func Delete(response http.ResponseWriter, request *http.Request) {
	var requestParams = handler.ReceiveHandler(request,"namespace","name")
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(requestParams[0])
	err := roleInterface.Delete(requestParams[1], &roleInterfaceParsing)
	handler.Send(response,"Success",err)
}

func DeleteCollection(response http.ResponseWriter, request *http.Request) {
	var requestParams = handler.ReceiveHandler(request,"namespace")
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := models.DeleteCollection{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(requestParams[0])
	err := roleInterface.DeleteCollection(&roleInterfaceParsing.DeleteOptions, roleInterfaceParsing.ListOptions)
	handler.Send(response,"Success",err)
}

func Get(response http.ResponseWriter, request *http.Request) {
	var requestParams = handler.ReceiveHandler(request,"namespace","name")
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(requestParams[0])
	roles, err := roleInterface.Get(requestParams[1], roleInterfaceParsing)
	handler.Send(response,roles,err)
}

