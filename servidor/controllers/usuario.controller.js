const Usuario = require('../models/usuario'); // esto es un manera de hacer consultas,ya que este tiene el modelo

const usuarioCtrl = {};

usuarioCtrl.getUser = (req, res) => {
     Usuario.findOne({ usuario: req.body.usuario, password: req.body.password },(err,user)=>{
        if(err){
            res.status(200).json({
                ok:false,
                err
            })
        }else{
            console.log(user)
            if(user == null){
                res.status(200).json({
                    ok:false,
                    err: {code:404,msg:'not found'}
                })
            }else{
                res.status(200).json({
                    ok:true,
                    user
                })
            }
        }
    })


}


usuarioCtrl.getUserById = (req, res) => {
    Usuario.findById(req.params.id,(err,user)=>{
       if(err){
           res.status(200).json({
               ok:false,
               err
           })
       }else{
        
               res.status(200).json({
                   ok:true,
                   user
               })
           
       }
   })


}



usuarioCtrl.getUsers = async(req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios)
}


usuarioCtrl.createUsuario = async(req, res) => {
    const usuario = new Usuario(req.body);

    await usuario.save((err,newUser)=>{
        if(err){
            res.status(200).json({
                ok:false,
                err
            })
        }else{
            res.status(200).json({
                ok:true,
                newUser
            })
        }
    })

}

usuarioCtrl.deleteUser = async(req, res) => {
    console.log(req.params)
    let user = Usuario.findByIdAndDelete(req.params.id).then(() => {
        res.json({ 'status': 'Se borro' })
    })
}





module.exports = usuarioCtrl