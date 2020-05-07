var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];



let characterDivs = document.querySelectorAll(".character");

for (let i = 0; i < characterDivs.length; i++){
  let child = document.createElement("button");
  let moreInfo = document.createElement("p")
  let aliveOrDeadButton = document.createElement("button");
  let aliveOrDead = document.createElement("p")
  const status = characters[i].status.toUpperCase()
  aliveOrDeadButton.textContent = "Alive or Dead?";
  child.textContent = "More Info";
  moreInfo.textContent = characters[i].bio
  aliveOrDead.textContent = status;
  const className = status === "ALIVE"?"alive":"dead";
 
  child.classList.add("more-info");
  aliveOrDeadButton.classList.add("more-info");

  moreInfo.classList.add("hidden")
  aliveOrDead.classList.add("hidden", className)

  child.addEventListener('click', showInfo);
  aliveOrDeadButton.addEventListener('click', showInfo);

  characterDivs[i].appendChild(child);
  characterDivs[i].appendChild(aliveOrDeadButton);
  characterDivs[i].appendChild(moreInfo);
  characterDivs[i].appendChild(aliveOrDead);
  
}


function showInfo(e){
  console.log(e.target.nextSibling);
  e.target.nextSibling.nextSibling.classList.toggle("hidden")
}

// function isAlive(e) {
//   console.log(e.target.nextSibling);
//   e.target.nextSibling.classList.toggle("hidden")
// }



