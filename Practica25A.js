/* const Cuenta_Corriente=[
{NCuenta:1, nombre: 'Juan', saldo:500, Tcuenta:'CC'},
{NCuenta:2, nombre: 'Julio', saldo:1000, Tcuenta:'CC'},
{NCuenta:3, nombre: 'Maria', saldo:1500, Tcuenta:'CA'},
{NCuenta:4, nombre: 'ezequiel', saldo:2000, Tcuenta:'CC'}
]

function buscar(evento){
    let ind= -1;
    for (let i=0; i<Cuenta_Corriente.length; i++ ){
        if(Cuenta_Corriente[i].NCuenta==evento.target.parentElement.NCuenta){
             indice=i;
             break
        }
        return i;
    }
    if (ind>=0) Cuenta_Corriente.push(ClienteEncontrado)
}

*/

// Simulamos los datos de las cuentas corrientes
const cuentasCorrientes = [ //Armamos un array con objetos como propiedades
    {
      numero: "001",
      nombre: "Carlitos Gonzalez",
      saldo: 10000000,
    },
    {
      numero: "002",
      nombre: "Juan Gonzalez",
      saldo: 5000,
    },
    {
      numero: "003",
      nombre: "Analia Rodriguez",
      saldo: 1500,
    },
  ];
  
  // Variable que guarda en memoria el nro. de cuenta.Pedimos al 
  //usuario que ingrese el número de cuenta a buscar
  //usamos prompt que nos da una pausa un alto armandonos una interfaz de
  //usario lectura escritura
  const numeroCuenta = prompt("Ingrese el número de cuenta a buscar:");
  
  // Buscamos la cuenta corriente correspondiente al número ingresado
  //usamos el metodo "find" que busca en el "array" de acuerdo a un paramentro
  //y de acuerdo a lo ingresado en el prompt y la duncion flecha que nos ayuda a encontrar 
  //que los numeros tanto el ingresado "numeroCuenta" como el "numero" del objeto sean si o si los 
  //mismos
  const cuentaEncontrada = cuentasCorrientes.find((cuenta) => cuenta.numero === numeroCuenta);
  //Este método toma una función como argumento y devuelve el primer elemento del 
  //array que cumple con la condición especificada en la función.
  // Si se encontró la cuenta, la mostramos por browser
  //ATENCION la función flecha se utiliza para definir 
  //el criterio de búsqueda dentro del método find()
  if (cuentaEncontrada) {
    alert("Nombre: " + cuentaEncontrada.nombre);//muestro + leyenda
    alert("Saldo: " + cuentaEncontrada.saldo); //muestro + leyenda
  } else {
    alert("No se encontró la cuenta con el número ingresado.");// No encontro
  }