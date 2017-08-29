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

func UpdateRoleBinding(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.RoleBinding{}
	json.Unmarshal(data, &roleInterfaceParsing)

	rolebinding := roleInterfaceParsing
	roleInterface := inter.RoleBindings(rolebinding.Namespace)
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
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
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
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
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