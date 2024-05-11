const path = require('path');
const fs = require('fs');

const User = require('../database/models/Usuario')
const CommonUser = require('../database/models/UsuarioComun')

const controlador = {
    register: (req, res) => {
        res.render("loginRegister/register");
    },
    registerProcess: async (req, res) => {
        const {nombre, apellido, mail, password, telefono, fecha} = req.body
        try {
            const usuario = await User.create({
                nombre: nombre, 
                apellido: apellido, 
                mail: mail, 
                password: password,
                rol: "usuario"
            });
    
            console.log(`creaste el usuario llamado ${usuario.nombre} con el rol ${usuario.rol}`);
    
            const usuarioComun = await CommonUser.create({
                usuario_id: usuario.id, 
                telefono: telefono,
                fecha_nacimiento: fecha
            });
    
            console.log(`ademas el usuario tiene estos datos: ${usuarioComun.dataValues}`);
    
            res.redirect("/login")
        } catch (error) {
            console.log(error)
        }

        
    },
    login: (req, res) => {
        res.render("loginRegister/login");
    },
    loginProcess: (req, res) => {
        // Prepare output in JSON format
        console.log(req.body)
        //aca es donde se crea la sesion que me CAMBIA TODO
        req.session.name = req.body.nombre;

        res.redirect("/")

        // res.render("loginRegister/login", {
        //     info: JSON.stringify(req.body)
        // });
    
     },
     logout: (req,res) =>{
        req.session.destroy();
        res.redirect('/')
      },
}

module.exports = controlador;