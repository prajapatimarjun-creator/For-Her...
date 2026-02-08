function checkName() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
        startTypewriter();
        createHearts();
    } else {
        alert("Please enter your name!");
    }
}

function startTypewriter() {
    const text = "From the moment I met you, my life changed. You are my best friend and my greatest love. Will you be mine forever? Happy Propose Day! 🌹";
    let i = 0;
    const speed = 50; 
    function type() {
        if (i < text.length) {
            document.getElementById("typewriterText").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

function celebrate() {
    alert("Yay! You made me the happiest person alive! ❤️💍");
}
