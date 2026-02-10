document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const revealBtn = document.getElementById('reveal-btn');
    const modal = document.getElementById('message-modal');
    const closeBtn = document.querySelector('.close-btn');

    revealBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        createExplosion();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Canvas Falling Sparkles/Shavings
    const canvas = document.getElementById('sparkle-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.size = Math.random() * 2 + 0.5;
            this.speedY = Math.random() * 1 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.y += this.speedY;
            if (this.y > height) {
                this.y = -20;
                this.x = Math.random() * width;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    function createExplosion() {
        console.log("Sweetness revealed!");
    }
});
