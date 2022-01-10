/* Viene fornito un layout di base e un file js in cui è definito un array di oggetti
 che rappresentano i membro del team. Ogni membro ha le informazioni necessarie
per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html,
 stampiamo dinamicamente una card per ogni membro del team.  */

//Creo l'aggancio con il DOM
const hookHtml = document.querySelector(".hook");

//array di oggetti "team"

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < team.length; i++) {
  // assegnazione di una costante al valore team[i]
  const teamMember = team[i];
  // stampo in pagina
  hookHtml.innerHTML += `<div class="team-card">
  <div class="card-image">
    <img
      src="img/${teamMember.image}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3> ${teamMember.name} </h3>
    <p> ${teamMember.role} </p>
  </div>
</div>`;
}
