const backgrounds = [
    'url("static/images/moist-bg.jpg")',
    'url("static/images/yellow-flowers.jpg")',
    'url("static/images/floral-bg.jpg")',
  ];
  
  // Select a random background
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  // Apply the random background to the container
  document.getElementById("home").style.backgroundImage = randomBackground;
