const Profesor = require('../models/profesor');

const profesorCtrl = {};

profesorCtrl.getProfesor = async(req, res) => {
    await Profesor.findOne({ ci_profesor: req.params.id }).then((profesor) => {
        res.json(profesor)
    }).catch((err) => {
        res.json({
            'error': err
        })
        res.status(404)
    })
}

profesorCtrl.getProfesores = async(req, res) => {
    Profesor.find().then((profesores) => {
            res.json(profesores)
        })
        .catch((err) => {
            res.json(err);
        })
}

profesorCtrl.createProfesor = async(req, res) => {
    const profesor = new Profesor({
        ci_profesor: req.body.ci_profesor,
        nom_prof: req.body.nom_prof,
        ape_prof: req.body.ape_prof,
        cor_prof: req.body.cor_prof,
        horas_est: req.body.horas_est,
        /*  horas_ocupadas: req.body.horas_ocupadas,
         tipo: req.body.tipo */
    });

    await profesor.save().then(() => {
            res.status(200);
            res.json({
                'status': 'ok'
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                'status': err
            })
        })
}


//No se si se use , pero creo que no ya que no veo que uses alguna funcnion parecida en horario.component
profesorCtrl.getNameProfesor = async(req, res) => {
    Profesor.findOne({ ci_profesor: req.param.id })
        .then((profesor) => {
            res.json({ 'name': profesor.nom_prof })
        })
}

profesorCtrl.deleteProfesor = async(req, res) => {
    console.log(req.params)
    let user = Profesor.findOneAndDelete({ ci_profesor: req.params.id })
        .then(() => {
            res.json({ 'status': true })
        })
        .catch((err) => {
            res.json({
                'status': false,
                'id': req.params.id
            })
        })
}

profesorCtrl.updateProfesor = async(req, res) => {
    let profesor = {
        ci_profesor: req.body.ci_profesor,
        nom_prof: req.body.nom_prof,
        ape_prof: req.body.ape_prof,
        cor_prof: req.body.cor_prof,
        horas_est: req.body.horas_est,
        /*  horas_ocupadas: req.body.horas_ocupadas,
         tipo: req.body.tipo */
    }

    Profesor.findOneAndUpdate({ ci_profesor: req.params.id }, { $set: profesor })
        .then((profesor) => {
            res.json(profesor)
        })
        .catch((err) => {
            res.json({
                'status': err
            })
        })
}


module.exports = profesorCtrl