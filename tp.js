/*
Realizar una función que reciba dos callbacks. El primer callback devuelve el array de objetos que se deben unir luego del tiempo en segundos que indica el retorno del segundo callback. La función devolverá una promesa. Se espera que dicha promesa, devuelva el resultado luego de la cantidad de segundos indicada. En caso de no recibirse un array, se devolverá este mensaje de error: 'Array de entrada no válido'. Si el callback no proporciona un tiempo válido, se devolverá 'Tiempo de entrada no válido' 
*/
async function objectMerge(array, tiempo) {

  let promise = new Promise((resolve,reject) => {
    
    let objects = array();
    let target = {}
    if (Array.isArray(objects)){  
      objects.forEach(obj => {
          Object.assign(target,obj)
      });
    }
    else{
      reject( "Array de entrada no válido");
    }
    
    if (typeof tiempo() == 'number'){
      let miliseconds = tiempo() * 1000
      setTimeout(function(){
        resolve(target); 
      }, miliseconds)
    }
    else{
      reject("Tiempo de entrada no válido")
    }
  })
    return promise
}
/*
La funcion contador debe retornar una funcion que cuando sea invocada retorne un valor creciente.
el primer valor deberia ser 1.
Sugerencia: usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function contador() {
  let cuenta = 0;
  const aumentarContador = () =>{
    cuenta++;
    return cuenta;
  }
  return aumentarContador
}
/*
Usa closures para crear un cache para la funcion cb.
La funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
Cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion.
Cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb deberia retornar el resultado (previamente guardado)

Ejemplo:
cb -> function(x) { return x * x; }
si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache).
Nota: usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
      usá hasOwnProperty!
*/
function cacheFunction(cb) {

  operations = {}
  const multWithCache = (y) => {
    if (operations.hasOwnProperty(y)) {
      return operations[y]
    }
    else{
      let result = cb(y);
      operations[y] = result;
      return result;
    }
  }
  return multWithCache
}

module.exports = {
  objectMerge,
  contador,
  cacheFunction
};