// Wacht tot de hele pagina geladen is
document.addEventListener('DOMContentLoaded', () => {

    // Selecteer alle containers waar een wrestler in zit
    const containers = document.querySelectorAll('.male-wrestler-container, .female-wrestler-container');

    containers.forEach(container => {
        const img = container.querySelector('.click-figure');
        const balloon = container.querySelector('[class^="text-balloon"]');

        img.addEventListener('click', () => {
            // Toggle de 'hidden' class: als hij er is gaat hij weg, en andersom
            balloon.classList.toggle('hidden');
        });
    });
});