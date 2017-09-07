package singleValue

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	"github.com/gorilla/mux"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	models "../../../models"
	result "../../utils"
)

func CreateRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.RoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Create(&roleInterfaceParsing)
	result.Send(response,roles,err)
}

func UpdateRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.RoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(roleInterfaceParsing.Namespace)
	roles, err := roleInterface.Update(&roleInterfaceParsing)
	result.Send(response,roles,err)
}

func ListRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(namespace)
	roles, err := roleInterface.List(roleInterfaceParsing)
	result.Send(response,roles,err)
}

func DeleteRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(namespace)
	err := roleInterface.Delete(category, &roleInterfaceParsing)
	result.Send(response,"Success",err)
}

func DeleteCollectionRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := models.DeleteCollections{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(namespace)
	err := roleInterface.DeleteCollection(&roleInterfaceParsing.DeleteOptions, roleInterfaceParsing.ListOptions)
	result.Send(response,"Success",err)
}

func GetRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roleInterface := models.ClientSettings.RoleBindings(namespace)
	roles, err := roleInterface.Get(category, roleInterfaceParsing)
	result.Send(response,roles,err)
}