let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${ this.nombre } ${ this.apellido } - poder ${ this.poder}`;
    }
}

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);
