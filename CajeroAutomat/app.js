var cuentas=[
{
    nombre:'Delia', 
    contraseña:'delia123',
    saldo:2323,
},
{ 
    nombre:'Misato',
    contraseña:'misato123',
    saldo:2323,

},
{
    nombre:'Lucas',
    contraseña:'lucas123',
    saldo:2323
}
];
// console.log(cuentas[2].nombre)

//VARIABLES DE BOTON DE CUENTAS

var nombreCuenta=document.querySelector('.nombreCuenta')
var strNombre=document.getElementById('strNombre')

var placeholder=document.getElementById('nombre')
// var placeholder=forms.elements['nombre']


nombreCuenta.addEventListener('click',()=>{
    // placeholder.innerHTML=strNombre
    // placeholder.value=strNombre;
    placeholder.value='shd'

})



//CONTRASEÑA VALIDACIÓN
var inputContraseña=document.querySelector('.contraseña')

function validation(arr){
    if(inputContraseña=arr.contraseña)
}

if(strNombre=cuentas[0].nombre){
    do{
        
    }
}
