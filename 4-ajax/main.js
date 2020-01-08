axios.get("https://api.github.com/users/gitandlucsil")
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.warn(response);
    }
    );
