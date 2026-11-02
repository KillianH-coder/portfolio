// Content of each project, keyed by the planet's id in the HTML.
// Leave github/demo as "" to hide the matching button.
const projects = {
    forum: {
        description:
            "Gestion d'une base de données avec SQLite.\n" +
            "Comptes utilisateurs et authentification.\n" +
            "Postes et commentaires pour les utilisateurs.",
        features: ["Comptes et authentification", "Postes et commentaires", "Base SQLite"],
        github: "",
        demo: ""
    },
    groupie: {
        description:
            "Utilisation d'une API donnée.\n" +
            "Barre de recherche.\n" +
            "Affichage des données et des informations associées.",
        features: ["Appels API", "Barre de recherche", "Affichage des données"],
        github: "https://github.com/KillianH-coder/groupie-tracker-search-bar",
        demo: ""
    },
    atm: {
        description:
            "Programme qui simule un distributeur automatique.\n" +
            "Complétion de code existant.\n" +
            "Données dans des fichiers texte, communication avec le terminal.",
        features: ["Données dans des fichiers texte", "Interaction terminal"],
        github: "https://github.com/KillianH-coder/atm-management-system",
        demo: ""
    },
    "world-cup": {
        description:
            "Simule une Coupe du monde, des phases de poules jusqu'à la finale.\n" +
            "Résultats écrits dans des fichiers texte.",
        features: ["Phases de poules", "Phases finales", "Résultats en fichiers texte"],
        github: "https://github.com/KillianH-coder/world-cup",
        demo: ""
    },
    tournament: {
        description:
            "Application web pour créer des arbres de tournois.\n" +
            "Suivi de l'avancement des matchs en direct.",
        features: ["Création d'arbres de tournoi", "Suivi des matchs en direct"],
        github: "https://github.com/KillianH-coder/tournament-bracket-generator",
        demo: ""
    },
    sport: {
        description:
            "Programme à usage personnel pour suivre ses entraînements sportifs.\n" +
            "Il simule un jeu vidéo avec un niveau, un calendrier et un profil pour voir sa progression.",
        features: ["Niveau, calendrier et profil", "Sauvegarde en JSON", "Interaction terminal"],
        github: "https://github.com/KillianH-coder/sport",
        demo: ""
    }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalGithub = document.getElementById("modal-github");
const modalDemo = document.getElementById("modal-demo");

// Show a link only if the project has a URL for it
function setLink(element, url) {
    element.hidden = !url;
    if (url) element.href = url;
}

function openProject(planet) {
    const data = projects[planet.id];

    // title and tags are read from the planet itself
    modalTitle.textContent = planet.querySelector(".subtitle").textContent;
    modalTags.textContent = planet.querySelector(".sub-subtitle").textContent;

    // everything else comes from the projects object
    modalDescription.textContent = data ? data.description : "";

    modalFeatures.replaceChildren();
    if (data) {
        data.features.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            modalFeatures.appendChild(li);
        });
    }

    setLink(modalGithub, data && data.github);
    setLink(modalDemo, data && data.demo);

    modal.showModal();
}

document.querySelectorAll(".planet").forEach(planet => {
    planet.addEventListener("click", () => openProject(planet));
});

document.getElementById("modal-close").addEventListener("click", () => modal.close());

// a click on the dark backdrop closes it too
modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
});