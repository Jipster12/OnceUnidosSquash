export class Turno {
    idTurno:number;
    jugador1:string;
    jugador2:string;
    categoria:string;
    hora: string;
    fecha: string;
    color:string;

    constructor(id:number,j1:string,j2:string,horario:string,fecha:string,categoria:string){
        this.idTurno=id;
        this.jugador1=j1;
        this.jugador2=j2;
        this.hora=horario;
        this.fecha=fecha;
        this.categoria=categoria;
        this.color=this.getRandomColor();   
    }

    private usedColors: Set<string> = new Set();

    private getRandomColor(): string{
      if (colors.length === this.usedColors.size) {
        this.resetUsedColors();
        return "00ff00"
      }
  
      let color: string;
      do {
        const randomIndex = Math.floor(Math.random() * colors.length);
        color = colors[randomIndex];
      } while (this.usedColors.has(color));
  
      this.usedColors.add(color); // Añadir el color a la lista de usados
      return color;
    }
  
    private resetUsedColors(): void {
      this.usedColors.clear(); // Reinicia los colores usados si es necesario
    }
}

const colors: string[] = [
    "#FF5733", // Naranja
    "#33FF57", // Verde
    "#3357FF", // Azul
    "#FF33A6", // Rosa
    "#FFD700", // Dorado
    "#8A2BE2", // Violeta
    "#00FFFF", // Cian
    "#FF4500", // Rojo anaranjado
    "#ADFF2F", // Verde lima
    "#FF1493", // Rosa profundo
    "#4B0082", // Índigo
    "#20B2AA", // Verde azulado claro
    "#FF6347", // Tomate
    "#4682B4", // Azul acero
    "#D2691E", // Marrón
    "#32CD32", // Verde lima
    "#7FFFD4", // Aguamarina
    "#9400D3", // Púrpura oscuro
    "#FFB6C1", // Rosa claro
    "#8B0000", // Rojo oscuro
  ];
