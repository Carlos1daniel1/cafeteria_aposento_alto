let mostrando = false;
let minutoVersiculoMostrado = -1;

const versiculosGenerales = [

    {
        texto: "Jehová es mi pastor; nada me faltará.",
        referencia: "SALMO 23:1"
    },

    {
        texto: "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él.",
        referencia: "SALMO 34:8"
    },

    {
        texto: "Encomienda a Jehová tu camino, y confía en él; y él hará.",
        referencia: "SALMO 37:5"
    },

    {
        texto: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",
        referencia: "SALMO 37:4"
    },

    {
        texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
        referencia: "SALMO 46:1"
    },

    {
        texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.",
        referencia: "SALMO 118:24"
    },

    {
        texto: "Mi socorro viene de Jehová, que hizo los cielos y la tierra.",
        referencia: "SALMO 121:2"
    },

    {
        texto: "Jehová está cerca de los quebrantados de corazón.",
        referencia: "SALMO 34:18"
    },

    {
        texto: "El Señor es bueno; para siempre es su misericordia.",
        referencia: "SALMO 100:5"
    },

    {
        texto: "Cercano está Jehová a todos los que le invocan.",
        referencia: "SALMO 145:18"
    },

    {
        texto: "El corazón alegre constituye buen remedio.",
        referencia: "PROVERBIOS 17:22"
    },

    {
        texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.",
        referencia: "PROVERBIOS 3:5"
    },

    {
        texto: "El que confía en Jehová será prosperado.",
        referencia: "PROVERBIOS 28:25"
    },

    {
        texto: "Sobre toda cosa guardada, guarda tu corazón.",
        referencia: "PROVERBIOS 4:23"
    },

    {
        texto: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.",
        referencia: "ECLESIASTÉS 3:1"
    },

    {
        texto: "Los que esperan a Jehová tendrán nuevas fuerzas.",
        referencia: "ISAÍAS 40:31"
    },

    {
        texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
        referencia: "ISAÍAS 41:10"
    },

    {
        texto: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha.",
        referencia: "ISAÍAS 41:13"
    },

    {
        texto: "Clama a mí, y yo te responderé.",
        referencia: "JEREMÍAS 33:3"
    },

    {
        texto: "Porque con amor eterno te he amado.",
        referencia: "JEREMÍAS 31:3"
    },

    {
        texto: "Bendito el varón que confía en Jehová.",
        referencia: "JEREMÍAS 17:7"
    },

    {
        texto: "El gozo de Jehová es vuestra fuerza.",
        referencia: "NEHEMÍAS 8:10"
    },

    {
        texto: "Para Dios todo es posible.",
        referencia: "MATEO 19:26"
    },

    {
        texto: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",
        referencia: "MATEO 7:7"
    },

    {
        texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
        referencia: "MATEO 11:28"
    },

    {
        texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.",
        referencia: "JUAN 14:1"
    },

    {
        texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.",
        referencia: "JUAN 3:16"
    },

    {
        texto: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da.",
        referencia: "JUAN 14:27"
    },

    {
        texto: "Todo lo puedo en Cristo que me fortalece.",
        referencia: "FILIPENSES 4:13"
    },

    {
        texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!",
        referencia: "FILIPENSES 4:4"
    },

    {
        texto: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria.",
        referencia: "FILIPENSES 4:19"
    },

    {
        texto: "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo.",
        referencia: "1 TESALONICENSES 5:16-18"
    },

    {
        texto: "Fiel es el que os llama, el cual también lo hará.",
        referencia: "1 TESALONICENSES 5:24"
    },

    {
        texto: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
        referencia: "1 PEDRO 5:7"
    },

    {
        texto: "Dios es amor; y el que permanece en amor, permanece en Dios.",
        referencia: "1 JUAN 4:16"
    },

    {
        texto: "Nosotros le amamos a él, porque él nos amó primero.",
        referencia: "1 JUAN 4:19"
    },

    {
        texto: "El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.",
        referencia: "FILIPENSES 1:6"
    },

    {
        texto: "La gracia del Señor Jesucristo sea con todos vosotros.",
        referencia: "APOCALIPSIS 22:21"
    },

    {
        texto: "Porque para mí el vivir es Cristo, y el morir es ganancia.",
        referencia: "FILIPENSES 1:21"
    },

    {
        texto: "Si Dios es por nosotros, ¿quién contra nosotros?",
        referencia: "ROMANOS 8:31"
    }

];


