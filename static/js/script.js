// script.js

// Hamburger menyusunun açılmasını idarə edən funksiya
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Python backend-dən məlumat çəkmək üçün fetch istifadə edirik
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // Backend-dən gələn məlumatları HTML elementlərində göstəririk
    document.getElementById('name').textContent = data.name;
    document.getElementById('role').textContent = data.role;
    document.getElementById('bio').textContent = data.bio;
  })
  .catch(error => console.error('Error:', error));

// Təsadüfi bir misal - Butona basanda backend API-dən məlumat almaq
document.getElementById('contactButton').addEventListener('click', function () {
  fetch('/api/contact')
    .then(response => response.json())
    .then(contactInfo => {
      alert(`Contact Info: ${contactInfo.email}`);
    })
    .catch(error => console.error('Error fetching contact info:', error));
});
