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

func CreateRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.RoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	rolebinding := roleInterfaceParsing
	roleInterface := inter.RoleBindings(rolebinding.Namespace)
	roles, _ := roleInterface.Create(&rolebinding)
		j, error := json.Marshal(roles)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(error.Error()))
		}
}

func UpdateRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.RoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	rolebinding := roleInterfaceParsing
	roleInterface := inter.RoleBindings(rolebinding.Namespace)
	roles, _ := roleInterface.Update(&rolebinding)
	j, error := json.Marshal(roles)
	if error == nil{
		response.Header().Set("Content-Type", "application/json")
		response.Write(j)
	}else{
		response.Write([]byte(error.Error()))
	}

}
func ListRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.RoleBindings(namespace)
	roles, err := roleInterface.List(listOptions)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(err.Error()))
		}
	}else {
		response.Write([]byte(err.Error()))
	}
}

func WatchRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.RoleBindings(namespace)
	roles, err := roleInterface.Watch(listOptions)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(err.Error()))
		}

	}else {
		response.Write([]byte(err.Error()))
	}
}

func DeleteRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.RoleBindings(namespace)
	error := roleInterface.Delete(category, &role)
	j, err := json.Marshal(error)
	if err == nil{
		response.Header().Set("Content-Type", "application/json")
		response.Write(j)
	}else{
		response.Write([]byte(err.Error()))
	}

}

func DeleteCollectionRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := deleteCol{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing.deleteOption

	listOptions := roleInterfaceParsing.listOption

	roleInterface := inter.RoleBindings(namespace)
	error := roleInterface.DeleteCollection(&role, listOptions)
	fmt.Println(error)
	if error == nil {
		j, error := json.Marshal(error)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(error.Error()))
		}

	}else {
		response.Write([]byte(error.Error()))
	}
}



func GetRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.RoleBindings(namespace)
	roles, err := roleInterface.Get(category, role)
	fmt.Println(err)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(err.Error()))
		}

	}else {
		response.Write([]byte(err.Error()))
	}
}

func PatchRoleBinding(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := patchInt{}

	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing.pt
	typesRole :=typesConst(role)


	role1 := roleInterfaceParsing.data
	role2 := roleInterfaceParsing.subresources
	roleInterface := inter.RoleBindings(namespace)
	byt := []byte(role1)
	fmt.Println(byt)
	roles, err := roleInterface.Patch(category, typesRole, byt, role2)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil{
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		}else{
			response.Write([]byte(err.Error()))
		}

	}else {
		response.Write([]byte(err.Error()))
	}
}