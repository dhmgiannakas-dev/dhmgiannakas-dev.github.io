const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* coaches anchor scroll */

document.querySelectorAll('.smart-link').forEach(link => {
  link.addEventListener('click', e => {
    const target = e.currentTarget.dataset.target;
    if (location.pathname !== '/' && !location.pathname.endsWith('index.html')) {
      e.preventDefault();
      location.href = 'index.html#' + target;
    }
  });
});

/* Contact form validation */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Καθαρισμός προηγούμενων μηνυμάτων σφάλματος
  document.querySelectorAll('.error-message').forEach(function(el) {
    el.style.display = 'none';
  });

  let hasError = false;

  // Έλεγχος Όνοματος
  const name = document.getElementById('name').value.trim();
  if (name === '') {
    document.getElementById('nameError').textContent = 'Παρακαλώ εισάγετε το όνομά σας.';
    document.getElementById('nameError').style.display = 'block';
    hasError = true;
  }

  // Έλεγχος Email
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Παρακαλώ εισάγετε ένα έγκυρο email.';
    document.getElementById('emailError').style.display = 'block';
    hasError = true;
  }

  // Έλεγχος Μηνύματος
  const message = document.getElementById('message').value.trim();
  if (message === '') {
    document.getElementById('messageError').textContent = 'Παρακαλώ εισάγετε το μήνυμά σας.';
    document.getElementById('messageError').style.display = 'block';
    hasError = true;
  }

  // Έλεγχος Όρων Χρήσης
  const termsChecked = document.getElementById('terms').checked;
  if (!termsChecked) {
    document.getElementById('termsError').textContent = 'Πρέπει να αποδεχτείτε τους Όρους Χρήσης.';
    document.getElementById('termsError').style.display = 'block';
    hasError = true;
  }

  // Αν δεν υπάρχουν σφάλματα, υποβάλλουμε τη φόρμα
  if (!hasError) {
    // Εδώ μπορείς να προσθέσεις την αποστολή της φόρμας (π.χ. AJAX ή απλή υποβολή)
    alert('Η φόρμα υποβλήθηκε επιτυχώς!');
  }
});


// google maps load map
document.getElementById('map-container').addEventListener('click', function() {
  this.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12569.689085430453!2d23.6926377!3d38.037246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a3b3b54b98b1%3A0x8eb68db3fdec99e5!2sPowerHall!5e0!3m2!1sel!2sgr!4v1745532978054!5m2!1sel!2sgr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  this.style.filter = 'none'; // Βγάζει τη θολούρα όταν φορτωθεί ο κανονικός χάρτης
  this.style.background = 'none'; // Βγάζει το background-image
});