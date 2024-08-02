
  
  document.addEventListener('DOMContentLoaded', () => {
    const userConnections = document.getElementById('user-connections');
    const plotSale = document.getElementById('plot-sale');
    const houseSale = document.getElementById('house-sale');

    userConnections.querySelector('span').textContent = '1k+';
    plotSale.querySelector('span').textContent = '7000+';
    houseSale.querySelector('span').textContent = '5000+';
});


  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