const versiculosCafeteria = [

    {
        texto: "Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía.",
        referencia: "SALMO 133:1"
    },

    {
        texto: "Servid a Jehová con alegría; venid ante su presencia con regocijo.",
        referencia: "SALMO 100:2"
    },

    {
        texto: "El alma generosa será prosperada; y el que saciare, él también será saciado.",
        referencia: "PROVERBIOS 11:25"
    },

    {
        texto: "Mejor es la comida de legumbres donde hay amor, que de buey engordado donde hay odio.",
        referencia: "PROVERBIOS 15:17"
    },

    {
        texto: "El hombre que tiene amigos ha de mostrarse amigo.",
        referencia: "PROVERBIOS 18:24"
    },

    {
        texto: "Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros.",
        referencia: "HECHOS 2:42"
    },

    {
        texto: "Todos los que habían creído estaban juntos, y tenían en común todas las cosas.",
        referencia: "HECHOS 2:44"
    },

    {
        texto: "Partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón.",
        referencia: "HECHOS 2:46"
    },

    {
        texto: "Amaos los unos a los otros con amor fraternal.",
        referencia: "ROMANOS 12:10"
    },

    {
        texto: "Compartiendo para las necesidades de los santos; practicando la hospitalidad.",
        referencia: "ROMANOS 12:13"
    },

    {
        texto: "Por tanto, recibíos los unos a los otros, como también Cristo nos recibió.",
        referencia: "ROMANOS 15:7"
    },

    {
        texto: "El amor sea sin fingimiento. Aborreced lo malo, seguid lo bueno.",
        referencia: "ROMANOS 12:9"
    },

    {
        texto: "Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.",
        referencia: "GÁLATAS 6:2"
    },

    {
        texto: "Servíos por amor los unos a los otros.",
        referencia: "GÁLATAS 5:13"
    },

    {
        texto: "No nos cansemos, pues, de hacer bien.",
        referencia: "GÁLATAS 6:9"
    },

    {
        texto: "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros.",
        referencia: "EFESIOS 4:32"
    },

    {
        texto: "Soportándoos con paciencia los unos a los otros en amor.",
        referencia: "EFESIOS 4:2"
    },

    {
        texto: "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.",
        referencia: "COLOSENSES 3:14"
    },

    {
        texto: "Todo lo que hagáis, hacedlo de corazón, como para el Señor.",
        referencia: "COLOSENSES 3:23"
    },

    {
        texto: "Vestíos, pues, de entrañable misericordia, de benignidad, de humildad, de mansedumbre.",
        referencia: "COLOSENSES 3:12"
    },

    {
        texto: "Recibid al débil en la fe, pero no para contender sobre opiniones.",
        referencia: "ROMANOS 14:1"
    },

    {
        texto: "Y considerémonos unos a otros para estimularnos al amor y a las buenas obras.",
        referencia: "HEBREOS 10:24"
    },

    {
        texto: "No os olvidéis de la hospitalidad.",
        referencia: "HEBREOS 13:2"
    },

    {
        texto: "Hospedaos los unos a los otros sin murmuraciones.",
        referencia: "1 PEDRO 4:9"
    },

    {
        texto: "Cada uno según el don que ha recibido, minístrelo a los otros.",
        referencia: "1 PEDRO 4:10"
    },

    {
        texto: "El que quiera hacerse grande entre vosotros será vuestro servidor.",
        referencia: "MATEO 20:26"
    },

    {
        texto: "Porque el Hijo del Hombre no vino para ser servido, sino para servir.",
        referencia: "MARCOS 10:45"
    },

    {
        texto: "En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros.",
        referencia: "JUAN 13:35"
    },

    {
        texto: "Un mandamiento nuevo os doy: Que os améis unos a otros.",
        referencia: "JUAN 13:34"
    },

    {
        texto: "No mirando cada uno por lo suyo propio, sino cada cual también por lo de los otros.",
        referencia: "FILIPENSES 2:4"
    },

    {
        texto: "Nada hagáis por contienda o por vanagloria; antes bien con humildad.",
        referencia: "FILIPENSES 2:3"
    },

    {
        texto: "El fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",
        referencia: "GÁLATAS 5:22"
    },

    {
        texto: "La fe, si no tiene obras, es muerta en sí misma.",
        referencia: "SANTIAGO 2:17"
    },

    {
        texto: "Hermanos míos, ¿de qué aprovechará si alguno dice que tiene fe, y no tiene obras?",
        referencia: "SANTIAGO 2:14"
    },

    {
        texto: "Todo lo que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos.",
        referencia: "MATEO 7:12"
    },

    {
        texto: "No debáis a nadie nada, sino el amaros unos a otros.",
        referencia: "ROMANOS 13:8"
    },

    {
        texto: "La palabra de Cristo more en abundancia en vosotros.",
        referencia: "COLOSENSES 3:16"
    },

    {
        texto: "Cada uno dé como propuso en su corazón; porque Dios ama al dador alegre.",
        referencia: "2 CORINTIOS 9:7"
    },

    {
        texto: "Más bienaventurado es dar que recibir.",
        referencia: "HECHOS 20:35"
    },

    {
        texto: "Y el Señor os haga crecer y abundar en amor unos para con otros.",
        referencia: "1 TESALONICENSES 3:12"
    }

];

