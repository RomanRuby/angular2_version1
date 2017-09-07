package controllers

import(
	server "github.com/gorilla/mux"
	routerClusterRoleBinding "./binding/cluster"
	routerRoleBinding "./binding/singleValue"
	routerClusterRole "./roles/cluster"
	routerRole "./roles/singleValue"
)

func AddRouting(router *server.Router){
	routerClusterRoleBinding.AddURL(router)
	routerRoleBinding.AddURL(router)
	routerClusterRole.AddURL(router)
	routerRole.AddURL(router)
}