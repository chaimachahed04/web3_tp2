/* ANIME JS */
const anime = window.anime;

console.log("AnimeJS : Chargé");

if (anime) {
    anime({
        targets: '.interface-container > *',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });
}