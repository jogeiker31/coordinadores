const Usuario = require('../models/usuario'); // esto es un manera de hacer consultas,ya que este tiene el modelo

const usuarioCtrl = {};

usuarioCtrl.getUser = async(req, res) => {
    await Usuario.findOne({ usuario: req.body.usuario, password: req.body.password }).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.json({
            'status': 'error 404',
            'error': err
        })
        res.status(404);

    })


}

usuarioCtrl.getUsers = async(req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios)
}


usuarioCtrl.createUsuario = async(req, res) => {
    const usuario = new Usuario({
        usuario: req.body.usuario,
        password: req.body.password,
        ci_coor: req.body.ci_coor,
        nom_coor: req.body.nom_coor,
        ape_coor: req.body.ape_coor,
        correo_coor: req.body.correo_coor,
        role: req.body.role

    });

    await usuario.save().then(() => {
        res.status(200);
        res.json({
            'status': 'Usuario Saved'
        });
    }).catch((err) => {
        console.log(err)
        res.json({
            'status': err
        })
    })

}

usuarioCtrl.deleteUser = async(req, res) => {
    console.log(req.params)
    let user = Usuario.findByIdAndDelete(req.params.id).then(() => {
        res.json({ 'status': 'Se borro' })
    })
}





module.exports = usuarioCtrl