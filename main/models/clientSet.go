package models

import (
	"flag"
	"path/filepath"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/kubernetes"
	"os"
	v1beta12 "k8s.io/client-go/kubernetes/typed/rbac/v1beta1"
)

func clientSet(name string, suffix string) (client *v1beta12.RbacV1beta1Client) {
	var kubeconfig *string

	if home := homeDir(); home != "" {
		kubeconfig = flag.String("kubeconfig", filepath.Join(home, name, suffix), "./")
	} else {
		kubeconfig = flag.String("kubeconfig", "", "./config.kube")
	}
	flag.Parse()

	config, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)
	errorHandle(err)
	clientSet, err := kubernetes.NewForConfig(config)
	errorHandle(err)

	return clientSet.RbacV1beta1Client
}

func errorHandle(err error) {
	if err != nil {
		panic(err.Error())
	}
}

func homeDir() string {
	if h := os.Getenv("HOME"); h != "" {
		return h
	}
	return os.Getenv("USERPROFILE")
}

var ClientSettings = clientSet(".kube", "config")
