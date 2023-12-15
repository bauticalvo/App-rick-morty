const {User} = require('../DB_connection')

const postUser = async(req,res) =>{
    try {
        const {email , password} = req.body;
        if(email  && password){
            const newUser = await User.findOrCreate({where: req.body})
           return res.status(200).json(newUser);
        } else {
            return res.status(400).send('Faltan datos')
        }
    } catch (error) {
       return res.status(500).send(error.message);
    }
}

module.exports = postUser;