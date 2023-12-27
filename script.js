gsap.from(".header", {
  duration: 1,
  y: "-100%",
  ease: "bounce.out",
});
gsap.from(".link", {
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: 0.5,
});

gsap.from(".right", {
  duration: 2,
  delay: 1,
  ease: "power2.in",
  x: "-100vw",
});

gsap.from(".left", {
  duration: 1,
  delay: 2,
  x: "-100%",
});

gsap.from(".footer", {
  duration: 1,
  y: "100%",
  ease: "elastic.out(1,0.3)",
  delay: 3,
});

gsap.from(".button", {
  duration: 1,
  delay: 4,
  opacity: 0,
  rotation: 720,
  scale: 0,
});
