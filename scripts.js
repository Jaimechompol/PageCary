// Lista de sitios turísticos con su información
const sitiosTuristicos = [
     {
      "nombre": "La Casa del Árbol",
      "descripcion": "Famoso por su columpio del fin del mundo con vistas espectaculares del volcán Tungurahua.",
      "ubicacion": "Runtún, Baños",
      "horario": "08:00 - 18:00",
      "precio_entrada": "USD 1"
    },
    {
      "nombre": "Cascada Pailón del Diablo",
      "descripcion": "Impresionante cascada con senderos y miradores para disfrutar de su majestuosidad.",
      "ubicacion": "Ruta de las Cascadas, Río Verde",
      "horario": "09:00 - 17:00",
      "precio_entrada": "USD 2"
    },
    {
      "nombre": "Termas de la Virgen",
      "descripcion": "Piscinas de aguas termales naturales para relajarse y disfrutar de sus propiedades terapéuticas.",
      "ubicacion": "Centro de Baños",
      "horario": "04:30 - 21:00",
      "precio_entrada": "USD 3 - 6"
    },
    {
      "nombre": "Ruta de las Cascadas",
      "descripcion": "Un recorrido que incluye varias cascadas impresionantes en la carretera hacia Puyo.",
      "ubicacion": "Carretera Baños-Puyo",
      "horario": "Acceso libre",
      "precio_entrada": "Variable según cascada"
    },
    {
      "nombre": "Puente de San Francisco (Bungee Jumping)",
      "descripcion": "Experiencia extrema de salto bungee desde un puente con vistas al río.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "09:00 - 18:00",
      "precio_entrada": "USD 20 - 30"
    },
    {
      "nombre": "Mirador de Bellavista",
      "descripcion": "Punto panorámico que ofrece vistas espectaculares de la ciudad y el valle.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Parque de la Familia",
      "descripcion": "Espacio recreativo con jardines, senderos y actividades para la familia.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "09:00 - 17:00",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Cascada Manto de la Novia",
      "descripcion": "Una hermosa cascada que puede ser observada desde un tarabita.",
      "ubicacion": "Ruta de las Cascadas",
      "horario": "09:00 - 17:00",
      "precio_entrada": "USD 2"
    },
    {
      "nombre": "Mirador de la Virgen del Agua Santa",
      "descripcion": "Icono religioso de la ciudad con vistas impresionantes desde la colina.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Zoológico de Baños (San Martín)",
      "descripcion": "Un zoológico con una gran variedad de animales locales y exóticos.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "09:00 - 17:00",
      "precio_entrada": "USD 3"
    },
    {
      "nombre": "Parque Aventura San Martín",
      "descripcion": "Ofrece deportes extremos como escalada, canopy, y senderismo.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "08:00 - 18:00",
      "precio_entrada": "Variable"
    },
    {
      "nombre": "Cascada El Agoyán",
      "descripcion": "La cascada más alta de la Ruta de las Cascadas, ideal para fotografías.",
      "ubicacion": "Ruta de las Cascadas",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Cueva de los Tayos",
      "descripcion": "Una experiencia única para explorar formaciones naturales en cuevas.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "09:00 - 16:00",
      "precio_entrada": "USD 3"
    },
    {
      "nombre": "Sendero del Chamana",
      "descripcion": "Un sendero que conecta cascadas y zonas de naturaleza exuberante.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Puente del Río Blanco (Canopy)",
      "descripcion": "Ofrece emocionantes experiencias de canopy sobre el río Blanco.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "09:00 - 18:00",
      "precio_entrada": "USD 15 - 25"
    },
    {
      "nombre": "Mirador del Volcán Tungurahua",
      "descripcion": "Punto estratégico para observar el volcán y sus alrededores.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "La Basílica de Nuestra Señora del Rosario de Agua Santa",
      "descripcion": "Imponente iglesia con murales que cuentan la historia de los milagros locales.",
      "ubicacion": "Centro de Baños",
      "horario": "06:00 - 20:00",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Cascada de Ulba",
      "descripcion": "Una pequeña pero pintoresca cascada ideal para relajarse.",
      "ubicacion": "Ulba, Baños",
      "horario": "Acceso libre",
      "precio_entrada": "Gratuito"
    },
    {
      "nombre": "Piscinas El Salado",
      "descripcion": "Piscinas de aguas termales rodeadas de naturaleza.",
      "ubicacion": "Baños de Agua Santa",
      "horario": "06:00 - 22:00",
      "precio_entrada": "USD 2.50 - 4"
    },
    {
      "nombre": "Tarabita La Gloria",
      "descripcion": "Un emocionante recorrido en tarabita con vistas al valle y cascadas.",
      "ubicacion": "Ruta de las Cascadas",
      "horario": "08:00 - 18:00",
      "precio_entrada": "USD 2"
    }
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');

    // Agrega un evento 'click' a cada elemento del menú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Elimina la clase 'active' de todos los elementos
            menuItems.forEach(menu => menu.classList.remove('active'));

            // Agrega la clase 'active' al elemento seleccionado
            item.classList.add('active');
        });
    });

    // Verificación adicional: elimina duplicados de 'search-box'
    const searchBoxes = document.querySelectorAll('.search-box');
    if (searchBoxes.length > 1) {
        for (let i = 1; i < searchBoxes.length; i++) {
            searchBoxes[i].remove();
        }
    }

    // Esperar 5 segundos antes de mostrar el chat
    setTimeout(() => {
        const chatBox = document.getElementById('chat-box');
        chatBox.classList.remove('chat-hidden');
        chatBox.classList.add('chat-visible');
    }, 5000);

    // Cerrar el chat al hacer clic en el botón "X"
    document.getElementById('close-chat').addEventListener('click', () => {
        const chatBox = document.getElementById('chat-box');
        chatBox.classList.remove('chat-visible');
        chatBox.classList.add('chat-hidden');
    });

    // Evento al hacer clic en el botón de enviar
    document.getElementById('send-btn').addEventListener('click', () => {
        const chatBody = document.getElementById('chat-body');
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (message) {
            // Crear el nuevo mensaje del usuario
            const userMessage = document.createElement('div');
            userMessage.classList.add('chat-message', 'user-message');
            userMessage.innerHTML = `
                <p>${message}</p>
                <span class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
            chatBody.appendChild(userMessage);

    function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

// Buscar coincidencias parciales en los nombres de sitios turísticos
        const sitioEncontrado = sitiosTuristicos.find(sitio =>
            normalizarTexto(sitio.nombre).includes(normalizarTexto(message))
        );

// Responder con la información del sitio turístico si se encuentra
if (sitioEncontrado) {
    const botResponse = document.createElement('div');
    botResponse.classList.add('chat-message', 'bot-message');
    botResponse.innerHTML = `
        <p>
            Sí, claro. <strong>${sitioEncontrado.nombre}</strong> es un lugar increíble. 
            ${sitioEncontrado.descripcion} Se encuentra en ${sitioEncontrado.ubicacion}. 
            Su horario de atención es de ${sitioEncontrado.horario}, 
            y el precio de entrada es ${sitioEncontrado.precio_entrada}.
        </p>
        <span class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
    chatBody.appendChild(botResponse);
}
if (!sitioEncontrado) {
    const botResponse = document.createElement('div');
    botResponse.classList.add('chat-message', 'bot-message');
    botResponse.innerHTML = `
        <p>Lo siento, no tengo información sobre ese lugar. agrega el nombre de un sitio turistico de Baños y te lo dire con gusto 😍👌</p>
        <span class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
    chatBody.appendChild(botResponse);
}



            // Limpiar el input y desplazar hacia abajo
            input.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
});
