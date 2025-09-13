
const formulario = document.getElementById("multiplicacion")
formulario.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const respuesta = document.getElementById("respuesta")
    respuesta.innerHTML = "El resultado es: " + num1*num2
})