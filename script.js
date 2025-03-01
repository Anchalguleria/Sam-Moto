function openAbout() {
    console.log("About");
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    });
}

function openService() {
    console.log("Server");
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function openContact() {
    console.log("Contact Form");
    document.getElementById('contact-form-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

window.addEventListener('load', () => {
    console.log('Scrolling to top...');
    window.scrollTo(0, 0);
});
