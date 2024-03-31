// Function to handle tab switching
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to open and close the side menu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}

// Function to handle form submission and display success message
const scriptURL = 'https://script.google.com/macros/s/AKfycbx1ArOwY8jyYdqmV4iooQ23t7njXzGIEizSgQyD04OhWt4rGynCuu-3xzRo_-KVIPvH/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
