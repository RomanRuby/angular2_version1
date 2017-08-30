package routing

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	v1beta1 "k8s.io/api/rbac/v1beta1"
	mux "github.com/gorilla/mux"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	"fmt"
)

type Error struct {
	error string
}

func CreateCluster(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRole{}
	json.Unmarshal(data, &roleInterfaceParsing)
	roleInterface := inter.ClusterRoles()
	roles, err := roleInterface.Create(&roleInterfaceParsing)
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

func UpdateCluster(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.ClusterRole{}
	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.ClusterRoles()
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
func ListCluster(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.ClusterRoles()
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

func DeleteCluster(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.DeleteOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.ClusterRoles()
	error := roleInterface.Delete(category, &role)
	if error != nil {
		jer, _ := json.Marshal(error.Error())
		response.Write(jer)
	} else {
		jer, _ := json.Marshal("Success")
		response.Write(jer)
	}

}

func DeleteCollectionCluster(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := deleteCol{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing.deleteOption

	listOptions := roleInterfaceParsing.listOption

	roleInterface := inter.ClusterRoles()
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

func GetCluster(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.GetOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	role := roleInterfaceParsing
	roleInterface := inter.ClusterRoles()
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

func PatchCluster(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := patchInt{}

	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing.pt
	typesRole := typesConst(role)

	role1 := roleInterfaceParsing.data
	role2 := roleInterfaceParsing.subresources
	roleInterface := inter.ClusterRoles()
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
