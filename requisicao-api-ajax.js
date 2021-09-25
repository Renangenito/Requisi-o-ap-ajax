const botao = document.querySelector("#botao")
botao.addEventListener("click", () => {
    var xhr = new XMLHttpRequest(); //passo 1
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //carregando requisição //passo 2
    
    xhr.addEventListener("load", ()=>{
        const resposta = xhr.responseText //Resposta da requisição porém está em Json ainda //passo3
        
        const pacientes = JSON.parse(resposta) //Convertendo Json para objeto javaScript //passo4

        console.log(pacientes)
    })
    
    xhr.send()
    
})


// Depois de ter o Json convertido em objeto ai da prara manipulá lo através das posições do array


