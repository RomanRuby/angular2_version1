package routing

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	mux "github.com/gorilla/mux"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func Create(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing
	roleInterface := inter.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Create(&role)
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

func Update(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Update(&role)
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
func List(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.Roles(namespace)
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

func Delete(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.Roles(namespace)
	error := roleInterface.Delete(category, &role)
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
	}

}



func DeleteCollection(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := deleteCol{}
	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing.deleteOption
	listOptions := roleInterfaceParsing.listOption

	roleInterface := inter.Roles(namespace)
	error := roleInterface.DeleteCollection(&role, listOptions)
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
	}
}

func Get(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.Roles(namespace)
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

