/* GESTION DE MA CARTE INTERACTIVE */
console.log("Chargement de la carte...");

const L = window.L;
const mapElement = document.getElementById('map');

if (mapElement && L) {
    // Coordonnées de Venise (Lieu inspirant Alféa)
    const alfeaCoords = [45.4408, 12.3155];

    // 1. Initialisation de la carte
    const map = L.map('map', { 
        zoomControl: false,
        center: alfeaCoords,
        zoom: 12
    });

    // 2. Ajout du fond de carte (Style sombre)
    // Note : La couleur mauve est gérée dans mon CSS via des filtres
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // 3. Mon marqueur personnalisé
    const circle = L.circleMarker(alfeaCoords, {
        color: '#fff',
        weight: 2,
        fillColor: '#ff0055', // Rose
        fillOpacity: 1,
        radius: 8
    }).addTo(map);
    
    // Cercle décoratif autour du point
    L.circleMarker(alfeaCoords, {
        color: '#b026ff',
        weight: 1,
        fillColor: 'transparent',
        radius: 20
    }).addTo(map);

    // 4. Ajout de l'étiquette
    circle.bindTooltip("BASE ALFÉA", {
        permanent: true, 
        className: 'alfea-label',
        direction: 'top',
        offset: [0, -10]
    });

} else {
    console.error("Erreur : La librairie Leaflet n'est pas chargée.");
}