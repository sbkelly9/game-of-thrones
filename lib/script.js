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

// const button = document.querySelector(".js-button");

// button.addEventListener("click");

// function handleClickEvent(e) {

//   console.log();
// }


let characterDivs = document.querySelectorAll(".character");

for (let i = 0; i < characterDivs.length; i++){
  let child = document.createElement("button");
  let moreInfo = document.createElement("p")
  child.textContent = "More Info";
  moreInfo.textContent = characters[i].bio
  child.classList.add("more-info");
  moreInfo.classList.add("hidden")
  child.addEventListener('click', showInfo);
  characterDivs[i].appendChild(child);
  characterDivs[i].appendChild(moreInfo);
}

function showInfo(e){
  console.log(e.target.nextSibling);
  e.target.nextSibling.classList.toggle("hidden")
}



