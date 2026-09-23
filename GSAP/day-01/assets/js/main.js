// gsap.to(".box", {
//     y: 450,
//     duration: 1,
//     ease: 'power3.out'

// });
// gsap.to(".box", {
//   x: 450,
//   duration: 1,
//   Delay: 1,
//   ease: 'power3.out'
// });

// gsap.from(".hero-title", {
//   y: 0,
//   opacity: 1,
//   duration: 1,
//   ease: "power3.out"
// });

// gsap.fromTo(
//     '.box',
//     {
//         x: -300,
//         opacity: 0,
//     },
//     {
//         x: 0,
//         opacity: 1,
//         duration: 1
//     }
// )

// const tl = gsap.timeline();

// tl.from(".hero-title", {
//   y: 60,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out"
// });

// tl.from(".hero-text", {
//   y: 30,
//   opacity: 0,
//   duration: 0.8,
//   ease: "power3.out"
// });

// tl.from(".hero-button", {
//   y: 20,
//   opacity: 0,
//   duration: 0.6,
//   ease: "power3.out"
// });

// const tl = gsap.timeline();

gsap.fromTo(
    ".card", 
    {
        y: 200,
        opacity: 0,
    },
    
    {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }
);