function obtenerVersiculoActual(){

    const ahora = new Date();

    const minutosTranscurridos =
    Math.floor(ahora.getTime()/60000);

    const esMinutoPar = minutosTranscurridos % 2 === 0;

    const listaActual = esMinutoPar
    ? versiculosGenerales
    : versiculosCafeteria;

    const indice =
        Math.floor(minutosTranscurridos / 2) %
        listaActual.length;

    return listaActual[indice];
}

/* ===================================
   BIENVENIDA
=================================== */

function mostrarBienvenida(){

    const ahora = new Date();

    minutoVersiculoMostrado = ahora.getMinutes();

    const versiculoDelDia = obtenerVersiculoActual();

    document.getElementById("pantalla").innerHTML = `
    
    <div class="bienvenida">

        <div class="fondo-tv"></div>

        <div class="versiculo-overlay">

        <div class="versiculo">
        “${versiculoDelDia.texto}”
    </div>
    
    <div class="referencia">
        ${versiculoDelDia.referencia}
    </div>

        </div>

        <div class="fecha-hora">

            <div id="fechaActual">
                ${ahora.toLocaleDateString('es-MX')}
            </div>

            <div class="separador"></div>

            <div id="horaActual">
                ${ahora.toLocaleTimeString('es-MX')}
            </div>

        </div>

    </div>
    
    `;
}

function actualizarVersiculo(){

    if(mostrando){
        return;
    }

    const ahora = new Date();

    const minutoActual = ahora.getMinutes();

    if(minutoActual === minutoVersiculoMostrado){
        return;
    }

    minutoVersiculoMostrado = minutoActual;

    const versiculoDelMinuto = obtenerVersiculoActual();

    const texto = document.querySelector(".versiculo");
    const referencia = document.querySelector(".referencia");

    if(texto && referencia){

        texto.textContent = `“${versiculoDelMinuto.texto}”`;

        referencia.textContent =
            versiculoDelMinuto.referencia;
    }
}

/* ===================================
   CAJA
=================================== */

function mostrarCaja(numeroCaja){

    document.getElementById("pantalla").innerHTML = `
    
    <div class="llamado">

        <div class="fondo-caja"></div>

        <div class="llamado-contenido">

            <div class="numero">
                ${numeroCaja}
            </div>

        </div>

        <div class="fecha-hora-caja">

    <div id="fechaCaja"></div>

    <div class="separador"></div>

    <div id="horaCaja"></div>

</div>

    </div>
    
    
    `;
    actualizarReloj();
}

/* ===================================
   REVISAR ESTADO
=================================== */

function revisar(){

    if(mostrando){
        return;
    }

    fetch('/estado')
    .then(r => r.json())
    .then(data => {

        if(!data.caja){
            return;
        }

        mostrando = true;

        mostrarCaja(data.caja);

        const ding = document.getElementById("dingAudio");

        if(ding){

            ding.currentTime = 0;
            ding.play();
        }

        setTimeout(() => {

            const voz = new Audio(
                data.audio
            );

            voz.play()
            .then(() => {
                console.log("Audio reproducido");
            })
            .catch(err => {
                console.log(err);
            });

        },1000);

        setTimeout(() => {

            mostrarBienvenida();

            mostrando = false;

        },6000);

    })
    .catch(error => {
        console.log(error);
    });
}

/* ===================================
   RELOJ
=================================== */

function actualizarReloj(){

    const hora = document.getElementById("horaActual");
    const fecha = document.getElementById("fechaActual");
    const horaCaja = document.getElementById("horaCaja");
    const fechaCaja = document.getElementById("fechaCaja");

    const ahora = new Date();

    if(hora){

        hora.textContent =
            ahora.toLocaleTimeString(
                'es-MX',
                {
                    hour:'2-digit',
                    minute:'2-digit'
                }
            );
    }

    if(horaCaja){

        horaCaja.textContent =
            ahora.toLocaleTimeString(
                'es-MX',
                {
                    hour:'2-digit',
                    minute:'2-digit'
                }
            );
    }
    
    if(fechaCaja){
    
        const diaSemana =
            ahora.toLocaleDateString(
                'es-MX',
                { weekday:'long' }
            ).toUpperCase();
    
        const fechaBonita =
            ahora.toLocaleDateString(
                'es-MX',
                {
                    day:'numeric',
                    month:'long',
                    year:'numeric'
                }
            ).toUpperCase();
    
        fechaCaja.innerHTML =
            `${diaSemana}<br>${fechaBonita}`;
    }

    if(fecha){

        const diaSemana =
            ahora.toLocaleDateString(
                'es-MX',
                { weekday:'long' }
            ).toUpperCase();

        const fechaBonita =
            ahora.toLocaleDateString(
                'es-MX',
                {
                    day:'numeric',
                    month:'long',
                    year:'numeric'
                }
            ).toUpperCase();

        fecha.innerHTML =
            `${diaSemana}<br>${fechaBonita}`;
    }
}

/* ===================================
   INICIO
=================================== */

mostrarBienvenida();

setInterval(revisar,1000);

setInterval(actualizarReloj,1000);

setInterval(actualizarVersiculo,1000);