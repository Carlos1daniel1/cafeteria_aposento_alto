let mostrando = false;

/* ===================================
   BIENVENIDA
=================================== */

function mostrarBienvenida(){

    const ahora = new Date();

    document.getElementById("pantalla").innerHTML = `
    
    <div class="bienvenida">

        <div class="fondo-tv"></div>

        <div class="versiculo-overlay">

            <div class="versiculo">
                “Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía.”
            </div>

            <div class="referencia">
                SALMO 133:1
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