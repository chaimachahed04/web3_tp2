/* MON GRAPHIQUE RADAR */
console.log("Je charge les stats de combat...");

const Chart = window.Chart;
const ctx = document.getElementById('powerChart');

if (ctx && Chart) {
    ctx.style.padding = "0px";

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['SONIC', 'BASS', 'HARMONIE', 'ATTAQUE', 'DÉFENSE'],
            datasets: [{
                label: 'NIVEAU DE PUISSANCE',
                data: [90, 85, 95, 70, 60],
                // Couleurs du graphique
                backgroundColor: 'rgba(255, 0, 85, 0.15)', // Fond très transparent
                borderColor: '#ff0055', // Ligne Rose Néon
                borderWidth: 2,
                // Points
                pointBackgroundColor: '#b026ff', 
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ff0055'
            }]
        },
        options: {
            scales: {
                r: {
                    // Lignes de la toile d'araignée (un peu plus visibles)
                    angleLines: { color: 'rgba(176, 38, 255, 0.25)' }, 
                    grid: { color: 'rgba(176, 38, 255, 0.25)' },
                    
                    pointLabels: {
                        // LE TEXTE (Rose + Gras)
                        color: '#ff0055', 
                        font: { 
                            family: 'Rajdhani', 
                            size: 15, // Assez grand pour être lisible avec le glow
                            weight: 'bold' 
                        }
                    },
                    ticks: { display: false, backdropColor: 'transparent' }
                }
            },
            plugins: {
                legend: { display: false }
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { bottom: 10, top: 10 }
            }
        }
    });
} else {
    console.error("Erreur : Chart.js n'est pas prêt.");
}