
// Productos para cada categoría
const productos = {
    suplementosDietarios: [
        { img: '../multimedia/cartiflex.png', title: 'Cartfiflex', desc: 'Articulaciones, huesos y músculos' },
        { img: '../multimedia/mas50.png', title: '+50', desc: 'Formulado especialmente para gente adulta' },
        { img: '../multimedia/diaD.png', title: 'Día D', desc: 'Suplemento dietario a base de Vitamina D' },
        { img: '../multimedia/herbaccionGinkgoForte.png', title: 'Herbacción Ginkgo Forte', desc: 'Cansancio y Fatiga Mental' },
        { img: '../multimedia/herbaccionMemory.png', title: 'Herbacción Memory', desc: 'Fatiga mental' },
        { img: '../multimedia/herbaccionVigor.png', title: 'Herbacción Vigor', desc: 'Estados de desgano y fatiga muscular' },
        { img: '../multimedia/stopHungry.png', title: 'Stop Hungry', desc: 'Ayuno intermitente - Dietas hipocalóricas' },
        { img: '../multimedia/veg12.png', title: 'Veg 12', desc: 'Suplemento dietario a base de Vitamina B12' },
        { img: '../multimedia/vitaminaC1.png', title: 'Vitamina C', desc: 'Suplemento dietario a base de Vitamina C' },
        { img: '../multimedia/zentroComprimidos.png', title: 'Zentro Max', desc: 'Multivitaminas - Polimineral' },
        { img: '../multimedia/zentroSobres.png', title: 'Zentro Max Sobres', desc: 'Multivitaminas - Polimineral' },
    ],
    ventaLibre: [
        { img: '../multimedia/algistop.png', title: 'Algistop', desc: 'Antialérgico' },
        { img: '../multimedia/buenasNoches.png', title: 'Buenas Noches', desc: 'Inductor del sueño' },
        { img: '../multimedia/gluco30.png', title: 'Glucocartiflex', desc: 'Antiartrósico' },
        { img: '../multimedia/herbaccionSedante.png', title: 'Herbacción Sedante', desc: 'Alivio de síntomas de ansiedad' },
        { img: '../multimedia/paracetamol500mg.png', title: 'Paracetamol ISA 500 mg', desc: 'Analgésico, antifebril, antitusivo y descongestivo' },
        { img: '../multimedia/paracetamol1g.png', title: 'Paracetamol ISA 1 g', desc: 'Analgésico, antifebril' },
    ],
    medicamentos: [
        { img: '../multimedia/atorvastatina10.png', title: 'Atorvastatina ISA 10 mg', desc: 'Reduce el colesterol' },
        { img: '../multimedia/atorvastatina20.png', title: 'Atorvastatina ISA 20 mg', desc: 'Reduce el colesterol' },
        { img: '../multimedia/bn-novedad.png', title: 'Bistronfor', desc: 'Mucolítico de las vías respiratorias' },
        { img: '../multimedia/4.4.png', title: '4x4 | Sidenafil 50 mg', desc: 'Vasodilatador' },
        { img: '../multimedia/quartier.png', title: 'Quartier | Tadalafilo 20 mg', desc: 'Tratamiento para la disfunción eréctil' },
    ]
};

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

            // Agregar el enlace para redirigir al detalle del producto
            col.innerHTML = `
                <a href="producto.html?category=${category}&index=${j}">
                    <img src="${product.img}" alt="${product.title}" class="img-fluid">
                    <h5 class="mt-2">${product.title}</h5>
                    <p>${product.desc}</p>
                </a>
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

// Descripción de cada producto
// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const index = urlParams.get('index');

// Verificar si los parámetros están presentes antes de intentar acceder a los productos
if (category && index !== null && productos[category] && productos[category][parseInt(index, 10)]) {
    const product = productos[category][parseInt(index, 10)];

    // Mostrar datos en la página
    document.getElementById('productTitle').innerText = product.title;
    document.getElementById('productDescription').innerText = product.desc;
    document.getElementById('productImage').src = product.img;

    // Ejemplo de características (podrías reemplazar esto con datos reales)
    const productFeatures = document.getElementById('productFeatures');
    productFeatures.innerHTML = `
        <tr>
            <td>Valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
        </tr>
    `;
} else if (category || index !== null) {
    // Solo mostrar el mensaje si se intenta acceder a un producto con parámetros incorrectos
    alert('Producto no encontrado');
}

