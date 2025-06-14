import { CardData } from "../models/card";


export const getProjects = (language = 'fr'): CardData[] => {
    if (language === "fr") {
        return projectFr
    } else {
        return projectEn
    }
}
const projectFr = [
    {
        title: 'Bookie : Page d\'accueil d\'une agence de voyage',
        subTitle: 'Projet OpenClassrooms',
        description: 'J\'ai créé la page d\'accueil d\'une agence de voyage en utilisant HTML et CSS, en intégrant une interface responsive basée sur des maquettes Figma pour mobile, tablette et desktop. J\'ai développé des composants d\'interface pour garantir une correspondance exacte avec le design et veiller à ce que le site fonctionne parfaitement sur toutes les tailles d\'écran. Ce projet m\'a permis de renforcer mes compétences en design responsive et en structuration de code pour le web.',
        imageUrl: "/booki.png",
        GHlink: 'https://github.com/Nosylax/BOOKI',
        GHPlink: 'https://nosylax.github.io/BOOKI/'

    },
    {
        title: 'Kasa : Application de location de logement avec React',
        subTitle: 'Projet OpenClassrooms',
        description: 'J\'ai développé le front-end d\'une application de location de logement en utilisant React et React Router. J\'ai créé des composants pour afficher les informations des logements et configuré la navigation entre les pages de manière fluide. Le projet m\'a permis de renforcer mes compétences en gestion de l\'état avec les hooks et en développement d\'interfaces utilisateur modernes et réactives.',
        imageUrl: "/kasa.png",
        GHlink: 'https://github.com/Nosylax/kasa-app',



    },
    {
        title: 'Sophie Bluel : Site web dynamique',
        subTitle: 'Projet OpenClassrooms',
        description: 'Dans ce projet, j\ai créé une page web dynamique pour le site d\'une architecte d\intérieur en utilisant JavaScript et en intégrant une API. J\ai développé la page de présentation des travaux de l\architecte, une page de connexion pour l\administrateur, et une modale pour uploader de nouveaux médias. Ce projet m\a permis de perfectionner mes compétences en manipulation du DOM, gestion des événements utilisateurs, et communication avec une API, tout en utilisant des outils comme Figma, Visual Studio Code, et GitHub.',
        imageUrl: "/SophieBluel.png",
        GHlink: 'https://github.com/Nosylax/Portfolio-architecte-sophie-bluel',

    }
]

const projectEn = [
    {
        title: 'Bookie: Homepage of a Travel Agency',
        subTitle: 'Projet OpenClassrooms',
        description: 'I created the homepage of a travel agency using HTML and CSS, building a responsive interface based on Figma mockups for mobile, tablet, and desktop. I developed UI components to ensure an exact match with the design and made sure the site works flawlessly on all screen sizes. This project helped me strengthen my skills in responsive design and web code structuring.',
        imageUrl: "/booki.png",
        GHlink: 'https://github.com/Nosylax/BOOKI',
        GHPlink: 'https://nosylax.github.io/BOOKI/'
    },
    {
        title: 'Kasa: Housing Rental App with React',
        subTitle: 'Projet OpenClassrooms',
        description: 'I developed the front-end of a housing rental application using React and React Router. I created components to display housing information and configured smooth navigation between pages. This project allowed me to improve my state management skills using hooks and develop modern, responsive user interfaces.',
        imageUrl: "/kasa.png",
        GHlink: 'https://github.com/Nosylax/kasa-app'
    },
    {
        title: 'Sophie Bluel: Dynamic Website',
        subTitle: 'Projet OpenClassrooms',
        description: 'In this project, I created a dynamic webpage for an interior architect’s website using JavaScript and integrating an API. I developed the project showcase page, an admin login page, and a modal for uploading new media. This project helped me refine my skills in DOM manipulation, user event handling, and API communication, while using tools like Figma, Visual Studio Code, and GitHub.',
        imageUrl: "/SophieBluel.png",
        GHlink: 'https://github.com/Nosylax/Portfolio-architecte-sophie-bluel'
    }
]
