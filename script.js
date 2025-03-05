document.addEventListener("DOMContentLoaded", function() {
      fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

      fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
    });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".solutions-card").forEach((card, index) => {
	gsap.to(card, {
		opacity: 1,
		y: 0,
		duration: 0.8,
		delay: index * 0.2, // Efecto escalonado
		scrollTrigger: {
			trigger: card,
			start: "top 80%", // Aparece cuando está en el 80% de la pantalla
			toggleActions: "play none none none"
		}
	});
});

gsap.utils.toArray(".form-cuadro").forEach((card, index) => {
	gsap.to(card, {
		opacity: 1,
		y: 0,
		duration: 0.8,
		delay: index * 0.2, // Efecto escalonado
		scrollTrigger: {
			trigger: card,
			start: "top 80%", // Aparece cuando está en el 80% de la pantalla
			toggleActions: "play none none none"
		}
	});
});