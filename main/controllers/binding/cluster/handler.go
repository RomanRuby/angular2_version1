package cluster

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

var roleInterface = models.ClientSettings.ClusterRoleBindings()


func CreateClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roles, err := roleInterface.Create(&roleInterfaceParsing)
	result.Send(response,roles,err)
}

func UpdateClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roles, err := roleInterface.Update(&roleInterfaceParsing)
	result.Send(response,roles,err)

}

func ListClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roles, err := roleInterface.List(roleInterfaceParsing)
	result.Send(response,roles,err)
}

func DeleteClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	err := roleInterface.Delete(category, &roleInterfaceParsing)
	result.Send(response,"Success",err)
}

func DeleteCollectionClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := models.DeleteCollections{}
	json.Unmarshal(data, &roleInterfaceParsing)

	err := roleInterface.DeleteCollection(&roleInterfaceParsing.DeleteOptions, roleInterfaceParsing.ListOptions)
	result.Send(response,"Success",err)
}

func GetClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}
	json.Unmarshal(data, &roleInterfaceParsing)

	roles, err := roleInterface.Get(category, roleInterfaceParsing)
	result.Send(response,roles,err)
}

