window.onload = function() { //Au chargement de la page, création d'une fonction anonyme:
  let bt = document.getElementById("Bouton"); //on récupère le bouton HTML pour l'attribuer à bt
  bt.addEventListener("click", () => { "" //Si le boutton est clické, on execute la fonction request
    request();
  });
}


async function request() { //Fonction de requête vers l'API
  let nombre = document.getElementById("nombre").value; //On créer nombre qui récupère le texte dans la bare de recherche
  let selection = document.querySelectorAll('input[name="selection"]'); //On créer selection qui correspond à toutes les cases de sélection (Trivia,Math...)
  let selected = "" //On reset selected

  for (let i = 0; i < selection.length; i++) {  //Boucle pour parcourir toutes les valeurs de selection
    if (selection[i].checked) {  //Si la valeur de selection == true c'est qu'elle est cochée
      selected = selection[i].value //Donc on nomme selected par la case cochée
        break
    }
  }

  let response = await fetch('http://numbersapi.com/'+nombre+'/'+selected+'?json'); //Requête vers l'API avec les différents paramètres 
  let json = await response.json();
  console.log(json);

  const textHTML = document.createTextNode(json.text); //Création du texte composé du résultat de la requête
  div = document.createElement("div"); //Création d'une div
  div.appendChild(textHTML); //Ajout du texte comme enfant de la div
  const cible = document.getElementById("cible"); //Ciblage de la div cible
  cible.appendChild(textHTML); //Ajout du texte comme enfant de la div cible
}