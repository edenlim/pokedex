import api from '../constants/endpoints'

export const searchPokemon = (query, callback) => {
  console.log(query)
  // const url = [
  //   {
  //     string: `${api.pokemon}${query}`,
  //     path: 'pokemon'
  //   },
  //   {
  //     string: `${api.pokemonform}${query}`,
  //     path: 'pokemonform'
  //   },
  //   {
  //     string: `${api.pokemonspecies}${query}`,
  //     path: 'pokemonspecies'
  //   }
  // ]
  // let response = {}

  // url.forEach(e => {
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log(JSON.parse(this.responseText))
  //       response = {
  //         ...response,
  //         [e.path]: JSON.parse(this.responseText)
  //       }
  //       return
  //     }
  //   };
  //   xhttp.open("GET", `${api.pokemon}${query}`, true);
  //   xhttp.send();
  // })

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      return callback(JSON.parse(this.responseText))
    }
  };
  xhttp.open("GET", query, true);
  // xhttp.open("GET", `${api.pokemon}${query}`, true);
  xhttp.send();
}
