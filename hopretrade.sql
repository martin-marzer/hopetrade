DROP DATABASE IF EXISTS hopetrade;
CREATE DATABASE hopetrade;
USE hopetrade;



DROP TABLE IF EXISTS hopetrade.categoria;

CREATE TABLE hopetrade.categoria (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deleted_at TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT categoria_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE iF EXISTS hopetrade.filial;

CREATE TABLE hopetrade.filial (
    id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    descripcion  VARCHAR(200) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT filial_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE IF EXISTS hopetrade.usuario;

CREATE TABLE hopetrade.usuario (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	mail VARCHAR(50) NOT NULL,
	password TEXT NOT NULL,
	rol VARCHAR(20) NOT null ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT usuario_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE IF EXISTS hopetrade.usuario_comun;

CREATE TABLE hopetrade.usuario_comun (
	id INT NOT NULL AUTO_INCREMENT,
	dni VARCHAR(10) NOT NULL,
    usuario_id INT NOT NULL,
	telefono VARCHAR(15) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
    CONSTRAINT usuario_comun_PK PRIMARY KEY (id),
    CONSTRAINT usuario_comun_FK FOREIGN KEY (usuario_id) REFERENCES hopetrade.usuario(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE IF EXISTS hopetrade.voluntario;

CREATE TABLE hopetrade.voluntario (
	id INT NOT NULL AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    filial_id INT NOT NULL,
    CONSTRAINT voluntario_PK PRIMARY KEY (id),
    CONSTRAINT voluntario_FK FOREIGN KEY (usuario_id) REFERENCES hopetrade.usuario(id),
	CONSTRAINT voluntario_FK_1 FOREIGN KEY (filial_id) REFERENCES hopetrade.filial(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE IF EXISTS hopetrade.representante;

CREATE TABLE hopetrade.representante (
	id INT NOT NULL AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    CONSTRAINT representante_PK PRIMARY KEY (id),
    CONSTRAINT representante_FK FOREIGN KEY (usuario_id) REFERENCES hopetrade.usuario(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;



DROP TABLE IF EXISTS hopetrade.publicacion;

CREATE TABLE hopetrade.publicacion (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	descripcion TEXT NOT NULL,
    url_foto VARCHAR(200) NOT NULL,
    categoria_id INT NOT NULL,
    usuario_id INT NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NULL DEFAULT NULL,
	deleted_at TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT publicacion_PK PRIMARY KEY (id),
	CONSTRAINT publicacion_FK FOREIGN KEY (categoria_id) REFERENCES hopetrade.categoria(id),
    CONSTRAINT publicacion_FK_1 FOREIGN KEY (usuario_id) REFERENCES hopetrade.usuario_comun(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;