function listar(){ //Funcao para listar todos os repositorios de um usuario
    var inputElement = document.querySelector("input[name=user]"); //Recebe o valor do input
    var user = inputElement.value; //Declara para uma variavel
    console.log(user);

    axios.get("https://api.github.com/users/"+user+"/repos") //Realiza a requisicao
    .then(function(response){
        var length = response.data.length; //Recebe a quantidade de repositorios do usuario
        console.log(response.data.length);
        if(length > 0){ //Se for maior que 0
            var ulElement = document.createElement("ul"); //Cria um lista
            for(var index = 0; index < length; index++){ //Percore todos os objetos JSON da reposta
                var name_repo = response.data[index].name; //Armazena o nome de cada repositorio
                console.log(name_repo);
                var liElement = document.createElement("li");//Cria um indice na lista
                liElement.appendChild(document.createTextNode(name_repo));///Atribui o nome do repositorio ao indice da lista
                ulElement.appendChild(liElement);//Insre o indice na lista
            }
            var containerElement = document.querySelector("#app");//Cria um objeto do body
            containerElement.appendChild(ulElement); //Insere a lista completa
        }
    })
    .catch(function(error){
        console.warn(error);
    }
    );
}