const productos = [
  {
    nombre: "Collar corazón de plata",
    descripcion: "Hecho a mano con dije de corazón y cadena de acero inoxidable.",
    precio: "$450 MXN",
    imagen: "img/corazon_plata.png"
  },
  {
    nombre: "Anillo minimalista dorado",
    descripcion: "Diseño elegante, ajustable, acabado mate.",
    precio: "$280 MXN",
    imagen: "img/anillo_mor.png"
  },
  {
    nombre: "Pulsera de cuero artesanal",
    descripcion: "Con cierre magnético y detalles metálicos.",
    precio: "$190 MXN",
    imagen: "img/pulsera_art.png"
  },
  {
    nombre: "Aretes perla flor",
    descripcion: "Elegantes aretes con forma de flor y perla blanca.",
    precio: "$330 MXN",
    imagen: "img/aretes.png"
  },
  {
  nombre: "Collar luna dorada",
  descripcion: "Colgante en forma de luna creciente bañado en oro, ideal para cualquier ocasión.",
  precio: "$370 MXN",
  imagen: "img/collar_dorado.png"
},
,
{
  nombre: "Anillo amatista natural",
  descripcion: "Piedra amatista en montura de plata, trabajado artesanalmente con acabado pulido.",
  precio: "$420 MXN",
  imagen: "img/anillo_amatista.png"
},
{
  nombre: "Pulsera tejida con dije de plata",
  descripcion: "Pulsera de hilo trenzado a mano con dije en forma de estrella en plata .925.",
  precio: "$210 MXN",
  imagen: "img/pulsera_tejida.png"
},
{
  nombre: "Aretes luna & estrella",
  descripcion: "Par de aretes asimétricos con diseño de luna y estrella en baño de oro.",
  precio: "$300 MXN",
  imagen: "img/aretes_luna_estrella.png"
},
{
  nombre: "Collar piedra luna arcoíris",
  descripcion: "Piedra natural iridiscente engarzada en cadena delicada de acero inoxidable.",
  precio: "$460 MXN",
  imagen: "img/collar_piedra_luna.png"
},
{
  nombre: "Anillo doble infinito",
  descripcion: "Diseño moderno de doble símbolo infinito en acero inoxidable con acabado espejo.",
  precio: "$250 MXN",
  imagen: "img/anillo_infinito.png"
},
{
  nombre: "Aretes de cristal azulado",
  descripcion: "Cristales facetados de tono azul marino sobre base de plata, ligeros y brillantes.",
  precio: "$290 MXN",
  imagen: "img/aretes_cristal.png"
},
{
  nombre: "Choker de terciopelo negro con perla",
  descripcion: "Gargantilla ajustable con cinta suave y perla blanca central colgante.",
  precio: "$180 MXN",
  imagen: "img/choker_perla.png"
},
{
  nombre: "Pulsera minimalista de oro rosa",
  descripcion: "Pulsera fina de oro rosa con detalles pulidos y cierre seguro.",
  precio: "$320 MXN",
  imagen: "img/pulsera_oro_rosa.png"
},
{
  nombre: "Set anillos lunares",
  descripcion: "Juego de 3 anillos combinables con diseños lunares y detalles celestiales.",
  precio: "$390 MXN",
  imagen: "img/set_anillos_luna.png"
}

];

let seleccionados = [];

const grid = document.getElementById("gridProductos");

document.getElementById('buscador').addEventListener('input', e => {
  const filtro = e.target.value.toLowerCase();
  const tarjetas = document.querySelectorAll('#gridProductos > div');

  productos.forEach((p, i) => {
    const coincide = p.nombre.toLowerCase().includes(filtro) || p.descripcion.toLowerCase().includes(filtro);
    tarjetas[i].style.display = coincide ? 'block' : 'none';
  });
});


productos.forEach((p, index) => {
  const card = document.createElement("div");
card.className = "bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105";

  const id = `producto-${index}`;

  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-64 object-cover">
    <div class="p-4">
      <h4 class="text-lg font-semibold text-gray-800 mb-2">${p.nombre}</h4>
      <p class="text-sm text-gray-600 mb-2">${p.descripcion}</p>
      <p class="text-pink-600 font-bold mb-4">${p.precio}</p>
      <button onclick="agregarSeleccion('${p.nombre}', '${p.precio}', '${p.imagen}')" 
        class="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded hover:bg-pink-200 mb-2">
        🧡 Agregar a selección
      </button><br>
      <a href="https://wa.me/522251014610?text=${encodeURIComponent(
        `Hola, estoy interesado en:\n${p.nombre}\n${p.precio}\nVer imagen: ${window.location.origin}/${p.imagen}`
      )}" 
        target="_blank"
        class="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
        Comprar por WhatsApp
      </a>
    </div>
  `;

  grid.appendChild(card);
});


function agregarSeleccion(nombre, precio, imagen) {
  seleccionados.push({ nombre, precio, imagen });

  const mensaje = seleccionados.map(p => 
    `🔸 ${p.nombre} - ${p.precio}\n📷 Imagen: ${window.location.origin}/${p.imagen}`
  ).join('\n\n');

  const botonExistente = document.getElementById('btn-seleccion');
  if (!botonExistente) {
    const boton = document.createElement('a');
    boton.id = "btn-seleccion";
    boton.target = "_blank";
    boton.href = "#";
    boton.textContent = "🛒 Enviar selección por WhatsApp";
    boton.className = "fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition";
    document.body.appendChild(boton);
  }

  const boton = document.getElementById('btn-seleccion');
  boton.href = `https://wa.me/522311087897?text=${encodeURIComponent("Hola, estos son los productos que me interesan:\n\n" + mensaje)}`;
}
