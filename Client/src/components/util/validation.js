

export default function validation(userData) {
  const expReg = /\S+@\S+\.\S+/;
  const expRegPass = /\d/;
  const error = {}
if(!userData.email.length) error.email = 'Debe ingresar un email';
if(userData.email.length > 35) error.email = 'El mail debe tener menos de 35 caracteres'
if(!expReg.test(userData.email)) error.email = 'Debe ingresar un mail correcto' 


if(!userData.password.length) error.password = 'Debe ingresar una contraseña'
if(userData.password.length < 6) error.password = 'Debe tener mas de 6 caracteres';
if(userData.password.length > 10) error.password = 'Debe tener menos de 10 caracteres';
if(!expRegPass.test(userData.password)) error.password = 'Debe tener al menos un numero'


  return error;
}
