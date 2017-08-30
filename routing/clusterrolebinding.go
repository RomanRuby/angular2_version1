package routing

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	"github.com/gorilla/mux"
	"fmt"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func CreateClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	rolebinding := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	roles, err := roleInterface.Create(&rolebinding)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}

	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}
}

func UpdateClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	rolebinding := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	roles, err := roleInterface.Update(&rolebinding)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}

	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}

}
func ListClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	roles, err := roleInterface.List(listOptions)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}

	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}
}

func WatchClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	roles, err := roleInterface.Watch(listOptions)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}
	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}
}

func DeleteClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	error := roleInterface.Delete(category, &role)
	j, err := json.Marshal(error)
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
	}

}

func DeleteCollectionClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := deleteCol{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing.deleteOption

	listOptions := roleInterfaceParsing.listOption

	roleInterface := inter.ClusterRoleBindings()
	error := roleInterface.DeleteCollection(&role, listOptions)
	fmt.Println(error)
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
	}
}

func GetClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.ClusterRoleBindings()
	roles, err := roleInterface.Get(category, role)
	fmt.Println(err)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}

	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}
}

func PatchClusterRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := patchInt{}

	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing.pt
	typesRole := typesConst(role)

	role1 := roleInterfaceParsing.data
	role2 := roleInterfaceParsing.subresources
	roleInterface := inter.ClusterRoleBindings()
	byt := []byte(role1)
	fmt.Println(byt)
	roles, err := roleInterface.Patch(category, typesRole, byt, role2)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			jer, _ := json.Marshal(error.Error())
			response.Write(jer)
		}

	} else {
		jer, _ := json.Marshal(err.Error())
		response.Write(jer)
	}
}
