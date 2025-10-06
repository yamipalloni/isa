// Productos para cada categoría
const productos = {
    suplementosdietarios: [
        {
            img: '../multimedia/cartiflex.png',
            titleImg: '../multimedia/logos/logo.catiflex.png',
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
            titleImg: '../multimedia/logos/logo.+50.png',
            desc: 'Especialmente para gente adulta',
            features: ['Vitamina B1: 15 mg', '1249% IDR','Vitamina B6: 15 mg', '1154% IDR','Vitamina B12: 1 mg', '% IDR','Zinc: 3 mg', '43% IDR','Ginkgo Biloba: 50 mg', 'NE','Resveratrol: 10 mg', 'NE','Luteina: 2 mg', 'NE','Licopeno: 2 mg', 'NE'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'], 
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F', 'Fórmula G', 'Fórmula H'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con: Vitaminas B1, B6, B12, Zinc, Ginkgo Biloba, Resveratrol, Licopeno y Luteína',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. IDR: INGESTA DIARIA DE REFERENCIA. NE: NO ESTABLECIDA',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/+50.pdf',
        },
        { 
            img: '../multimedia/diaD.png', titleImg: '../multimedia/logos/logo.diaD.png', desc: 'Suplemento dietario Vitamina D',
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
            img: '../multimedia/herbaccionGinkgoForte.png', titleImg: '../multimedia/logos/logo.ginkgo.png', desc: 'Cansancio y Fatiga Mental',
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
            img: '../multimedia/herbaccionMemory.png', titleImg: '../multimedia/logos/logo.memory.png', desc: 'Fatiga mental',
            features: ['Vitamina B1: 1 mg', '67% IRD','Vitamina B6: 1 mg','(19-50 años): 50% IDR / (>50 años): 59% IDR)','Lecitina de Soja: 50 mg', '','Extracto de Ginkgo Biloba: 40 mg', '',],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con Ginkgo Biloba 40 mg, Fosfolípidos y Vitaminas B1, B6',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. (*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/herbaccion-memory.pdf',
        },
        { 
            img: '../multimedia/herbaccionVigor.png', titleImg: '../multimedia/logos/logo.vigor.png', desc: 'Desgano y fatiga muscular',
            features: ['Magnesio: 80 mg', '20% IRD','Raíz de Ginseng: 50 mg','','Guaraná: 40 mg', '',],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario con Ginseng, Guaraná y Magnesio',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. (*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/herbaccion-vigor.pdf',
        },
        { 
            img: '../multimedia/stopHungry.png', titleImg: '../multimedia/logos/logo.stophungry.png', desc: 'Ayuno intermitente, dietas hipocalóricas',
            features: ['Vitamina C: 40 mg', '89% IRD','Vitamina B1: 2 mg','167% (Supera IDR)','Vitamina B2: 2mg', '154% (Supera IDR)','Vitamina B6: 2mg', '(19 - 50 años): 154% (Supera IDR) / (> 50 años): 118% (Supera la IDR)','Vitamina D: 5 mcg', '(19 - 50 años): 100% / (> 50 años): 50%','Ácido pantoténico: 2 mg', '160% (Supera la IDR)','Vitamina E: 5 mg', '50%','Biotina: 10 mcg', '33%','Cromo: 19 mcg', '(19 - 50 años): 54 % / (> 50 años): 63%','Selenio: 20 mcg', '59%','Iodo: 88 mcg', '68%','Cobre: 2580 mcg', '287% (Supera la IDR)','Zinc: 7 mg', '100%','Goma konjac (glucomananos): 2500 mg', 'NE'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 sobre por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F', 'Fórmula G', 'Fórmula H', 'Fórmula I', 'Fórmula J', 'Fórmula K', 'Fórmula L', 'Fórmula M', 'Fórmula N'], 
            textAbove: 'Forma de uso: 1 sobre diario de 3 g. Volcar el sobre dentro de un vaso grande de agua. Ingerir y luego tomar.',
            textAbove2: 'Presentación: 30 sobres.',
            tabletitleproduct: 'Suplemento Dietario ideal para ayuno intermitente y dietas hipocalóricas',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas totales, fibra alimentaria y sodio. (*) % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores ó menores dependiendo de sus necesidades energéticas IDR: INGESTA DIARIA DE REFERENCIA NE: NO ESTABLECIDA.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/stop-hungry.pdf',
        },
        { 
            img: '../multimedia/veg12.png', titleImg: '../multimedia/logos/logo.veg12.png', desc: 'Suplemento dietario Vitamina B12',
            features: ['Vitamina B12: 3000 mg', '125.000% IRD (Supera la IDR)'],
            featuresColumn: ['Información nutricional por 1 comprimido', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: 1 comprimido diario.',
            textAbove2: 'Presentación: 15 comprimidos.',
            tabletitleproduct: 'Suplemento Dietario a base de vitamina B12',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/veg-12.pdf',
        },
        { 
            img: '../multimedia/vitaminaC1.png', titleImg: '../multimedia/logos/logo.vitaminac.png', desc: 'Suplemento dietario Vitamina C',
            features: ['Vitamina C: 1000 mg', '2.222% IRD (Supera la IDR)'],
            featuresColumn: ['Composición nutricional por porción (3,4 g)', '% IDR cubierto'],
            featuresRow: ['Fórmula A'], 
            textAbove: 'Forma de uso: Tomar 1 sobre por día.',
            textAbove2: 'Presentación: 15 sobres.',
            tabletitleproduct: 'Suplemento dietario con vitamina C',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. (*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj. Sus valores diarios pueden ser mayores o menores dependiendode sus necesidades energéticas.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/vitamina-C1-g.pdf',
        },
        { 
            img: '../multimedia/zentroComprimidos.png', titleImg: '../multimedia/logos/logo.zentro.png', desc: 'Multivitaminas - Polimineral',
            features: ['Vitamina B1: 10 mg', '833% IDR (Supera la IDR)','Vitamina B2: 10 mg', '769% IDR (Supera la IDR)','Niacina (Vitamina B3): 10 mg', '63% IDR','Ácido Pantoténico (Vitamina B5): 10 mg', '200% IDR (Supera la IDR)','Vitamina B6: 10 mg', '(19-50 años) 526% IDR (Supera la IDR) / (>50 años) 588% IDR (Supera la IDR)','Biotina (Vitamina B8): 30 mcg', '100%','Ácido fólico (Vitamina B9): 400 mcg', '167% IDR (Supera la IDR)','Vitamina B12: 1 mg', '41.666% IDR (Supera la IDR)','Vitamina C: 100 mg', '222% IDR (Supera la IDR)','Vitamina E: 10 mg alfa-TE', '100% IDR','Vitamina D: 2 mcg (800 U.I.)', '(19-50 años) 400% IDR (Supera la IDR) / (51-65 años) 200% IDR (Supera la IDR) / (>65 años) 133% IDR (Supera la IDR)','Vitamina A: 3,03 mg', '505% IDR (Supera la IDR)','Zinc: 5 mg', '71% IDR','Selenio: 20 mcg', '59% IDR','Magnesio: 78 mg', '(19-65 años) 30% IDR / (>65 años) 34% IDR (Supera la IDR)','Cobre: 3 mg', '333% IDR (Supera la IDR)','Cromo: 10,5 mcg', '(19-50 años) 30% IDR / (>50 años) 35% IDR','Manganeso: 2 mg', '87% IDR','Iodo: 100 mcg', '77% IDR','Ginseng en polvo: 100 mg', 'NE'],
            featuresColumn: ['Cada comprimido contiene:', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F', 'Fórmula G', 'Fórmula H', 'Fórmula I', 'Fórmula J', 'Fórmula K', 'Fórmula L', 'Fórmula M','Fórmula N','Fórmula O','Fórmula P','Fórmula Q','Fórmula R','Fórmula S','Fórmula O'], 
            textAbove: 'Forma de uso: Tomar 1 comprimido por día.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento dietario a base vitamina A, B1, B2, B3, Ácido Pantónico B5, B6, Biotina (B8), Ácido Fólico (B9), B12, C, E, D, Magensio, Cobre, Cromo, Manganeso, Iodo, Selenio, Zinc con Ginseg en comprimidos.',
            textBelow: '(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. IDR: INGESTA DIARIA DE REFERENCIA. NE: NO ESTABLECIDA',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/zentro-max.pdf',
        },
        { 
            img: '../multimedia/zentroSobres.png', titleImg: '../multimedia/logos/logo.zentro.png', desc: 'Multivitaminas - Polimineral',
            features: ['Vitamina C: 1000 mcg', '2222% IDR (Supera la IDR)','Magnesio: 100 mg', '(19-65 años) 38% IDR / (>65 años) 43% IDR','Vitamina B1: 10 mg', '833% IDR (Supera la IDR)','Vitamina B2: 10 mg', '769% IDR (Supera la IDR)','Vitamina B6: 10 mg', '(19-50 años) 769% IDR (Supera la IDR) / (>50 años) 588% IDR (Supera la IDR)','Niacina: 10 mg EN', '62%','Ácido fólico (Vitamina B9): 400 mcg', '166% IDR (Supera la IDR)','Vitamina B12: 6 mcg', '250% IDR (Supera la IDR)','Ácido Pantoténico: 10 mg', '200% IDR (Supera la IDR)','Vitamina E: 6 mg alfa-TE', '60% IDR','Vitamina A: 303 mcg RE', '51% IDR','Selenio: 14 mcg', '41% IDR','Zinc: 3 mg', '43% IDR'],
            featuresColumn: ['Cada comprimido contiene:', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F', 'Fórmula G', 'Fórmula H', 'Fórmula I', 'Fórmula J', 'Fórmula K', 'Fórmula L', 'Fórmula M'], 
            textAbove: 'Forma de uso: Tomar 1 cucharadita de té (5g) por día disuelta en medio vaso de agua, agitar y beber inmediatamente.',
            textAbove2: 'Presentación: 15 sobres de 5g.',
            tabletitleproduct: 'Suplemento dietario a base de Vitamina C, Margnesio, Vitaminas B1, B2, B6, Niacina, Ácido Pantoténico, Zinc, Ácido Fólico, Vitaminas A, E, B12 y Selenio en polvo.',
            textBelow: 'No aporta cantidades significativas de proteínas, grasas totales, fibra alimentaria y sodio. (*) % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas IDR: INGESTA DIARIA DE REFERENCIA.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/zentro-max-sobres.pdf',
        },
        { 
            img: '../multimedia/zentroMagnesio.png', titleImg: '../multimedia/logos/logo.zentromagnesio.png', desc: 'Citrato de Magnesio',
            features: ['Citrato de Magnesio: 240 mg', '(19 - 65 años): 92% IDR / (> 65 años): 104% Supera la IDR',],
            featuresColumn: ['Cada comprimido contiene:', '% IDR cubierto'],
            featuresRow: ['Fórmula A'], 
            textAbove: 'Tomar 2 comprimidos recubiertos por día, ingerido con abundante agua.',
            textAbove2: 'Comprimidos recubiertos.',
            tabletitleproduct: 'Suplemento dietario a base de Magnesio',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. (*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj. Sus valores diarios pueden ser mayores o menores dependiendode sus necesidades energéticas.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/zentro-magnesio.pdf',
        },
        { 
            img: '../multimedia/creatinaSticks.png', titleImg: '../multimedia/logos/logo.creatinaSticks.png', desc: 'Creatina Monohidrato',
            features: ['Creatina Monohidrato: 5g', 'Valor energético: 20 kcal (1 % IDR Adultos)',],
            featuresColumn: ['Cada sobre contiene:', '% IDR cubierto'],
            featuresRow: ['Fórmula A'], 
            textAbove: 'Tomar 1 sobre diario, disolver el contenido del sobre en medio vaso de agua, agitar y beber.',
            textAbove2: 'Sobres de 5 g en polvo.',
            tabletitleproduct: 'Suplemento dietario a base de Creatina Monohidrato',
            textBelow: 'No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. (*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj. Sus valores diarios pueden ser mayores o menores dependiendode sus necesidades energéticas.',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/creatina-sticks.pdf',
        },
        { 
            img: '../multimedia/novocartiflex.png', titleImg: '../multimedia/logos/logo.novocartiflex.png', desc: 'Articulaciones',
            features: ['Vitamina D: 10 mcg (400 UI)', '(19-50 años): 200%(SUPERA LA IDR) / (51-65 años): 100% / (> 65 años): 67%','Vitamina B12: 2,4 mcg','100%','Extracto seco total de insaponificables de palta y soja: 300 mg','NE','Extracto de cúrcuma: 100 mg','NE','Colágeno tipo II: 20 mg','NE','Pimienta negra: 10 mg','NE'],
            featuresColumn: ['Información nutricional por ingesta diaria (1 comprimido por día)', '% IDR cubierto'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F'], 
            textAbove: 'Forma de uso: 1 comprimidos diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Suplemento dietario a base de vitamina D3 y B12 con extracto seco total de insaponificables de palta y soja, colágeno tipo II, extracto de cúrcuma y pimienta negra',
            textBelow: '(*)% No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio.(*)% Valores diarios con base a una dieta de 2.000 kcal u 8.400 kj.Valores diarios con base a una dieta de 2.000 kcal u 8.400 kJ. No aporta cantidades significativas de valor energético, carbohidratos, proteínas, grasas, fibra alimentaria y sodio. IDR: INGESTA DIARIA DE REFERENCIA. NE: NO ESTABLECIDA',
            clarifiedtext: 'Suplemento Dietario. Suplementa dietas insuficientes. Ante cualquier duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/novocartiflex.pdf',
        },
    ],
    medicamentosventalibre: [
        { 
            img: '../multimedia/algistop.png', titleImg: '../multimedia/logos/logo.algistop.png', desc: 'Antialérgico',
            features: ['Loratadina', '10 mg','Celulosa microcristalina, Almidón Glicolato de Sodio, Lactosa, Dióxido de Silicio Coloidal, Estearato de Magnesio, Azul brillante laca alumínica', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: Adultos y niños mayores de 12 años: 1 comprimido (10 mg) una vez al día. Niños menores de 6 años: el modo de uso debe ser consultado previamente al médico.Duración del tratamiento: no mayor a 5 días en forma ininterrumpida.',
            textAbove2: 'Presentación: 15 comprimidos.',
            tabletitleproduct: 'Antialérgico | Loratadina 10 mg',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento Venta Libre. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/algistop.pdf',
        },
        { 
            img: '../multimedia/buenasNoches.png', titleImg: '../multimedia/logos/logo.buenasnoches.png', desc: 'Inductor del sueño',
            features: ['Melatonina', '3 mg','Lactosa, Celulosa microcristalina, Croscaramelosa sódica, Estearato de magnesio', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: 1 comprimido diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Inductor del sueño | Melatonina 3 mg',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento Venta Libre. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/buenasnoches.pdf',
        },
        { img: '../multimedia/gluco30.png', titleImg: '../multimedia/logos/logo.glucocartiflex.png', desc: 'Antiartrósico',
            features: ['Glucosamina Sulfato', '1500 mg','Aspartame', '2,5 mg','Ácito Cítrico', '25 mg','Glucosa Anhidra', '3950 mg',],
            featuresColumn: ['Cada sobre contiene (3.95 g):', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B','Fórmula C','Fórmula D'], 
            textAbove: 'Forma de uso: 1 sobre diario. Se aconseja continuar el tratamiento por un lapso de 6 semanas.',
            textAbove2: 'Presentación: 15, 30 y 42 sobres.',
            tabletitleproduct: 'Antiartrósico',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento Venta Libre. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/glucocartiflex.pdf',
        },
        {
            img: '../multimedia/herbaccionSedante.png', titleImg: '../multimedia/logos/logo.sedante.png', desc: 'Alivio de síntomas de ansiedad',
            features: ['Tilia Platyphyllos L. - Familia: Tiliáceas - Extracto seco de las inflorescencias y flores desecadas, conteniendo flavonoides expresados como quercetina en un porcentaje no menor al 0,3%', '75 mg','Passiflora Incarnata L. - Pasionaria - Pasifloráceas - Extracto seco de partes aéreas de Passiflora Incarnata conteniendo flavonoides expresados como vitexina en un porcentaje entre 6,0-8,0% sobre base seca.', '75 mg','Valeriana Officinalis L. - Valeriana – Familia: Valerianáceas - Extracto seco de raíces y rizomas de la Valeriana Officinalis conteniendo un porcentaje no menor a 0,3% de ácido valerénico y un porcentaje no menor a 0,6% de ácidos valerénicos totales, calculados como la suma de ácido hidroxivalerénico, ácido acetoxivalerénico y ácido valerénico, sobre base seca.', '50 mg'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C'], 
            textAbove: 'Forma de uso: 1 comprimido diario.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Sedante',
            textBelow: 'Si luego de 2 semanas los síntomas no mejoran, deberá consultar a su médico.',
            clarifiedtext: 'Suplemento Dietario. Lea atentamente el prospecto y ante la menor duda consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/herbaccion-sedante.pdf', 
        },
        { 
            img: '../multimedia/isagrip.png', titleImg: '../multimedia/logos/logo.isagrip.png', desc: 'Analgésico, antifebril, antitusivo y descongestivo',
            features: ['Paracetamol', '500 mg','Fenilefrina Clorhidrato', '8 mg',' Butetamato citrato', '40 mg','almidón pregelatinizado, povidona K30, ácido esteárico, celulosa microcristalina, croscaramelosa sódica, estearato de magnésio, c. s', 'Excipientes' ],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D'], 
            textAbove: 'Forma de uso: Adultos y mayores de 15 años: tomar 1 comprimido cada 8 horas, acompañado con un vaso de agua, jugo u otro líquido. Dosis máxima: 3 comprimidos. “SI LOS SINTOMAS DE DOLOR O FIEBRE PERSISTEN POR MÁS DE 3 DÍAS CONSULTE A SU MÉDICO',
            textAbove2: 'Presentación: 10 comprimidos.',
            tabletitleproduct: 'Analgésico - Antifebril - Antitusivo - Descongestivo',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento Venta Libre. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/isagrip4.pdf',
        },
        { 
            img: '../multimedia/paracetamol500mg.png', titleImg: '../multimedia/logos/logo.paracetamol.png', desc: 'Analgésico, antifebril, antitusivo y descongestivo',
            features: ['Paracetamol', '500 mg','Almidón pregelatinizado', '46,67 mg','Povidona K30', '3,33 mg','Acido esteárico', '5,56 mg',],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D'], 
            textAbove: 'Forma de uso: Adultos y niños mayores de 15 años: 1 comprimido (500 mg) cada 6 u 8 horas. Dosis máxima: 4 gramos por día (8 comprimidos de 500 mg). Pacientes mayores a 65 años o menores de 15 años: consulte con su médico. No utilizar por más de 5 días para el dolor y 3 días para la fiebre, o bien si el dolor o la fiebre empeoran o aparecen otros síntomas, suspenda la medicación y consulte a su médico.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'Analgésico - Antifebril - Antitusivo - Descongestivo',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento Venta Libre. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/paracetamol-isa-500.pdf',
        },
    ],
    medicamentosventabajoreceta: [
        { 
            img: '../multimedia/atorvastatina10.png', titleImg: '../multimedia/logos/logo.10atorvastanina.png', desc: 'Reduce el colesterol',
            features: ['Atorvastatina (como Atorvastatina cálcica) ', '10 mg','Carbonato de calcio, celulosa microcristalina, lactosa, croscarmelosa sódica, polisorbato 80, hidroxipropilcelulosa, estearato de magnesio.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: Siga exactamente las instrucciones de administración de este medicamento indicadas por su médico. En caso de duda, consulte de nuevo a su médico o farmacéutico.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'ATORVASTATINA ISA es un medicamento de venta bajo receta que pertenece a un grupo de fármacos que reducen el colesterol denominados estatinas. Junto con el plan de alimentación y actividad física.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/atorvastatina-10-20.pdf',
        },
        { 
            img: '../multimedia/atorvastatina20.png', titleImg: '../multimedia/logos/logo.20atorvastanina.png', desc: 'Reduce el colesterol',
            features: ['Atorvastatina (como Atorvastatina cálcica) ', '20 mg','Carbonato de calcio, celulosa microcristalina, lactosa, croscarmelosa sódica, polisorbato 80, hidroxipropilcelulosa, estearato de magnesio.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: Siga exactamente las instrucciones de administración de este medicamento indicadas por su médico. En caso de duda, consulte de nuevo a su médico o farmacéutico.',
            textAbove2: 'Presentación: 30 comprimidos.',
            tabletitleproduct: 'ATORVASTATINA ISA es un medicamento de venta bajo receta que pertenece a un grupo de fármacos que reducen el colesterol denominados estatinas. Junto con el plan de alimentación y actividad física.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/atorvastatina-10-20 (1).pdf',
        },
        { 
            img: '../multimedia/bistronfor.png', titleImg: '../multimedia/logos/logo.bistronfor.png', desc: 'Mucolítico de las vías respiratorias', 
            features: ['N-acetilcisteina', '600 mg','Acido cítrico, esencia de frambuesa en polvo, Rojo punzó 4R laca alumínica, Aspartame, glucosa anhidra csp 3900 mg.', 'Excipientes'],
            featuresColumn: ['Cada sobre monodosis contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso:  Adultos y adolescentes a partir de los 14 años: 1 sobre monodosis de 600 mg/día o bien 1 sobre monodosis de 200 mg tres veces por día. Niños entre 6-14 años: 1 sobre monodosis de 200 mg dos veces por día. Niños entre 2-5 años: 1 sobre monodosis de 200 mg repartido en dos tomas diarias ( equivalente a 200 mg/día)',
            textAbove2: 'Presentación: 10 sobres monodosis.',
            tabletitleproduct: 'Bistronfor actúa disminuyendo la viscosidad del moco, fluidificándolo y facilitando su eliminación. Este medicamente está indicado para reducir la viscosidad del moco y flemas facilitando su expulsión en procesos catarrales y gripales.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/bistronfor.pdf',
        },
        { 
            img: '../multimedia/4.4.png', titleImg: '../multimedia/logos/logo.4x4.png', desc: 'Vasodilatador',
            features: ['Sildenafil citrato', '50 mg','Celulosa Microcristalina, Fosfato Dibásico de Calcio Anhidro, Lactosa, Azul Brillante laca alumínica, Croscaramelosa Sódica, Estearato de Magnesio, c. s.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso:  Ver prospecto.',
            textAbove2: 'Presentación: 4 comprimidos.',
            tabletitleproduct: 'Sildenafil está indicado para el tratamiento de la disfunción eréctil peneana.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/4x4.pdf', 
        },
        { 
            img: '../multimedia/paracetamol1g2.png', titleImg: '../multimedia/logos/logo.paracetamol.png', desc: 'Analgésico - Antifebril', 
            features: ['Paracetamol CD 90% (Equivalente a Paracetamol 1000 mg)', '1112 mg','Almidón pregelatinizado, Povidona (K-30), Acido esteárico.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso:  Ver prospecto.',
            textAbove2: 'Presentación: 50 Blisters x 8 comprimidos.',
            tabletitleproduct: 'Analgésico - Antifebril.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/paracetamol-isa-un-gramo2.pdf', 
        },
        { 
            img: '../multimedia/paracetamol1g.png', titleImg: '../multimedia/logos/logo.paracetamol.png', desc: 'Analgésico, antifebril',
            features: ['Paracetamol CD 90% (Equivalente a Paracetamol 1000 mg)', '1112 mg','Almidón pregelatinizado, Povidona (K-30), Acido esteárico.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B'], 
            textAbove: 'Forma de uso: Adultos y niños mayores de 15 años: 1 comprimido de 1 a 3 veces por día. Las tomas deben estar espaciadas por no menos de 4 horas. No exceder de 4 comprimidos durante 24 horas. Dosis máxima: 4 g/día para un período de 10 días. Para un lapso de tiempo mayor: 2,6 g/día.',
            textAbove2: 'Presentación: 24 comprimidos.',
            tabletitleproduct: 'Analgésico. Antipirético.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/paracetamol-isa-un-gramo.pdf',
        },
        { 
            img: '../multimedia/doloparacetamol.png', titleImg: '../multimedia/logos/logo.doloparacetamol.png', desc: 'Analgésico, antiinflamatorio',
            features: ['Paracetamol CD 90%', '556 mg','Diclofenac potásico','50 mg','Fosfato dibásico de calcio','30 mg','Croscamelosa sódica','14 mg','Celulosa microcristalina PH 102','47 mg','Estearato de magnesio','3 mg','Opadry II rojo','10 mg'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B','Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F','Fórmula G'], 
            textAbove: 'Forma de uso: Siga exactamente las instrucciones de administración proporcionadas por su médico.',
            textAbove2: 'Presentación: 10 comprimidos.',
            tabletitleproduct: 'Está indicado para el tratamiento de diferentes afecciones dolorosas e inflamatorias, particularmente para el tratamiento de los síntomas de periartritis escapulohumeral (inflamación del hombro), tendinitis (inflamación de los tendones), bursitis (inflamación de las bolsas serosas de ciertas articulaciones) y otros dolores en pacientes en los que no haya sido efectivo el tratamiento con las drogas individuales (diclofenac o paracetamol).',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/doloparacetamol.pdf',  
        },
        { 
            img: '../multimedia/quartier.png', titleImg: '../multimedia/logos/logo.quartier.png', desc: 'Tratamiento para la disfunción eréctil',
            features: ['Tadalafilo', '20 mg','Laurilsulfato de sodio','5 mg','Celulosa microcristalina PH 102','63 mg','Cellactose 80','500 mg','Rojo punzó laca alumínica 20 - 25 %','0,2 mg','Croscaramelosa sódica','30 mg','Esencia de frutilla:','14 mg','Estearato de magnesio','18 mg.', 'Excipientes'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B','Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F','Fórmula G','Fórmula H','Fórmula I'],  
            textAbove: 'Forma de uso:  Ver prospecto.',
            textAbove2: 'Presentación: 2 comprimidos.',
            tabletitleproduct: 'QUARTIER está indicado en el tratamiento de la disfunción eréctil en hombres.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/quartier.pdf',  
        },
        { 
            img: '../multimedia/quartier5mg.png', titleImg: '../multimedia/logos/logo.quartier.png', desc: 'Tratamiento para la disfunción eréctil',
            features: ['Tadalafilo','5 mg','Laurilsulfato de sodio','1,25 mg','Celulosa microcristalina PH 102','15,75 mg', 'Cellactose 80','125 mg', 'Croscaramelosa sódica', '7,5 mg', 'Esencia de frutilla','3,5 mg','Estearato de magnesio','4,5 mg'],
            featuresColumn: ['Cada comprimido contiene:', 'mg'],
            featuresRow: ['Fórmula A', 'Fórmula B', 'Fórmula C', 'Fórmula D', 'Fórmula E', 'Fórmula F', 'Fórmula G'], 
            textAbove: 'Forma de uso:  Ver prospecto.',
            textAbove2: 'Presentación: envases de 15 comprimidos.',
            tabletitleproduct: 'QUARTIER está indicado en el tratamiento de la disfunción eréctil en hombres.',
            textBelow: 'ANTE CUALQUIER DUDA CONSULTE A SU MEDICO.',
            clarifiedtext: 'Medicamento venta bajo receta. Lea atentamente el prospecto. Ante la menor duda, consulte a su médico y/o farmacéutico.',
            prospectoLink: '../multimedia/prospectos/quartier5mg.pdf',  
        },
    ]
};



// Variable para almacenar la categoría actual
let currentCategory = null;

// Función para obtener la categoría desde la URL
function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category'); // Ejemplo: ?category=suplementosDietarios
}

// Función para mostrar el carrusel según la categoría seleccionada
function showCarousel(category) {
    const carouselItems = document.getElementById('carouselItems');
    carouselItems.innerHTML = ''; // Limpiar items anteriores del carrusel

    // Validar si existen productos para la categoría seleccionada
    if (!productos[category]) {
        console.error('Categoría no encontrada:', category);
        return;
    }

    const products = productos[category];
    const productsPerRow = window.innerWidth < 768 ? 2 : 4; // 2 productos para móviles, 4 para escritorio

    // Crear los items del carrusel
    for (let i = 0; i < products.length; i += productsPerRow) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (i === 0) item.classList.add('active'); // Activo solo para el primer item

        // Crear fila de productos
        const row = document.createElement('div');
        row.classList.add('row', 'justify-content-center');

        // Agregar productos en la fila
        for (let j = i; j < i + productsPerRow && j < products.length; j++) {
            const product = products[j];
            const col = document.createElement('div');
            col.classList.add('col-6', 'col-md-3', 'text-center'); // 6 col para móvil, 3 col para escritorio

            // Crear el contenido del producto
            col.innerHTML = `
                <a href="producto.html?category=${category}&index=${j}">
                    <img src="${product.img}" alt="${product.title}" class="img-fluid">
                    <img src="${product.titleImg}" alt="${product.title}" class="img-fluid mt-2 logo">
                    <p>${product.desc}</p>
                </a>
            `;
            row.appendChild(col);
        }

        item.appendChild(row);
        carouselItems.appendChild(item);
    }

    const carouselContainer = document.getElementById('productosCarousel');
    carouselContainer.style.display = 'block'; // Mostrar el carrusel
    // carouselContainer.scrollIntoView({ behavior: 'smooth' }); // Desplazarse hacia el carrusel
}

// Evento para cargar la categoría al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const category = getCategoryFromUrl(); // Obtener categoría desde la URL
    if (category) {
        showCarousel(category); // Mostrar el carrusel de la categoría
    }
});

// Evento para actualizar el carrusel al cambiar el tamaño de la pantalla
window.addEventListener('resize', () => {
    const category = getCategoryFromUrl(); // Volver a obtener la categoría
    if (category) {
        showCarousel(category); // Actualizar el carrusel con la categoría actual
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
    document.getElementById('productTitleImg').src = product.titleImg;
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
