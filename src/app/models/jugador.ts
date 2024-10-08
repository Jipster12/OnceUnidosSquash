export class Jugador {
    nombre: string="";
    apellido: string="";
    telefono: string="";
    categoria: string="";
    nivel: string="";
    descripcion: string="";

    constructor(nombre:string,apellido:string,categoria:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.categoria=categoria;   
    };
}

export const jugadores: Jugador[] = [
    {nombre: "Ana", apellido: "Martínez", telefono: "444-555-666", categoria: "D", nivel: "Principiante", descripcion: "Gran resistencia"},
    {nombre: "Pedro", apellido: "González", telefono: "222-333-444", categoria: "A", nivel: "Principiante", descripcion: "Jugador defensivo"},
    {nombre: "Marta", apellido: "López", telefono: "555-123-456", categoria: "B", nivel: "Intermedio", descripcion: "Jugadas sorpresivas"},
    {nombre: "Marta", apellido: "López", telefono: "444-555-666", categoria: "A", nivel: "Intermedio", descripcion: "Jugador agresivo"},
    {nombre: "José", apellido: "Martínez", telefono: "444-555-666", categoria: "B", nivel: "Avanzado", descripcion: "Jugadas sorpresivas"},
    {nombre: "Juan", apellido: "Pérez", telefono: "444-555-666", categoria: "D", nivel: "Principiante", descripcion: "Gran resistencia"},
    {nombre: "Elena", apellido: "Fernández", telefono: "123-456-789", categoria: "C", nivel: "Avanzado", descripcion: "Jugador agresivo"},
    {nombre: "Luis", apellido: "González", telefono: "222-333-444", categoria: "C", nivel: "Principiante", descripcion: "Jugador defensivo"},
    {nombre: "Ana", apellido: "Rodríguez", telefono: "123-456-789", categoria: "B", nivel: "Principiante", descripcion: "Jugador defensivo"},
    {nombre: "Pedro", apellido: "Fernández", telefono: "222-333-444", categoria: "C", nivel: "Intermedio", descripcion: "Jugador defensivo"},
    {nombre: 'Juan', apellido: 'Pérez', telefono: '123456789', categoria: 'A', nivel: 'Avanzado', descripcion: 'Jugador experimentado en torneos locales.' },
    {nombre: 'Ana', apellido: 'Gómez', telefono: '987654321', categoria: 'B', nivel: 'Intermedio', descripcion: 'Aficionada a las competiciones de fin de semana.' },
    {nombre: 'Luis', apellido: 'Martínez', telefono: '111222333', categoria: 'A', nivel: 'Avanzado', descripcion: 'Entrenador de squash y jugador de alto nivel.' },
    {nombre: 'María', apellido: 'López', telefono: '333222111', categoria: 'C', nivel: 'Principiante', descripcion: 'Empezando en el mundo del squash, muy motivada.' },
    {nombre: 'Carlos', apellido: 'Rodríguez', telefono: '444333222', categoria: 'A', nivel: 'Avanzado', descripcion: 'Ganador de múltiples torneos regionales.' },
    {nombre: 'Laura', apellido: 'Sánchez', telefono: '555444333', categoria: 'B', nivel: 'Intermedio', descripcion: 'Jugadora con un estilo muy técnico.' },
    {nombre: 'Pedro', apellido: 'Fernández', telefono: '666555444', categoria: 'C', nivel: 'Principiante', descripcion: 'Recientemente empezó a jugar, pero con gran potencial.' },
    {nombre: 'Lucía', apellido: 'Ramírez', telefono: '777666555', categoria: 'A', nivel: 'Avanzado', descripcion: 'Excampeona nacional de squash.' },
    {nombre: 'Jorge', apellido: 'Torres', telefono: '888777666', categoria: 'B', nivel: 'Intermedio', descripcion: 'Jugando squash en su tiempo libre después del trabajo.' },
    {nombre: 'Sofía', apellido: 'Flores', telefono: '999888777', categoria: 'C', nivel: 'Principiante', descripcion: 'Le encanta aprender nuevas técnicas de squash.' },
    {nombre: 'Pablo', apellido: 'Gutiérrez', telefono: '101010101', categoria: 'A', nivel: 'Avanzado', descripcion: 'Competidor profesional y aficionado a la estrategia.' },
    {nombre: 'Andrea', apellido: 'Mendoza', telefono: '202020202', categoria: 'B', nivel: 'Intermedio', descripcion: 'Jugadora social con ganas de mejorar su juego.' },
    {nombre: 'Miguel', apellido: 'Herrera', telefono: '303030303', categoria: 'A', nivel: 'Avanzado', descripcion: 'Conocido por su velocidad y reflejos en la cancha.' },
    {nombre: 'Elena', apellido: 'Castro', telefono: '404040404', categoria: 'C', nivel: 'Principiante', descripcion: 'Acaba de unirse al club de squash, con muchas ganas de aprender.' },
    {nombre: 'David', apellido: 'Moreno', telefono: '505050505', categoria: 'B', nivel: 'Intermedio', descripcion: 'Tiene un estilo defensivo y busca mejorar en el ataque.' },
    {nombre: 'Natalia', apellido: 'Ruiz', telefono: '606060606', categoria: 'A', nivel: 'Avanzado', descripcion: 'Se destaca en torneos nacionales por su precisión.' },
    {nombre: 'Ricardo', apellido: 'Ortega', telefono: '707070707', categoria: 'C', nivel: 'Principiante', descripcion: 'Empezó a jugar por diversión con amigos, pero está progresando rápido.' },
    {nombre: 'Claudia', apellido: 'Vega', telefono: '808080808', categoria: 'B', nivel: 'Intermedio', descripcion: 'Le encanta competir de manera amistosa en torneos locales.' },
    {nombre: 'Roberto', apellido: 'García', telefono: '909090909', categoria: 'A', nivel: 'Avanzado', descripcion: 'Especialista en largos rallies y en mantener la resistencia.' },
    {nombre: 'Sandra', apellido: 'Navarro', telefono: '101010102', categoria: 'C', nivel: 'Principiante', descripcion: 'Le gusta practicar los fines de semana para mejorar su técnica.' },
    {nombre: 'Adrián', apellido: 'Ramos', telefono: '202020203', categoria: 'B', nivel: 'Intermedio', descripcion: 'Se esfuerza por ser más agresivo en su juego ofensivo.' },
    {nombre: 'Marta', apellido: 'Silva', telefono: '303030304', categoria: 'A', nivel: 'Avanzado', descripcion: 'Campeona en torneos regionales y conocida por su táctica.' },
    {nombre: 'Emilio', apellido: 'Pérez', telefono: '404040405', categoria: 'C', nivel: 'Principiante', descripcion: 'Practicando constantemente para avanzar a nivel intermedio.' },
    {nombre: 'Paula', apellido: 'Blanco', telefono: '505050506', categoria: 'B', nivel: 'Intermedio', descripcion: 'Le encanta la estrategia y juega partidas muy técnicas.' },
    {nombre: 'Héctor', apellido: 'Martín', telefono: '606060607', categoria: 'A', nivel: 'Avanzado', descripcion: 'Siempre en el top de los torneos locales de squash.' },
    {nombre: 'Verónica', apellido: 'Romero', telefono: '707070708', categoria: 'C', nivel: 'Principiante', descripcion: 'Disfruta aprender nuevos golpes y técnicas cada semana.' },
    {nombre: 'Francisco', apellido: 'Ortiz', telefono: '808080809', categoria: 'B', nivel: 'Intermedio', descripcion: 'Jugador apasionado que ha progresado mucho en los últimos meses.' },
    {nombre: 'Lorena', apellido: 'Delgado', telefono: '909090910', categoria: 'A', nivel: 'Avanzado', descripcion: 'Destaca por su juego de pies rápido y su capacidad de recuperación.' },
    {nombre: 'Tomás', apellido: 'Cruz', telefono: '101010103', categoria: 'C', nivel: 'Principiante', descripcion: 'Jugador entusiasta que disfruta las partidas con amigos.' },
    {nombre: 'Carmen', apellido: 'Aguilar', telefono: '202020204', categoria: 'B', nivel: 'Intermedio', descripcion: 'Jugadora dedicada que ha subido de nivel rápidamente.' }
];