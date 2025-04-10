import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our','incredibly','unbelivable',];
let adj = ['great', 'big','enormous','tiny','weird'];
let noun = ['jogger', 'racoon','cat','whale','alien'];
let extensions = ['.com', '.net', '.us', '.io','.pe'];

let domainArray = []

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extensions) {
        domainArray.push(p + a + n + e);
      }
    }
  }
}

let domain = domainArray.join("<br>")

window.onload = function() {

  document.querySelector('#domain').innerHTML = domain;

};
