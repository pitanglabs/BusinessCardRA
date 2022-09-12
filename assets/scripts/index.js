const btnGithub = document.querySelector("#github-button");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");

btnGithub.addEventListener('click', () => {
    window.open('https://github.com/pitanglabs', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://linkedin.com/in/', '_blank');
});

btnTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});


btnEmail.addEventListener('click', () => {
    window.open('https://mail.google.com/mail/u/0/', '_blank');
});

btnWebsite.addEventListener('click', () => {
    window.open('http://google.com/', '_blank');
});