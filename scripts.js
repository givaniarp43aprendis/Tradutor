//https://api.mymemory.translated.net/get?q=Hello World!&langpair=pt-BR|en



let inputTexto = document.querySelector(".input-texto")//pegar o texto digitado

let traducaoTexto = document.querySelector(".traducao")//pegar o local da traducao

let idioma = document.querySelector(".idioma")//pegar o idioma selecionado

async function traduzir() {
  //montar o endereco da requisicao  

   
    let endereco = "https://api.mymemory.translated.net/get?q=" + inputTexto.value + "&langpair=pt-BR|" //montar o endereco da requisicao
    + idioma.value//adicionar o idioma selecionado no endereco

    let resposta = await fetch(endereco)
//fazer a requisicao
    let dados = await resposta.json()

   traducaoTexto.textContent = dados.responseData.translatedText//mostrar a traducao na tela

    
}
function ouvirVoz() {
    let voz = window.webkitSpeechRecognition 
    //criar o objeto de reconhecimento de voz
    let reconhecimentoVoz = new voz() 
    reconhecimentoVoz.lang = "pt-BR" 
    reconhecimentoVoz.onresult = (evento) => {
        let textoVoz = evento.results[0][0].transcript
        inputTexto.textContent = textoVoz

       traduzir()

    }
    reconhecimentoVoz.start()
}

