var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

// Variables
var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");
var colorActual;
var $indicadorColor = $("#indicador-de-color");
var mApretado = false;
var $botonBorrar = $("#borrar");
var $batmanImg = $("#batman");
var $flashImg = $("#flash");
var $wonderImg = $("#wonder");
var $invisibleImg = $("#invisible");
var $bGuardar = $("#guardar");

// Asignación de eventos
$botonBorrar.click(borrarGrilla);
$batmanImg.click(dibujarSuper);
$wonderImg.click(dibujarSuper);
$flashImg.click(dibujarSuper);
$invisibleImg.click(dibujarSuper);
$bGuardar.click(guardarPixelArt);

// Declaración de funciones

//Función para crear la paleta de colores dinámicamente
function crearPaleta() {
  for(var i = 0; i < nombreColores.length; i++) {
    var $color = $('<div class="color-paleta"></div>').appendTo($paleta);
    $color.css("background-color", nombreColores[i]);
    $color.click(guardarColor);
  };
};

// Función para guardar el color seleccionado en el indicador de color
function guardarColor(e) {
  colorActual = $(e.target).css("background-color");
  $indicadorColor.css("background-color", colorActual);
};

// Se guarda el color de la rueda en colorActual  
colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    $indicadorColor.css("background-color", colorActual);
  })
);

// Función para crear los pixeles dinámicamente
function crearPixeles() {
  for (var i = 0; i < 1750; i++) {
    var $pixel = $('<div class="pixel"></div>').appendTo($grillaPixeles);
    $pixel.click(pintar).mousedown(presionado).mouseup(presionado).mouseover(pintarEnMovimiento);
  }
};

//Función para pintar los pixeles con un click
function pintar(e) {
  $(e.target).css("background-color", colorActual);
};

//Función que permite saber si el mouse se encuentra presionado o no
function presionado(e) {
  mApretado = !mApretado;
  console.log(mApretado);
};

//Función que permite pintar en movimiento, teniendo en cuenta si el mouse esta presionado o no
function pintarEnMovimiento(e) {
  if(mApretado) {
    $(e.target).css("background-color", colorActual);
  };
};

//Función que permite borrar la grilla de pixeles con una animación
function borrarGrilla() {
  var confirmacion = confirm("¿Desea borrar esta magnífica pieza de arte?");
  if(confirmacion){
    var $pixeles = $(".pixel");
    $pixeles.each(function() {
      $(this).animate({"background-color": "white"}, 1000)
    })
  }
};

//Función que permite cargar los superheroes
function dibujarSuper(e) {
  var superHeroe;
  var $idActual = $(e.target).attr("id");
  if ($idActual === "batman") {
    superHeroe = batman;
  } else if ($idActual === "wonder") {
    superHeroe = wonder;
  } else if ($idActual === "flash") {
    superHeroe = flash;
  } else if ($idActual === "invisible"){
    superHeroe = invisible;
  }
  cargarSuperheroe(superHeroe);
};



$(document).ready( function() {
  crearPaleta();
  crearPixeles();
  }
);