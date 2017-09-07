package singleValue

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	mux "github.com/gorilla/mux"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	models "../../../models"
	result "../../utils"
)

func Create(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Create(&roleInterfaceParsing)
	result.Send(response,roles,err)
}

func Update(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Update(&roleInterfaceParsing)
	result.Send(response,roles,err)
}
func List(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface :=models.ClientSettings.Roles(namespace)
	roles, err := roleInterface.List(roleInterfaceParsing)
	result.Send(response,roles,err)
}

func Delete(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(namespace)
	err := roleInterface.Delete(category, &roleInterfaceParsing)
	result.Send(response,"Success",err)
}

func DeleteCollection(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := models.DeleteCollections{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(namespace)
	err := roleInterface.DeleteCollection(&roleInterfaceParsing.DeleteOptions, roleInterfaceParsing.ListOptions)
	result.Send(response,"Success",err)
}

func Get(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.Roles(namespace)
	roles, err := roleInterface.Get(category, roleInterfaceParsing)
	result.Send(response,roles,err)
}

