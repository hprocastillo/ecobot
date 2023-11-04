import {Component} from '@angular/core';
import {Trash} from "../../interfaces/trash";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent {
  trash: Trash[] = [
    {
      id: 0,
      type: "red",
      description: "Pilas gastadas",
      imageUrl: "./assets/images/trash/red/batteries.png"
    },
    {
      id: 1,
      type: "red",
      description: "Botella insecticida",
      imageUrl: "./assets/images/trash/red/gas.png"
    },
    {
      id: 2,
      type: "red",
      description: "Foco roto",
      imageUrl: "./assets/images/trash/red/light.png"
    },
    {
      id: 3,
      type: "red",
      description: "Medicinas usadas/vencidas",
      imageUrl: "./assets/images/trash/red/medicines.png"
    },
    {
      id: 4,
      type: "red",
      description: "Aparatos electrónicos",
      imageUrl: "./assets/images/trash/red/tech.png"
    },
    {
      id: 5,
      type: "black",
      description: "Cigarros / Colillas",
      imageUrl: "./assets/images/trash/black/cigarrete.png"
    },
    {
      id: 6,
      type: "black",
      description: "Pañal sucio",
      imageUrl: "./assets/images/trash/black/diaper.png"
    },
    {
      id: 7,
      type: "black",
      description: "Popo de perro",
      imageUrl: "./assets/images/trash/black/pup.png"
    },
    {
      id: 8,
      type: "black",
      description: "Papel de baño",
      imageUrl: "./assets/images/trash/black/toilet-paper.png"
    },
    {
      id: 9,
      type: "black",
      description: "Plumas de aves",
      imageUrl: "./assets/images/trash/black/feathers.png"
    },
    {
      id: 10,
      type: "brown",
      description: "Manzana mordida",
      imageUrl: "./assets/images/trash/brown/apple.png"
    },
    {
      id: 11,
      type: "brown",
      description: "Cascara de platano",
      imageUrl: "./assets/images/trash/brown/banana.png"
    },
    {
      id: 12,
      type: "brown",
      description: "Pan podrido",
      imageUrl: "./assets/images/trash/brown/bread.png"
    },
    {
      id: 13,
      type: "brown",
      description: "Hamburguesa mordida",
      imageUrl: "./assets/images/trash/brown/burger.png"
    },
    {
      id: 14,
      type: "brown",
      description: "Restos de comida",
      imageUrl: "./assets/images/trash/brown/food.png"
    },
    {
      id: 15,
      type: "brown",
      description: "Pasto",
      imageUrl: "./assets/images/trash/brown/grass.png"
    },
    {
      id: 16,
      type: "red",
      description: "Botella rota",
      imageUrl: "./assets/images/trash/green/glass-bottle.png"
    },
    {
      id: 17,
      type: "green",
      description: "Caja de carton",
      imageUrl: "./assets/images/trash/green/box.png"
    },
    {
      id: 18,
      type: "green",
      description: "Vaso descartable",
      imageUrl: "./assets/images/trash/green/coke.png"
    },
    {
      id: 19,
      type: "green",
      description: "Lata de aluminio",
      imageUrl: "./assets/images/trash/green/drink.png"
    },
    {
      id: 20,
      type: "green",
      description: "Periodico viejo",
      imageUrl: "./assets/images/trash/green/newspaper.png"
    },
    {
      id: 21,
      type: "green",
      description: "Tablas de madera",
      imageUrl: "./assets/images/trash/green/wood.png"
    },
    {
      id: 22,
      type: "green",
      description: "Botella descartable",
      imageUrl: "./assets/images/trash/green/water-bottle.png"
    },
    {
      id: 23,
      type: "green",
      description: "Plastico",
      imageUrl: "./assets/images/trash/green/plastic.png"
    },
    {
      id: 24,
      type: "black",
      description: "Ropa vieja",
      imageUrl: "./assets/images/trash/black/clothes.png"
    },
    {
      id: 25,
      type: "green",
      description: "Ollas usadas",
      imageUrl: "./assets/images/trash/green/pans.png"
    },
    {
      id: 26,
      type: "red",
      description: "Envases de detergentes",
      imageUrl: "./assets/images/trash/red/detergent.png"
    },
    {
      id: 27,
      type: "red",
      description: "Envases de combustibles",
      imageUrl: "./assets/images/trash/red/oil.png"
    },
  ];
  trashRandomSelected: Trash[] = [];
  trashRecycledBlack: Trash[] = [];
  trashRecycledRed: Trash[] = [];
  trashRecycledGreen: Trash[] = [];
  trashRecycledBrown: Trash[] = [];
  trashDroppedBlack = {} as Trash;
  trashDroppedRed = {} as Trash;
  trashDroppedGreen = {} as Trash;
  trashDroppedBrown = {} as Trash;
  totalRecycles: number = 0;
  finishAlert: boolean = false;
  tokenSession: string = "";

  /* QUESTIONS AND ANSWER */
  questionRecycling: boolean = false;

  /* STATES && INTERACTION */
  systemSleeping: boolean = true;
  systemTalking: boolean = false;
  systemRecycling: boolean = false;
  robotTalking: boolean = false;
  robotMessage: string = "";
  robotState: string = "sleeping";

  /* BUTTON ICONS URL */
  trashCanUrl: string = "./assets/images/buttons/trash-can.png";
  exitUrl: string = "./assets/images/buttons/exit.png";
  wakeUpUrl: string = "./assets/images/buttons/interaction.png";

  constructor(public authService: AuthService) {
  }

  getRandomToken(): void {
    let characters: string = "ABCDEFGHYJKLMNOPQRSTUVWXYZ0123456789";
    for (let i: number = 0; i < 36; i++) {
      this.tokenSession += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  getReadMessage(message: string) {
    this.systemTalking = true;
    this.robotTalking = true;
    this.robotState = "talking";
    this.robotMessage = message;

    const speech = new SpeechSynthesisUtterance(message);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.4;
    speech.lang = 'es-Es';
    speechSynthesis.speak(speech);
  }

  getResetTrash() {
    this.trashDroppedBlack = {} as Trash;
    this.trashDroppedRed = {} as Trash;
    this.trashDroppedGreen = {} as Trash;
    this.trashDroppedBrown = {} as Trash;
  }

  getRandomTrash() {
    this.getResetTrash();
    this.trash = [...this.trash].sort(() => 0.5 - Math.random());
    this.trashRandomSelected = this.trash.slice(0, 5);
  }

  getWelcome(): void {
    this.systemSleeping = false;
    this.getReadMessage("Hola, Bienvenido o Bienvenida");

    setTimeout(() => {
      this.robotState = "smiling";
    }, 3000);

    setTimeout(() => {
      this.getReadMessage("¿Deseas reciclar basura?");
    }, 4000);

    setTimeout(() => {
      this.questionRecycling = true;
      this.robotState = "smiling";
    }, 6500);
  }

  getRecycling(response: string) {
    if (response === "yes") {
      this.getRandomToken();
      this.getReadMessage("Para reciclar dale clic al botón Seleccionar Basura.");

      setTimeout(() => {
        this.robotState = "smiling";
      }, 4000);

      setTimeout((): void => {
        this.systemRecycling = true;
        this.getReadMessage("luego arrastra la basura hacia el tacho correspondiente.");
      }, 5000);

      setTimeout(() => {
        this.robotState = "smiling";
        this.robotTalking = false;
      }, 9000);
    } else {
      this.getFinish();
    }
    this.questionRecycling = false;
  }

  getTotalRecycles(total: number) {
    this.totalRecycles = total;
  }

  getFinish() {
    this.getResetTrash();
    this.trashRandomSelected = [];
    this.finishAlert = true;
    this.tokenSession = "";
    this.systemRecycling = false;

    if (this.totalRecycles > 0) {
      this.getReadMessage("Has reciclado " + this.totalRecycles + " artículos hoy.");

      setTimeout(() => {
        this.getReadMessage("Gracias por reciclar.");
        this.robotState = "happy"
      }, 4000);

      setTimeout(() => {
        this.systemTalking = false;
        this.robotTalking = false;
        this.systemSleeping = true;
        this.robotState = "sleeping"
      }, 7000);

    } else {

      this.getReadMessage("Vuelve pronto.");

      setTimeout(() => {
        this.robotState = "confirm";
      }, 1500);

      setTimeout(() => {
        this.robotState = "sleeping"
        this.systemTalking = false;
        this.robotTalking = false;
        this.systemSleeping = true;
      }, 5000);
    }
  }

  dropBlack(event: CdkDragDrop<Trash[]>) {
    this.getResetTrash();

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.trashDroppedBlack = event.container.data[0];
      if (this.trashDroppedBlack.type === "black") {
        this.getReadMessage("Bien hecho!");

        setTimeout((): void => {
          this.robotState = "confirm"
        }, 600);

        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "smiling"
        }, 3000);

      } else {
        this.getReadMessage("Tacho equivocado. Esa basura no corresponde ahi!");
        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "angry"
        }, 4000);
      }
    }
  }

  dropRed(event: CdkDragDrop<Trash[]>) {
    this.getResetTrash();

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.trashDroppedRed = event.container.data[0];
      if (this.trashDroppedRed.type === "red") {
        this.getReadMessage("Bien hecho!");

        setTimeout((): void => {
          this.robotState = "confirm"
        }, 600);

        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "smiling"
        }, 3000);

      } else {
        this.getReadMessage("Tacho equivocado. Esa basura no corresponde ahi!");
        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "angry"
        }, 4000);
      }
    }
  }

  dropGreen(event: CdkDragDrop<Trash[]>) {
    this.getResetTrash();

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.trashDroppedGreen = event.container.data[0];
      if (this.trashDroppedGreen.type === "green") {
        this.getReadMessage("Bien hecho!");

        setTimeout((): void => {
          this.robotState = "confirm"
        }, 600);

        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "smiling"
        }, 3000);

      } else {
        this.getReadMessage("Tacho equivocado. Esa basura no corresponde ahi!");
        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "angry"
        }, 4000);
      }
    }
  }

  dropBrown(event: CdkDragDrop<Trash[]>) {
    this.getResetTrash();

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.trashDroppedBrown = event.container.data[0];
      if (this.trashDroppedBrown.type === "brown") {
        this.getReadMessage("Bien hecho!");

        setTimeout((): void => {
          this.robotState = "confirm"
        }, 600);

        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "smiling"
        }, 3000);

      } else {
        this.getReadMessage("Tacho equivocado. Esa basura no corresponde ahi!");
        setTimeout((): void => {
          this.robotTalking = false;
          this.robotState = "angry"
        }, 4000);
      }
    }
  }

  drop(event: CdkDragDrop<Trash[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
