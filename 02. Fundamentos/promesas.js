let empleados = [{
    id: 1,
    nombre: 'David'
},{
    id: 2,
    nombre: 'Ingrid'
},{
    id: 3,
    nombre: 'Oscar'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}]

let getEmpleado = (id) =>{

    return new Promise( (resolve, reject)=>{
        let empleadoDB = empleados.find( empleado => {
            return empleado.id ===  id;
        })
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${ id }`)
        }else{
            resolve(empleadoDB);
        };
    });
};

let getSalario = (empleado) =>{
    return new Promise( (resolve, reject) =>{
        let salarioDB = salarios.find(salario =>{
            return salario.id === empleado.id;
        });

        if(!salarioDB){
            reject(`No se encontro un salario para el usuario ${ empleado.nombre }`);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        };
    });
};

getEmpleado(2).then(empleado =>{
    return getSalario(empleado);
    })
    .then(respuesta => {
        console.log(`El saladio de ${respuesta.nombre}, es de ${respuesta.salario}`);
    })
    .catch(err => {
        console.log(err)
    })