package models
import (
	types "k8s.io/apimachinery/pkg/apis/meta/v1")

type DeleteCollection struct {
	DeleteOptions types.DeleteOptions
	ListOptions   types.ListOptions
}

