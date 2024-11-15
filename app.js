// Importación de las funciones y clases necesarias
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MongoAdapter = require('@bot-whatsapp/database/mongo');

// Definición del menú principal
const menu = "Aquí encontrarás el menú de archivos, elige una de las siguientes opciones:\n\n" +
    "1. Carpeta de Formatos\n" +
    "2. Asistencia\n" +
    "3. Otros\n" +
    "4. Academia\n" +
    "5. ChatGPT";

// Submenú para "Carpeta de Formatos"
const flowFormatos = addKeyword("1").addAnswer(
    "📁 Submenú: Carpeta de Formatos\n\n" +
    "a. Formato de informe\n" +
    "b. Formato de asistencia\n" +
    "c. Regresar al menú principal",
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body.toLowerCase()) {
            case "a":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a flujo de informe
            case "b":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a flujo de asistencia
            case "c":
                return gotoFlow ("flowPrincipal"); // Regresa al menú principal
            default:
                return fallBack("Opción no válida. Por favor selecciona 'a', 'b' o 'c'.");
        }
    }
);

// Submenú para "Asistencia"
const flowAsistencia = addKeyword("2").addAnswer(
    "📅 Submenú: Asistencia\n\n" +
    "a. Ver asistencia\n" +
    "b. Registrar asistencia\n" +
    "c. Regresar al menú principal",
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body.toLowerCase()) {
            case "a":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a ver asistencia
            case "b":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a registrar asistencia
            case "c":
                return gotoFlow("flowPrincipal"); // Regresa al menú principal
            default:
                return fallBack("Opción no válida. Por favor selecciona 'a', 'b' o 'c'.");
        }
    }
);

// Submenú para "Otros"
const flowOtros = addKeyword("3").addAnswer(
    "📂 Submenú: Otros\n\n" +
    "a. Documentos compartidos\n" +
    "b. Recursos adicionales\n" +
    "c. Regresar al menú principal",
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body.toLowerCase()) {
            case "a":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a documentos compartidos
            case "b":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a recursos adicionales
            case "c":
                return gotoFlow("flowPrincipal"); // Regresa al menú principal
            default:
                return fallBack("Opción no válida. Por favor selecciona 'a', 'b' o 'c'.");
        }
    }
);

// Submenú para "Academia"
const flowAcademia = addKeyword("4").addAnswer(
    "🎓 Submenú: Academia\n\n" +
    "a. Cursos disponibles\n" +
    "b. Inscripciones\n" +
    "c. Regresar al menú principal",
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body.toLowerCase()) {
            case "a":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a cursos disponibles
            case "b":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a inscripciones
            case "c":
                return gotoFlow("flowPrincipal"); // Regresa al menú principal
            default:
                return fallBack("Opción no válida. Por favor selecciona 'a', 'b' o 'c'.");
        }
    }
);

// Submenú para "ChatGPT"
const flowChatGPT = addKeyword("5").addAnswer(
    "🤖 Submenú: ChatGPT\n\n" +
    "a. Consultar ChatGPT\n" +
    "b. Información sobre ChatGPT\n" +
    "c. Regresar al menú principal",
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body.toLowerCase()) {
            case "a":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a consultar ChatGPT
            case "b":
                return fallBack ("Aquí tienes el formato de informe: https://acortar.link/agJXTR"); // Redirige a información sobre ChatGPT
            case "c":
                return gotoFlow("flowPrincipal"); // Regresa al menú principal
            default:
                return fallBack("Opción no válida. Por favor selecciona 'a', 'b' o 'c'.");
        }
    }
);

// Flujo para el menú principal
const menuFlow = addKeyword(["menu", "MENU"]).addAnswer(
    menu,
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        switch (ctx.body) {
            case "1":
                return gotoFlow("flowFormatos"); // Redirige al submenú de formatos
            case "2":
                return gotoFlow("flowAsistencia"); // Redirige al submenú de asistencia
            case "3":
                return gotoFlow("flowOtros"); // Redirige al submenú de otros
            case "4":
                return gotoFlow("flowAcademia"); // Redirige al submenú de academia
            case "5":
                return gotoFlow("flowChatGPT"); // Redirige al submenú de ChatGPT
            case "6":
                return fallBack ("Gracias por utilizar el servicio. ¡Hasta luego!");
            default:
                return fallBack("Opción no válida. Por favor selecciona una de las opciones del 1 al 5.");
        }
    }
);

// Flujo principal que da la bienvenida al usuario y presenta el menú
const flowPrincipal = addKeyword(["hola", "ole", "alo"]).addAnswer(
    "🙌 ¡Hola! 👋 Bienvenido a tu asistente de archivos *EducAPP*. Estoy aquí para ayudarte, escribe *MENU* para conocer nuestras opciones:",
    null,
    null,
    [menuFlow, flowFormatos, flowAsistencia, flowOtros, flowAcademia, flowChatGPT] // Incluye el menú principal y submenús
);

// Función principal que inicia el bot
const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: 'mongodb+srv://mariaestradav:26R44FT4aM34kDa@cluster0.lvvtz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        dbName: "EducAPP"
    });
    const adapterFlow = createFlow([flowPrincipal, menuFlow, flowFormatos, flowAsistencia, flowOtros, flowAcademia, flowChatGPT]);
    const adapterProvider = createProvider(BaileysProvider);
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

// Ejecuta el bot
main();
