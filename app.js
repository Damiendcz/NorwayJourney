gsap.from('#title', {opacity: 0, y: 50, duration: 1})
gsap.from('#cta', {opacity: 0, y: 50, duration: 1, delay: .5})
gsap.to('.intro', {opacity : 0, duration: 2})
gsap.from('.experience', {x: 500, duration: 2, opacity: 0})