export const request = (query, callback) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      return callback(JSON.parse(this.responseText))
    }
  };
  xhttp.open("GET", query, true);
  xhttp.send();
}
