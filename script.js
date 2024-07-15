///////////////////////////////////////////////////////////////////////
// On écoute le chargement de la page pour lancer la fonction loader //
///////////////////////////////////////////////////////////////////////
window.addEventListener('load', loader);

/////////////////////
// Fonction loader //
/////////////////////
function loader() {
  // On crée une timeline GSAP avec des options par défaut
  const TLLOAD = gsap.timeline({
    default: {
      ease: 'power2',
      duration: 0.6,
    },
  });

  TLLOAD
    // On ajoute les animations à la timeline
    .to('.load-container__images-container', {
      blockSize: 400,
      duration: 1.3,
      delay: 0.4,
    })
    .to('.load-container__bloc-txt', { blockSize: 'auto' }, '-=0.8')
    .to('.load-container__title', { y: 0 }, '-=0.6')
    .to('.load-container__f2', { y: 0 })
    .to('.load-container__flip-img1', { display: 'none', duration: 0 })
    .to('.load-container__f2', { y: '-100%' })
    .to('.load-container', { autoAlpha: 0, duration: 0.8, delay: 0.7 })
    // Et on ajoute une fonction de callback pour lancer la vidéo
    .add(() => {
      document.querySelector('video').play(), '-=0.8';
    })
    // Et on ajoute une fonction de callback pour cacher le loader pour les utilisateurs de screen readers
    .add(() => {
      document.querySelector('.load-container').computedStyleMap.display =
        'none';
    });
}
