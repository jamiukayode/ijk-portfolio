// WHATSAPP NUMBER - Replace with your real number (no + sign)
const WA_NUMBER = '2347032331829';

// CURSOR
// const cursor = document.getElementById('cursor');
// const ring = document.getElementById('cursorRing');
// let mx = 0, my = 0, rx = 0, ry = 0;
// document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
// function animateRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing); }
// animateRing();

// NAV SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

// MOBILE NAV
function toggleMobile() {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('open');
}
function closeMobile() {
    document.getElementById('mobileNav').classList.remove('open');
}

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// COUNTER ANIMATION
function animateCount(el, target, duration = 2000) {
    let start = 0, step = target / duration * 16;
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target; clearInterval(timer); return; }
        el.textContent = Math.floor(start);
    }, 16);
}
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCount(document.getElementById('count1'), 20);
            animateCount(document.getElementById('count2'), 15);
            animateCount(document.getElementById('count3'), 3);
            animateCount(document.getElementById('count4'), 8);
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });
statsObserver.observe(document.querySelector('.hero-stats'));

// // WHATSAPP FORM
// function sendToWhatsApp() {
//     const name = document.getElementById('fname').value.trim();
//     const email = document.getElementById('femail').value.trim();
//     const service = document.getElementById('fservice').value;
//     const budget = document.getElementById('fbudget').value;
//     const message = document.getElementById('fmessage').value.trim();

//     if (!name || !email || !service || !budget || !message) {
//         alert('Please fill in all fields before sending.');
//         return;
//     }

//     const text =
//         `🚀 *New Project Inquiry from Portfolio*%0A%0A` +
//         `👤 *Name:* ${encodeURIComponent(name)}%0A` +
//         `📧 *Email:* ${encodeURIComponent(email)}%0A` +
//         `🛠️ *Service:* ${encodeURIComponent(service)}%0A` +
//         `💰 *Budget:* ${encodeURIComponent(budget)}%0A%0A` +
//         `📝 *Project Details:*%0A${encodeURIComponent(message)}%0A%0A` +
//         `_Sent from portfolio website_`;

//     window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
// }



function sendToWhatsApp() {
    // 1. Get and trim form values
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const service = document.getElementById('fservice').value;
    const budget = document.getElementById('fbudget').value;
    const message = document.getElementById('fmessage').value.trim();

    // 2. Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 3. Validation: Check for empty fields AND valid email format
    if (!name || !email || !service || !budget || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // 4. Construct the formatted message
    const text =
        `🚀 *New Project Inquiry from Portfolio*%0A%0A` +
        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
        `📧 *Email:* ${encodeURIComponent(email)}%0A` +
        `🛠️ *Service:* ${encodeURIComponent(service)}%0A` +
        `💰 *Budget:* ${encodeURIComponent(budget)}%0A%0A` +
        `📝 *Project Details:*%0A${encodeURIComponent(message)}%0A%0A` +
        `_Sent from portfolio website_`;

    // 5. Open WhatsApp using your pre-defined WA_NUMBER
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');


    // 6. Clear the form fields after sending
    const form = document.querySelector('form');
    if (form) {
        form.reset();
    } else {
        document.getElementById('fname').value = "";
        document.getElementById('femail').value = "";
        document.getElementById('fmessage').value = "";
    }
}


// SMOOTH SCROLL for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});


// Year
document.getElementById("year").textContent = new Date().getFullYear();