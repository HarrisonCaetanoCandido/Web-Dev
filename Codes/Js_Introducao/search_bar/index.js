// Popular dados
var dados = [
    "Analista de T.I","Desenvolvedor","Programador",
    "Auxiliar de T.I", "Analista de Tecnologia","Analista De Suporte Júnior",
    "Desenvolvedor Oracle","Gerente de E-commerce","Administrador De Sistemas",
    "Assistente de Suporte Técnico","Desenvolvedor de Sistemas","Analista de projetos em TI&C",
    "Suporte Técnico de TI","Engenheiro de Sistemas","Analista de Sistemas",
    "Especialista de Cybersecurity","Técnico de Suporte","Analista De Sistemas",
    "Assistente de T.I","Instrutor De Informática","Assistente de T.I"
];

var i,j;
var tbody = document.getElementById("tbody"); // recebe .tbody

for(i = 0;i<dados.length; i++){
    var tr = "<tr>" + "<td>" + dados[i] + "</td>" + "</tr>"; // copia os dados do vetor dados para a variavel tr
    tbody.innerHTML += tr; // incrementa tr em todo o html existente em tbody (se nao existe, vai criar as tags)
}

// Fim popular dados

document.getElementById("buscador").addEventListener("keyup", function(){ // recebe a classe buscador quando a tecla for disparada
    var busca = document.getElementById("buscador").value.toLowerCase();

    for(i=0;i<tbody.childNodes.length;i++){ // ve o comprimento das tags na variavel tbody e estabelece o laco
        var achou = false;
        var tr = tbody.childNodes[i]; // por Nó Filho (tags)
        var td = tr.childNodes // filhos de tr, que sao as tags td

        for(j=0;j<td.length;j++){
            var value = td[j].childNodes[0].nodeValue.toLowerCase();

            if(value.indexOf(busca)>=0){
                achou=true;
            }
        }
        if(achou){
            tr.style.display = "table-row";
        }else{
            tr.style.display = "none";
        }
    }
});