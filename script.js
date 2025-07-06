AOS.init();
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const msg = document.getElementById('subscribeMsg');
  const email = document.getElementById("newsletterEmail").value.trim();

  if (email) {
    msg.textContent = "Thank you for subscribing!";
    msg.style.color = "lightgreen";
  } else {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  }

  setTimeout(() => {
    msg.textContent = "";
    this.reset();
  }, 3000);
});

document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const response = document.getElementById("formResponse");

  [name, email, message].forEach(input => {
    if (!input.value.trim()) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });

  if (valid) {
    response.textContent = "Thank you for contacting us!";
    response.style.color = "green";
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }

  setTimeout(() => response.textContent = "", 3000);
});

