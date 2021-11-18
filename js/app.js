const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const medias = document.querySelector('.hero-icon-list');
const title = document.querySelector('.hero-title');
// const logo = document.querySelectorAll("#logo path");
const intro = document.querySelectorAll("#intro path");


// Animations home page
window.addEventListener('load', () => {
    const TL = gsap.timeline({paused :true});

    TL
    .from(l1, 1, {width:0, ease: "power2.out"},  0.3 )
    .from(l2, 1, {width:0, ease: "power2.out"}, 0.3)
    .staggerFrom(title, 1, {transform:"scale(0)", ease: "power2.out"},'-=2')
    .staggerFrom(medias, 1, {left:-200, ease: "power2.out"}, 0.3, "-=1");

    TL.play();
})
// for (let i = 0; i<logo.length; i++) {
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
for (let i = 0; i<intro.length; i++) {
    console.log(`Letter ${i} is ${intro[i].getTotalLength()}`);
}