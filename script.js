function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function subscribeUser() {
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert(`Thank you for subscribing, ${email}!`);
  emailInput.value = "";
  return false; // Prevent form submission
}
