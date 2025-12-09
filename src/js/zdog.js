/* MON ANIMATION 3D : NOTE DE MUSIQUE */
console.log("Initialisation de mon animation Zdog...");

// Je récupère l'objet Zdog chargé dans le HTML
const Zdog = window.Zdog;
const canvas = document.getElementById('zdog-canvas');

if (canvas && Zdog) {
    // 1. Création de la scène 3D
    let illo = new Zdog.Illustration({
        element: '#zdog-canvas',
        dragRotate: true, // Je permets à l'utilisateur de tourner la note
        zoom: 1.1,
        resize: true,
        centered: true
    });

    // Mes couleurs
    const rose = '#ff0055';
    const violet = '#b026ff';

    // --- CERCLE ORBITAL ---
    // J'ajoute un anneau qui tournera différemment pour donner du volume
    let ring = new Zdog.Ellipse({
        addTo: illo,
        diameter: 160,
        stroke: 4,
        color: violet,
        fill: false,
    });

    // --- NOTE DE MUSIQUE ---
    // Je crée un groupe pour pouvoir centrer toute la note
    let noteGroup = new Zdog.Group({ 
        addTo: illo, 
        translate: { x: -5, y: 5 } // Petit ajustement pour le centrage visuel
    });

    // La Tête de la note
    new Zdog.Shape({
        addTo: noteGroup,
        stroke: 32,
        color: rose,
        translate: { x: -12, y: 28 }
    });

    // La Tige
    new Zdog.Shape({
        addTo: noteGroup,
        path: [ { y: 28 }, { y: -35 } ],
        translate: { x: -2 },
        stroke: 10,
        color: rose,
    });

    // Le Drapeau (Courbe fluide)
    // J'utilise une courbe de Bézier pour un rendu élégant
    new Zdog.Shape({
        addTo: noteGroup,
        path: [
            { x: -2, y: -35 }, 
            { bezier: [
                { x: 30, y: -35 },
                { x: 35, y: -5 }, 
                { x: 15, y: 5 }
            ]}
        ],
        stroke: 10,
        color: rose,
        closed: false,
    });

    // 2. Boucle d'animation
    function animate() {
        // La note tourne sur l'axe Y
        noteGroup.rotate.y += 0.02;
        
        // L'anneau a une rotation complexe pour l'effet "gyroscope"
        ring.rotate.x = Math.sin(new Date() * 0.001) * 0.5;
        ring.rotate.y += 0.005;

        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    // Lancement de l'animation
    animate();

} else {
    console.error("Erreur : Impossible de charger Zdog.");
}