function frontToBackMiddleware (req, res, next) {
    if (req.session.name != undefined) {
       res.locals.nombre = req.session.name;
    }
    next()
}
module.exports = frontToBackMiddleware   

//aca es donde mediante el objeto locals (de ejs) le paso la informacion del usuario, si esta conecatdo o no 

/*
si yo tengo algo asi:

(req, res) => {
        res.render("index", {
            title: "hola"
        } );
    },

    o sea ahi lo q dice, es renderiza la pagina index y ademas le voy a pasar mediante el objeto locals un titulo
    para acceder podria ser locals.titl
*/