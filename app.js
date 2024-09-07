function pesquisar() {
    // Logs a message to the console indicating a click event (for debugging purposes)
    // console.log("clicou");
  
    // Gets a reference to the element with the ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de atleta ou esporte</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()


  //  console.log(campoPesquisa); // Logs the retrieved section element

  
    // Initializes an empty string to store the search results HTML content
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Loops through each item in the "dados" array (assuming it's an array of objects)
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            // Concatenates HTML code for each search result item to the "resultados" string
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">More information</a>
            </div>
    `;
  }

  if (!resultados){
    resultados = "<p>Nada foi encontrado</P>"
  }

  // Sets the inner HTML content of the "resultados-pesquisa" section with the accumulated results
  section.innerHTML = resultados;


      //  console.log(dado.titulo.includes(campoPesquisa))
      
  }