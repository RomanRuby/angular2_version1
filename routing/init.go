package routing

import (
	"flag"
	"path/filepath"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/kubernetes"
	"os"
	v1beta12 "k8s.io/client-go/kubernetes/typed/rbac/v1beta1"
	types "k8s.io/apimachinery/pkg/apis/meta/v1"
	types2 "k8s.io/apimachinery/pkg/types"
)

func clientSet() (client *v1beta12.RbacV1beta1Client) {
	var kubeconfig *string
	if home := homeDir(); home != "" {
		kubeconfig = flag.String("kubeconfig", filepath.Join(home, ".kube", "config"), "./")
	} else {
		kubeconfig = flag.String("kubeconfig", "", "./config.kube")
	}
	flag.Parse()

	config, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)
	if err != nil {
		panic(err.Error())
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}
	return clientset.RbacV1beta1Client
}

type Error struct {
	error string
}

type deleteCol struct {
	deleteOption types.DeleteOptions
	listOption   types.ListOptions
}

func homeDir() string {
	if h := os.Getenv("HOME"); h != "" {
		return h
	}
	return os.Getenv("USERPROFILE")
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

var inter = clientSet()
