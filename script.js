let userInput = document.getElementById("date"); // Récupère l'élément input de type date
userInput.max = new Date().toISOString().split("T")[0]; // Définit la date maximale sélectionnable à aujourd'hui

let result = document.getElementById("result"); // Récupère l'élément pour afficher le résultat





function calculateAge() {
    let birthDate = new Date(userInput.value); // Récupère la date de naissance saisie par l'utilisateur

    let d1 = birthDate.getDate(); // permet de récupérer le jour de la date de naissance
    let m1 = birthDate.getMonth() + 1; // permet de récupérer le mois de la date de naissance
    let y1 = birthDate.getFullYear(); // permet de récupérer l'année de la date de naissance

    let today = new Date(); // Récupère la date actuelle

    let d2 = today.getDate(); // permet de récupérer le jour actuel
    let m2 = today.getMonth() + 1; // permet de récupérer le mois actuel
    let y2 = today.getFullYear(); // permet de récupérer l'année actuelle

    let d3, m3, y3; // Variables pour stocker la différence en jours, mois et années
    
    y3 = y2 - y1; // Calcul de la différence en années

    if (m2 >= m1) { // Si le mois actuel est supérieur ou égal au mois de naissance
        m3 = m2 - m1; // Calcul de la différence en mois
    } else {
        y3--; // On décrémente l'année si le mois actuel est inférieur au mois de naissance
        m3 = 12 + m2 - m1; // Calcul de la différence en mois en ajustant l'année
    }

    if (d2 >= d1) { // Si le jour actuel est supérieur ou égal au jour de naissance
        d3 = d2 - d1; // Calcul de la différence en jours
    } else {
       m3--; // On décrémente le mois si le jour actuel est inférieur au jour de naissance
       d3 = getDaysInMonth(y1, m1) + d2 - d1; // Calcul de la différence en jours en ajustant le mois
    }
       if (m3 < 0) { // Si le mois devient négatif après décrémentation
           m3 = 11; // On ajuste le mois à 11 (décembre)
           y3--; // On décrémente l'année
       }

//console.log(years = y3, months = m3, days = d3); // Affiche le résultat dans la console pour vérification
result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old.`;



}



function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
