/* GESTION DU SON ET DES EFFETS */
console.log("Préparation de l'audio...");

const Tone = window.Tone;

const btnPlay = document.getElementById('btn-play');
const btnBass = document.getElementById('btn-effect');

if (btnPlay && btnBass && Tone) {
    
    // --- CRÉATION DE MES INSTRUMENTS ---

    // 1. Synthétiseur "Magique"
    // J'utilise de la modulation FM pour un son cristallin
    const fairySynth = new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 3,
        modulationIndex: 3.5,
        envelope: { attack: 0.1, decay: 0.3, sustain: 0.1, release: 1 }
    }).toDestination();
    
    // J'ajoute un effet d'écho (PingPong) pour l'ambiance
    const magicDelay = new Tone.PingPongDelay("8n", 0.4).toDestination();
    fairySynth.connect(magicDelay);
    fairySynth.volume.value = -8; 

    // 2. Synthétiseur "Bass"

    const bassSynth = new Tone.MembraneSynth({
        pitchDecay: 0.05,
        octaves: 10,
        oscillator: { type: "sine" },
        envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 }
    }).toDestination();
    bassSynth.volume.value = 4;


    // --- INTERACTIONS ---

    // Bouton 1 : Son Féérique
    btnPlay.addEventListener('click', async () => {
        console.log("Lecture : Mélodie harmonique");
        await Tone.start(); 

        const now = Tone.now();
        // Je joue un arpège montant
        fairySynth.triggerAttackRelease(["C5", "E5"], "8n", now);
        fairySynth.triggerAttackRelease(["E5", "G5"], "8n", now + 0.15);
        fairySynth.triggerAttackRelease(["G5", "B5"], "8n", now + 0.30);
        fairySynth.triggerAttackRelease(["C6", "E6", "G6"], "2n", now + 0.45);

        // Feedback visuel
        btnPlay.innerText = "AUDIO ACTIF";
        btnPlay.classList.add("active");
        btnPlay.style.background = "#ff0055";
        btnPlay.style.boxShadow = "0 0 15px #ff0055";
    });

    // Bouton 2 : Bass Boost
    btnBass.addEventListener('click', async () => {
        console.log("Lecture : Impact Bass");
        await Tone.start();

        const now = Tone.now();
        bassSynth.triggerAttackRelease("C1", "8n", now);
        bassSynth.triggerAttackRelease("C1", "4n", now + 0.4);

        // Flash violet temporaire
        btnBass.style.background = "#b026ff";
        btnBass.style.color = "white";
        
        setTimeout(() => {
            btnBass.style.background = "transparent";
            btnBass.style.color = "#b026ff";
        }, 200);
    });

}