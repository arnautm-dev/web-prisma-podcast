/*
 * CATÁLOGO DE PRISMA
 * Añade y edita episodios desde este archivo.
 * Sustituye spotifyUrl, description, sources y transcript cuando tengas el material definitivo.
 */
const episodes = [
    {
        number: "01",
        slug: "estado-por-dentro",
        title: "Cómo funciona un estado por dentro?",
        category: "Geografia",
        date: "31/10/2026",
        duration: "15min",
        description: "En este episodio exploramos cómo se relacionan los Estados, qué intereses políticos, económicos y estratégicos hay detrás de sus decisiones y cómo estas relaciones influyen en el equilibrio del mundo actual.",
        cover: "assets/ep01.png",
        spotifyUrl: "https://open.spotify.com/episode/0558pXZi8OYOaY6V8gUDMf?si=nqqIuxDkQtOUgTwSsJImRQ",
        sources: [],
        transcript: "",
        featured: false
    },
    {
        number: "02",
        slug: "como-implosiono-al-andalus",
        title: "Cómo implosionó realmente Al-Ándalus",
        category: "Historia",
        date: "31/10/2026",
        duration: "28min",
        description: "En este episodio descubrimos cómo surgió Al-Ándalus, cuáles fueron sus principales conflictos internos y qué luchas por el poder provocaron su fragmentación y caída. ¿Cómo terminó desmoronándose uno de los territorios más influyentes de la historia peninsular?",
        cover: "assets/ep02.png",
        spotifyUrl: "https://open.spotify.com/episode/5yp6IqaqSGZ02govMcotYT?si=JnUUgAZnTAmlNaCcCP254w",
        sources: [],
        transcript: "",
        featured: false
    },
    {
        number: "03",
        slug: "asi-nacieron-los-reinos-cristianos",
        title: "Así nacieron los reinos cristianos de Hispania",
        category: "Historia",
        date: "31/10/2026",
        duration: "25min",
        description: "En este episodio descubrimos cómo surgieron los primeros reinos cristianos en la península ibérica, desde la resistencia en el norte hasta su expansión territorial. Exploramos sus orígenes, evolución y rivalidades, y cómo acabaron configurando el mapa político de la Hispania medieval.",
        cover: "assets/ep03.png",
        spotifyUrl: "https://open.spotify.com/episode/5XIJa4DlvVAO72U6RBdnAD?si=qS_KCoVtSu-2JqiPRFm2Fw",
        sources: [],
        transcript: "",
        featured: false
    },
    {
        number: "04",
        slug: "la-realidad-cuantica-de-la-materia",
        title: "La realidad cuántica de la materia",
        category: "Física",
        date: "07/11/2026",
        duration: "16min",
        description: "Descubre el fascinante mundo de la física cuántica: desde la estructura de los átomos, los protones, neutrones y electrones, hasta los quarks, las partículas elementales y las fuerzas fundamentales. Exploraremos fenómenos sorprendentes como la superposición, el entrellaçament quàntic i l'experiment de la doble escletxa, per entendre com funciona la realitat a les escales més petites de l'univers.",
        cover: "assets/ep04.png",
        spotifyUrl: "",
        sources: [
            { title: "CERN — Standard Model", url: "https://home.cern/science/physics/standard-model" },
            { title: "CERN — Subatomic particles", url: "https://home.cern/science/physics/subatomic-particles/" },
            { title: "U.S. Department of Energy — Standard Model", url: "https://www.energy.gov/science/doe-explainsthe-standard-model-particle-physics" },
            { title: "ATLAS — Physics", url: "https://atlas.cern/Discover/Physics" },
            { title: "OpenStax — Atomic structure", url: "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism" },
            { title: "IUPAC — Periodic Table", url: "https://iupac.org/iptei/" },
            { title: "U.S. Energy Information Administration — Nuclear energy", url: "https://www.eia.gov/energyexplained/nuclear/" },
            { title: "Institute of Physics — Quantum mechanics", url: "https://www.iop.org/explore-physics/big-ideas-physics/quantum-mechanics" },
            { title: "Nobel Prize — Quantised world", url: "https://educationalgames.nobelprize.org/educational/physics/quantised_world/final-3.html" },
            { title: "Nobel Prize — 2022 Physics Prize", url: "https://www.nobelprize.org/prizes/physics/2022/popular-information/" },
            { title: "APS Physics — Quantum physics", url: "https://physics.aps.org/articles/v15/153" },
            { title: "Nobel Prize — 2022 Physics Prize summary", url: "https://www.nobelprize.org/prizes/physics/2022/summary/" }
        ],
        transcript: "",
        featured: true
    },
];