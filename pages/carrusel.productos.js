
// Productos para cada categoría
const productos = {
    suplementosDietarios: [
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/diaD-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        // Añadir más productos según sea necesario
    ],
    ventaLibre: [
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/veg12-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        // Añadir más productos según sea necesario
    ],
    medicamentos: [
        { img: '../multimedia/bn-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/bn-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/bn-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/bn-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        { img: '../multimedia/bn-novedad.png', title: 'Producto 1', desc: 'Descripción breve del producto 1.' },
        { img: '../multimedia/bn-novedad.png', title: 'Producto 2', desc: 'Descripción breve del producto 2.' },
        // Añadir más productos según sea necesario
    ]
};


// Función para mostrar el carrusel según la categoría seleccionada
// Variable para almacenar la categoría actual
let currentCategory = null;

// Función para mostrar el carrusel según la categoría seleccionada
function showCarousel(category) {
    currentCategory = category; // Almacenar la categoría actual
    const carouselItems = document.getElementById('carouselItems');
    carouselItems.innerHTML = ''; // Limpiar items anteriores

    const products = productos[category];
    const productsPerRow = window.innerWidth < 768 ? 2 : 4; // 2 productos para móviles, 4 para escritorio

    for (let i = 0; i < products.length; i += productsPerRow) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (i === 0) item.classList.add('active'); // Activo solo para el primer item

        // Crear fila de productos
        const row = document.createElement('div');
        row.classList.add('row', 'justify-content-center');

        // Agregar productos en la fila según el tamaño de la pantalla
        for (let j = i; j < i + productsPerRow && j < products.length; j++) {
            const product = products[j];
            const col = document.createElement('div');
            col.classList.add('col-6', 'col-md-3', 'text-center'); // 6 col (2 por fila en mobile), 3 col (4 por fila en desktop)

            col.innerHTML = `
                <img src="${product.img}" alt="${product.title}" class="img-fluid">
                <h5 class="mt-2">${product.title}</h5>
                <p>${product.desc}</p>
            `;
            row.appendChild(col);
        }

        item.appendChild(row);
        carouselItems.appendChild(item);
    }

    document.getElementById('productosCarousel').style.display = 'block'; // Mostrar el carrusel
}

// Evento para actualizar el carrusel al cambiar el tamaño de la pantalla
window.addEventListener('resize', () => {
    if (currentCategory) {
        showCarousel(currentCategory); // Actualizar el carrusel con la categoría actual
    }
});