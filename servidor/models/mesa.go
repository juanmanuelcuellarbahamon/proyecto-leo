package models

type Mesa struct {
	IdMesa 		int    `json:"id_mesa" db:"id_mesa"`
	Descripcion	string `json:"descripcion" db:"descripcion"`
}

type AgregarMesa struct {
	Descripcion	string `json:"descripcion" db:"descripcion"`
}