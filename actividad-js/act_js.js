
//var number;

//number=prompt('Give me a number:');
//console.log(number);

function Suma (a,b){
    var mul = a * b
    return mul
}
console.log(Suma(1,2));

// Funciones de tipo Expresion
var variable = function(){
    return "hola";
}
console.log(variable())

var amigos = ['Amigo 1', 'Amigo 2', 'Amigo 3']
function saludarAmigos (amigo){
    console.log(`Hola, ${amigo}`)
}

//Bucle for
for ( var i=0; i < amigos.length; i ++){
    saludarAmigos(amigos[i]);
}

for (amigo of amigos) {
    saludarAmigos(amigo);
}

