const User = require('../DB_connection');

const login = async (req,res)=>{
    try {
        const {email, password} = req.query;
        if(email && password){
            const findEmail = await User.findOne({where: {email: email}})
            if(findEmail){
                const findPassword = await User.findOne({where: {password:password}})
                if(findEmail.password === password){
                  return res.status(200).json({access: true})  
                } else res.status(403).send('Contraseña incorrecta')
            } else res.status(404).send('Usuario no encontrado')
        }else {
            return res.status(400).send('Faltan datos')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = login;