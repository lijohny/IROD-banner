document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('open-menu').addEventListener('click', function() {
      document.getElementById('sidebar').classList.add('translate-x-0');
  });

  document.getElementById('close-menu').addEventListener('click', function() {
      document.getElementById('sidebar').classList.remove('translate-x-0');
  });
});
