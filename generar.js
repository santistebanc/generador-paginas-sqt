import ejs from "ejs";

let lista = [];

ejs.renderFile("templates/main.html", { page: "menu" }, {}, function(err, str) {
  document.getElementById("app").innerHTML = str;
});
