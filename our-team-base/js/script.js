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

//creo funzione printTeamMembers
function printTeamMembers(container, teamList) {
  container.innerHTML = "";
  for (let i = 0; i < teamList.length; i++) {
    // assegnazione di una costante al valore team[i]
    const teamMember = teamList[i];
    // stampo in pagina
    container.innerHTML += `<div class="team-card">
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
}
//eseguo la funzione PrintTeamMembers
printTeamMembers(hookHtml, team);

/* BONUS:
    Utilizziamo gli input presenti nella pagina per permettere all’utente 
    di aggiungere nuovi membri del team:
    cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene
    inserito nell’array iniziale, e viene stampata una nuova card con tutte
    le informazioni inserite dall’utente. */

// Collego buttonNewMember con il button i  HTMLs
buttonNewMember = document.getElementById("addMemberButton");

// Assegno addEventListener al bottone
buttonNewMember.addEventListener("click", function () {
  //raccoglie il valore dell'input "name"
  const newUsername = document.getElementById("name").value;
  //raccoglie il valore dell'input "role"
  const newUserRole = document.getElementById("role").value;
  //raccoglie il valore dell'input "image"
  const newUserImage = document.getElementById("image").value;
  //creazione di un nuovo oggetto tramite il push nell'array "team"
  team.push({
    name: newUsername,
    role: newUserRole,
    image: newUserImage,
  });
  console.log(team);
  //eseguo la funzione PrintTeamMembers
  printTeamMembers(hookHtml, team);
});
