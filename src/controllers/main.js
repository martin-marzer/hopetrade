
const controlador = {
    index: (req, res) => {
        res.render("index");
    },
    panel: (req, res) => {
        res.render("panelVoluntario");
    }
}

module.exports = controlador;