const Materia = require('../models/materia'); // esto es un manera de hacer consultas,ya que este tiene el modelo

const materiaCtrl = {};

materiaCtrl.getMateria = async(req, res) => {
    await Materia.findOne({ codigo_materia: req.params.id }).then((materia) => {
        res.json(materia)
    }).catch((err) => {
        res.json({
            'error': err
        })
        res.status(404)
    })
}

materiaCtrl.getMaterias = async(req, res) => {
    Materia.find().then((materias) => {
            res.json(materias);
        })
        .catch((e) => {
            res.json(e);
        })
}

materiaCtrl.createMateria = async(req, res) => {
    const materia = new Materia({
        codigo_materia: req.body.codigo_materia,
        nombre_mat: req.body.nombre_mat,
        horas_teo: req.body.horas_teo,
        horas_pra: req.body.horas_pra,
        horas_lab: req.body.horas_lab,


    });

    await materia.save().then(() => {
        res.status(200);
        res.json({
            'status': 'ok'
        });
    }).catch((err) => {
        console.log(err)
        res.json({
            'status': err
        })
    })

}

materiaCtrl.getNameOfMateria = async(req, res) => {
    Materia.findOne({ codigo_materia: req.params.id }).then((materia) => {
        res.json({ 'name': materia.nombre_mat })
    })
}

materiaCtrl.deleteMateria = async(req, res) => {
    console.log(req.params)
    let user = Materia.findOneAndDelete({ codigo_materia: req.params.id }).then(() => {
            res.json({ 'status': true,
'id':req.params.id })

        })
        .catch((e) => {
            res.json({
                'status': false
            })
        })
}

materiaCtrl.updateMateria = async(req, res) => {
    let materia = {
        codigo_materia: req.body.codigo_materia,
        nombre_mat: req.body.nombre_mat,
        horas_teo: req.body.horas_teo,
        horas_pra: req.body.horas_pra,
        horas_lab: req.body.horas_lab,


    }

    Materia.findOneAndUpdate({ codigo_materia: req.params.id }, { $set: materia }).then((materia) => {
            res.json(materia)
        })
        .catch((e) => {
            res.json({
                'status': e
            })
        })
}





module.exports = materiaCtrl