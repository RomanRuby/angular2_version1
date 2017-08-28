package routing

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	mux "github.com/gorilla/mux"
	v1beta1 "k8s.io/api/rbac/v1beta1"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	types2 "k8s.io/apimachinery/pkg/types"
	"fmt"
	v1beta12 "k8s.io/client-go/kubernetes/typed/rbac/v1beta1"
)

var inter = v1beta12.RbacV1beta1Client{}

func Create(response http.ResponseWriter, request *http.Request) {
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := v1beta1.Role{}
	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing
	roleInterface := inter.Roles(roleInterfaceParsing.ObjectMeta.Namespace)
	roles, err := roleInterface.Create(&role)
	fmt.Println(roles)
	response.Header().Set("Content-Type", "application/json")
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			response.Write([]byte(err.Error()))
		}

	} else {
		response.Write([]byte(err.Error()))
	}
}

func Update(response http.ResponseWriter, request *http.Request) {
	fmt.Println(&inter)
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
			response.Write([]byte(err.Error()))
		}

	} else {
		response.Write([]byte(err.Error()))
	}
}
func List(response http.ResponseWriter, request *http.Request) {
	fmt.Println("sg")
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
			response.Write([]byte(err.Error()))
		}
	} else {
		response.Write([]byte(err.Error()))
	}
}

func Watch(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := types.ListOptions{}

	json.Unmarshal(data, &roleInterfaceParsing)

	listOptions := roleInterfaceParsing
	roleInterface := inter.Roles(namespace)
	roles, err := roleInterface.Watch(listOptions)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			response.Write([]byte(err.Error()))
		}

	} else {
		response.Write([]byte(err.Error()))
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
	j, err := json.Marshal(error)
	if err == nil {
		response.Header().Set("Content-Type", "application/json")
		response.Write(j)
	} else {
		response.Write([]byte(err.Error()))
	}

}

type deleteCol struct {
	deleteOption types.DeleteOptions
	listOption   types.ListOptions
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
	fmt.Println(error)
	if error == nil {
		j, error := json.Marshal(error)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			response.Write([]byte(error.Error()))
		}

	} else {
		response.Write([]byte(error.Error()))
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
	fmt.Println(err)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			response.Write([]byte(err.Error()))
		}

	} else {
		response.Write([]byte(err.Error()))
	}
}

func Patch(response http.ResponseWriter, request *http.Request) {
	vars := mux.Vars(request)
	namespace := vars["namespace"]
	category := vars["name"]
	data, _ := ioutil.ReadAll(request.Body)
	roleInterfaceParsing := patchInt{}

	json.Unmarshal(data, &roleInterfaceParsing)
	role := roleInterfaceParsing.pt
	typesRole := typesConst(role)

	role1 := roleInterfaceParsing.data
	role2 := roleInterfaceParsing.subresources
	roleInterface := inter.Roles(namespace)
	byt := []byte(role1)
	roles, err := roleInterface.Patch(category, typesRole, byt, role2)
	fmt.Println(err)
	if err == nil {
		j, error := json.Marshal(roles)
		if error == nil {
			response.Header().Set("Content-Type", "application/json")
			response.Write(j)
		} else {
			response.Write([]byte(error.Error()))
		}

	} else {
		response.Write([]byte(err.Error()))
	}
}

func typesConst(typeRole string) (types2.PatchType) {
	i := types2.PatchType("")
	if typeRole == "application/json-patch+json" {
		i = types2.JSONPatchType
	}
	if typeRole == "application/merge-patch+json" {
		i = types2.MergePatchType
	}
	if typeRole == "application/strategic-merge-patch+json" {
		i = types2.StrategicMergePatchType
	}
	return i
}

type patchInt struct {
	pt           string
	data         string
	subresources string
}
