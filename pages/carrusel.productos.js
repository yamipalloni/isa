
// Productos para cada categoría
const productos = {
    suplementosDietarios: [
        {
            img: '../multimedia/cartiflex.png',
            title: 'Cartiflex',
            desc: 'Articulaciones, huesos y músculos',
            features: ['Magnesio: 188 mg', '(19 - 65 años): 72% (>65 años): 82%','Cartílago de tiburón: 400 mg', '(19 - 65 años): 72% (>65 años): 82%'],
            featuresColumn: ['Información nutricional por ingesta diaria (2 comprimidos por día)', '% IDR cubierto'], 
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: 2 comprimidos diarios.',
            textAbove2: 'Presentación: 30 y 60 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con Cartílago de Tiburón y Magnesio',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. IDR: INGESTA DIARIA DE REFERENCIA.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/cartiflex.pdf',
        },
        {
            img: '../multimedia/mas50.png',
            title: '+50',
            desc: 'Formulado especialmente para gente adulta',
            features: ['Vitamina B1: 15 mg', '1249% IDR','Vitamina B6: 15 mg', '1154% IDR','Vitamina B12: 1 mg', '% IDR','Zinc: 3 mg', '43% IDR'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'], 
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con: Vitaminas B1, B6, B12, Zinc, Ginkgo Biloba, Resveratrol, Licopeno y Luteína',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. Ginkgo Biloba 50, Resveratrol 50, Luteína 2, Licopeno 2.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/+50.pdf',
        },
        { 
            img: '../multimedia/diaD.png', title: 'Día D', desc: 'Suplemento dietario a base de Vitamina D',
            features: ['Vitamina D3 (colecalciferol): 800 U.I.', '(19-50 años): 400%(SUPERA LA IDR)','Vitamina D3 (colecalciferol): 800 U.I.','(51-65 años): 200% (SUPERA LA IDR)','Vitamina D3 (colecalciferol): 800 U.I.', '(>65 años): 133% (SUPERA LA IDR)'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento dietario en comprimidos recubiertos',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/dia-d.pdf',
        },
        { 
            img: '../multimedia/herbaccionGinkgoForte.png', title: 'Herbacción Ginkgo Forte', desc: 'Cansancio y Fatiga Mental',
            features: ['Vitamina B1: 3 mg', '250%(SUPERA LA IDR)','Vitamina B2: 3 mg','231% (SUPERA LA IDR)','Vitamina B6: 3 mg', '(19-50 años): 230% (SUPERA LA IDR) / (> 50 años: 176% (SUPERA LA IDR)'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con Ginkgo Biloba 80 mg y vitaminas B1, B2 y B6',
            textBelow: '(*)% No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj.Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/herbaccion-ginkgo-forte.pdf',
        },
        { 
            img: '../multimedia/herbaccionMemory.png', title: 'Herbacción Memory', desc: 'Fatiga mental',
            features: ['Vitamina B1: 1 mg', '67% IRD','Vitamina B6: 1 mg','(19-50 años): 50% IDR / (>50 años): 59% IDR)','Lecitina de Soja: 50 mg', '','Extracto de Ginkgo Biloba: 40 mg', '',],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con Ginkgo Biloba 40 mg, Fosfolípidos y Vitaminas B1, B6',
            textBelow: '(*)% No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj.Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/herbaccion-memory.pdf',
        },
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
const index = parseInt(urlParams.get('index'), 10);

// Función para abrir el prospecto
function openProspecto() {
    if (category && index !== null && productos[category] && productos[category][index]) {
        const product = productos[category][index];
        window.open(product.prospectoLink, '_blank');
    }
}

// Verificar si los parámetros están presentes antes de intentar acceder a los productos
if (category && index !== null && productos[category] && productos[category][index]) {
    const product = productos[category][index];

    // Mostrar datos en la página
    document.getElementById('productTitle').innerText = product.title;
    document.getElementById('productDescription').innerText = product.desc;
    document.getElementById('productImage').src = product.img;

    // Llenar características
    const productFeatures = document.getElementById('productFeatures');
    productFeatures.innerHTML = ''; // Limpiar cualquier contenido anterior

    // Agregar títulos de las columnas
    const tableHeaders = document.getElementById('tableHeaders');
    tableHeaders.innerHTML = ''; // Limpiar los encabezados anteriores
    product.featuresColumn.forEach(col => {
        const th = document.createElement('th');
        th.innerText = col;
        tableHeaders.appendChild(th);
    });

    // Agregar las filas de la tabla
    product.featuresRow.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        
        // Crear celdas de la fila
        product.featuresColumn.forEach((col, colIndex) => {
            const td = document.createElement('td');
            
            // Rellenar las celdas con las características correspondientes
            const featureIndex = rowIndex * product.featuresColumn.length + colIndex;
            td.innerText = product.features[featureIndex] || ''; // Asegurarse de que no haya errores si faltan características
            tr.appendChild(td);
        });

        productFeatures.appendChild(tr);
    });

    // Agregar textos dinámicos
    document.getElementById('textAboveTable').innerText = product.textAbove;
    document.getElementById('textAboveTable2').innerText = product.textAbove2;
    document.getElementById('table-title-product').innerText = product.tabletitleproduct;
    document.getElementById('textBelowTable').innerText = product.textBelow;
    document.getElementById('clarified-text').innerText = product.clarifiedtext;

    // Configurar el botón del prospecto
    document.getElementById('prospectoButton').onclick = openProspecto;
}




