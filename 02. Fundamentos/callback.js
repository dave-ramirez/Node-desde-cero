// setTimeout(() =>{
//     console.log('hola mundo')
// }, 3000);

let getUsuarioById = ( id, callback ) =>{
    let usuario = {
        nombre: 'David',
        id
    }

    if( id === 20){
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);   
    }
}


getUsuarioById(10, (err, usuario)=> {

    if(err){
        return console.log(err);
    }

    console.log('Usuario de la base de datos', usuario)
})