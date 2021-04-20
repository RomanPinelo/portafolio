/* Obtenemos el elemento con el id main__menuButton en la vista de celulares*/ 
const menu = document.getElementById('main__menuButton');

menu.addEventListener('click', () => {
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
});

/* Configuración de la libreria de typed.js */
var typed = new Typed('#typed', {
  stringsElement: '#textStrings', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra.
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' permite trabajar texto con formato (etiquetas HTML) como lo tenemos en
                        //strings o 'null' para texto sin formato, es decir si pongo las etiquetas, saldran 
                        //tal cual esta el texto.
  });

/* 
Resaltar color del botón del menú presionado.
La idea es saber cuál de las opciones hemos visitado.
*/
let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');
let blog = document.getElementById('blog');

home.addEventListener('click', () => {
  document.getElementById('home').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

about.addEventListener('click', () => {
  document.getElementById('about').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

portfolio.addEventListener('click', () => {
  document.getElementById('portfolio').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

contact.addEventListener('click', () => {
  document.getElementById('contact').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

blog.addEventListener('click', () => {
  document.getElementById('blog').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

/* 
Esta función es llamada cada vez que presionamos un botón y cambia de color.
La idea es que si ya todos los botones están de diferente color, se reinicien al color original.
*/
function comprobar() {
  let hasActive = home.classList.contains('active');
  console.log(hasActive);
  let hasActive1 = about.classList.contains('active');
  console.log(hasActive1);
  let hasActive2 = portfolio.classList.contains('active');
  console.log(hasActive2);
  let hasActive3 = contact.classList.contains('active');
  console.log(hasActive3);
  let hasActive4 = blog.classList.contains('active');
  console.log(hasActive4);

  if (hasActive && hasActive1 && hasActive2 && hasActive3 && hasActive4){
    document.getElementById('home').classList.toggle('active');
    document.getElementById('about').classList.toggle('active');
    document.getElementById('portfolio').classList.toggle('active');
    document.getElementById('contact').classList.toggle('active');
    document.getElementById('blog').classList.toggle('active');
  }
}

/* Botón que oculta y muestra los divs de los trabajos hechos */
/* Obtenemos el elemento con el id portfolioWorksButton en la vista de celulares*/ 
const worksMenu = document.getElementById('portfolioWorksButton');

worksMenu.addEventListener('click', () => {
  document.getElementById('portfolioWorks').classList.toggle('active1');
  document.getElementById('downArrow').classList.toggle('noVisible1');
  document.getElementById('upArrow').classList.toggle('Visible1');
});


/* Con estas lineas obtenemos la longitud que debemos dar al 
stroke-dasharray y stroke-dashoffset de cada letra en el CSS*/
const logo = document.querySelectorAll('#desarrollo path');

for(let i=0; i<logo.length; i++){
  console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
}