async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const data = await result.json();
    data.results.forEach(element => {
        if(element.id == 1){
            const image1 = document.createRange().createContextualFragment(`
                
                <div class="image">
                    <img src="${element.image}">
                </div>
                
                `)
                const about = document.getElementById('about');
                about.append(image1)

        }if(element.id >= 5 && element.id <= 6){
             const image2 = document.createRange().createContextualFragment(`
                
                <div class="pictures-image-1">
                    <img src="${element.image}">
                </div>
                
                `)
                const pictures = document.getElementById('pictures')
                pictures.append(image2)
        }
    });
}

const btn_enviar = document.getElementById('btn-enviar')
const valida = (e) => {
    e.preventDefault()  
    const arr = [];
    const listInputsNames = ["nombre", "email", "mensaje"];
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < listInputsNames.length; i++){
            if(arr[i].value == ""){
                alert(`el campo ${listInputsNames[i]} no puede estar vacío`)
                return false;
            }
        }
        if(!emailValido(email.value)){
            alert("El formato del email no es correcto")
            return false;
        }
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
        return true;
    }

}
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
getData()
btn_enviar.addEventListener("click", valida)

