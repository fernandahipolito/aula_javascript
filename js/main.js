
function botao(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";
   //console.log(document.getElementById("agradecimento"));
   
    //alert ("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.uol.com.br/");//abre site em outra aba
   // window.location.href = "https://www.uol.com.br/"; //abre no mesmo lugar do site, sai do site atual
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!"
   elemento.innerHTML = "Obrigada por passar o mouse!"
    //alert ("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mmouse aqui!"
}

function load (){
    alert ("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function validaIdade(idade){
    var validar
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt ("Qual a sua idade?");
console.log(validaIdade(idade));*/



/*function soma (n1,n2){
    return n1 + n2;
}

/*function setReplace (frase , nome , novo_nome){
    return frase.replace (nome , novo_nome);
}
alert (soma (5 , 10));
alert (setReplace("Vai Japão" , "Japão" , "Brasil"));



/*var d = new Date();
alert (d.getMonth()+1);





/*var count;
for (count=0 ; count <= 5 ; count++){
    alert (count);
}



/*var count = 0;
while (count < 5){
    console.log (count);
    alert (count);
    count = count + 1; // ou count ++
}




var idade = prompt ("Qual sua idade?");
if (idade > 18){
    alert ("Maior de idade");
}else{
    alert ("Menor de idade");
}





var frutas = [{nome : "maçã" , cor: "vermelha"} , {nome : "uva" , cor: "roxa"}];
console.log (frutas);
alert (frutas[1].nome);*/



/*var fruta = {nome : "maçã" , cor: "vermelha"};
console.log (fruta.nome);
alert (fruta.cor);*/



//var lista = ["maçã" , "pêra" , "laranja"];
//lista.push ("uva"); //   inclui uva na lista
//lista.pop ();   tira o último elemento da lista

//console.log (lista.toString()); //transforma a lista em uma string
//console.log (lista.join (" - ")); separa as palavras por -, ou pelo que estiver dentro das aspas

//console.log (lista.reverse());

//console.log (lista.length);
//console.log (lista[1]);


/*var nome = "Fernanda Hipólito Haddad";
var idade= 42;
var idade2 = 10;
var frase = "O Japão é o melhor time do mundo!";
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log (nome);
console.log (idade + idade2);
console.log (frase.replace("Japão" , "Brasil"));
alert (frase.replace("Japão" , "Brasil"));
*/