const { validationResult, matchedData } = require("express-validator")

const Usuario = require('../database/models/Usuario')
const Representante = require("../database/models/Representante");

const controlador = {
    register: (req, res) => {
        res.render("loginRegister/register");
    },
    registerProcess: async (req, res) => {
        //antes de ejecutarse esta funcion se verifican los campos (vease en las rutas).
        const result = validationResult(req);
        //req.body, el cuerpo de la solicitud viene del formulario, los inputs se vinculan mediante el atributo "name"
        const {nombre, apellido, dni, mail, password, telefono, fecha} = req.body;

        if (result.errors.length > 0) {
            return res.render("loginRegister/register", {
                errors: result.mapped(),
                msgError: "Hubo un problema al registrarse. intentelo de nuevo",
                oldData: req.body
            });
        }
        try {
            const usuario = await Usuario.create({
                nombre: nombre, 
                apellido: apellido,
                dni: dni,
                mail: mail,
                password: password,
                telefono: telefono,
                fecha_nacimiento: fecha
            });
            res.redirect("/login")
        } catch (error) {
            console.log(error)
        }
        
    },
    login: (req, res) => {
        res.render("loginRegister/login");
    },
    loginProcess: async (req, res) => {
        const result = validationResult(req);
        const {dni_mail, password} = req.body;
        let usuario;

        if(result.errors.length > 0){
            return res.render("loginRegister/login", {
                errors: result.mapped(),
                msgError: "Hubo un problema con su inicio de sesión",
                oldData: req.body
            });
        }

        if(!dni_mail.includes("@") ){
            usuario = await Usuario.findOne({ where: { dni: dni_mail } });
        } else {
            usuario = await Representante.findOne({ where: { mail: dni_mail } });
            // if (!usuario)  usuario = await Voluntario.findOne({ where: { mail: dni_mail } });
        }

        if (!usuario || usuario.password != password) {
            return res.render("loginRegister/login", {
                msgError: "Hubo un problema con su inicio de sesión",
                oldData: req.body
            });
        }


        req.session.name = usuario.nombre;
        res.redirect("/")

     },
     logout: (req,res) =>{
        req.session.destroy();
        res.redirect('/')
      },
}

module.exports = controlador;