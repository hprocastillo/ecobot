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
      description: "Aceite de cocina",
      imageUrl: "./assets/images/trash/red/kitchen-oil.png"
    },
    {
      id: 1,
      type: "red",
      description: "Medicinas Usadas",
      imageUrl: "./assets/images/trash/red/medicines1.png"
    },
    {
      id: 2,
      type: "red",
      description: "Medicinas Vencidas",
      imageUrl: "./assets/images/trash/red/medicines2.png"
    },
    {
      id: 3,
      type: "red",
      description: "Botella de lejia",
      imageUrl: "./assets/images/trash/red/bleach.png"
    },
    {
      id: 4,
      type: "red",
      description: "Aceite de carro",
      imageUrl: "./assets/images/trash/red/black-oil.png"
    },
    {
      id: 5,
      type: "red",
      description: "Gasolina",
      imageUrl: "./assets/images/trash/red/car-oil.png"
    },
    {
      id: 6,
      type: "red",
      description: "Botella de veneno",
      imageUrl: "./assets/images/trash/red/poison.png"
    },
    {
      id: 7,
      type: "red",
      description: "Aerosol insecticida",
      imageUrl: "./assets/images/trash/red/insecticide.png"
    },
    {
      id: 8,
      type: "red",
      description: "Botellas de detergente",
      imageUrl: "./assets/images/trash/red/detergent.png"
    },
    {
      id: 9,
      type: "red",
      description: "Foco roto",
      imageUrl: "./assets/images/trash/red/broken-light-2.png"
    },
    {
      id: 10,
      type: "red",
      description: "Disco duro",
      imageUrl: "./assets/images/trash/red/harddrive.png"
    },
    {
      id: 11,
      type: "red",
      description: "Foco roto",
      imageUrl: "./assets/images/trash/red/broken-light-1.png"
    },
    {
      id: 12,
      type: "red",
      description: "Microondas roto",
      imageUrl: "./assets/images/trash/red/microwave-oven.png"
    },
    {
      id: 13,
      type: "red",
      description: "Televisor roto",
      imageUrl: "./assets/images/trash/red/electronic-device.png"
    },
    {
      id: 14,
      type: "red",
      description: "Pantalla rota",
      imageUrl: "./assets/images/trash/red/electronics.png"
    },
    {
      id: 15,
      type: "red",
      description: "Pantalla rota",
      imageUrl: "./assets/images/trash/red/e-waste.png"
    },
    {
      id: 16,
      type: "red",
      description: "Pilas gastadas",
      imageUrl: "./assets/images/trash/red/batteries-1.png"
    },
    {
      id: 17,
      type: "red",
      description: "Pilas gastadas",
      imageUrl: "./assets/images/trash/red/batteries-2.png"
    },
    {
      id: 18,
      type: "brown",
      description: "Verduras",
      imageUrl: "./assets/images/trash/brown/vegetable.png"
    },
    {
      id: 19,
      type: "brown",
      description: "Frutas",
      imageUrl: "./assets/images/trash/brown/fruits.png"
    },
    {
      id: 20,
      type: "brown",
      description: "Comida rancia",
      imageUrl: "./assets/images/trash/brown/stale-food.png"
    },
    {
      id: 21,
      type: "brown",
      description: "Comida rancia",
      imageUrl: "./assets/images/trash/brown/food4.png"
    },
    {
      id: 22,
      type: "brown",
      description: "Sandia",
      imageUrl: "./assets/images/trash/brown/watermelon.png"
    },
    {
      id: 23,
      type: "brown",
      description: "Huesos de pescado",
      imageUrl: "./assets/images/trash/brown/fish.png"
    },
    {
      id: 24,
      type: "brown",
      description: "Flores marchitas",
      imageUrl: "./assets/images/trash/brown/dead-flowers.png"
    },
    {
      id: 25,
      type: "brown",
      description: "Pasto",
      imageUrl: "./assets/images/trash/brown/grass.png"
    },
    {
      id: 26,
      type: "brown",
      description: "Carne podrida",
      imageUrl: "./assets/images/trash/brown/meat.png"
    },
    {
      id: 27,
      type: "brown",
      description: "Sobras de comida",
      imageUrl: "./assets/images/trash/brown/food3.png"
    },
    {
      id: 28,
      type: "brown",
      description: "Cascaras de huevo",
      imageUrl: "./assets/images/trash/brown/broken-eggs.png"
    },
    {
      id: 29,
      type: "brown",
      description: "Platano",
      imageUrl: "./assets/images/trash/brown/banana.png"
    },
    {
      id: 30,
      type: "brown",
      description: "Manzana podrida",
      imageUrl: "./assets/images/trash/brown/apple-waste.png"
    },
    {
      id: 31,
      type: "brown",
      description: "Pan rancio",
      imageUrl: "./assets/images/trash/brown/rotten.png"
    },
    {
      id: 32,
      type: "brown",
      description: "Hamburgesa rancia",
      imageUrl: "./assets/images/trash/brown/burger.png"
    },
    {
      id: 33,
      type: "brown",
      description: "Sobras de comida",
      imageUrl: "./assets/images/trash/brown/food2.png"
    },
    {
      id: 34,
      type: "brown",
      description: "Sobras de comida",
      imageUrl: "./assets/images/trash/brown/food1.png"
    },
    {
      id: 35,
      type: "green",
      description: "Caja Tetrapack",
      imageUrl: "./assets/images/trash/green/milk.png"
    },
    {
      id: 36,
      type: "green",
      description: "Silla de madera",
      imageUrl: "./assets/images/trash/green/chair.png"
    },
    {
      id: 37,
      type: "green",
      description: "Documentos",
      imageUrl: "./assets/images/trash/green/paper.png"
    },
    {
      id: 38,
      type: "green",
      description: "Periodicos",
      imageUrl: "./assets/images/trash/green/newspaper.png"
    },
    {
      id: 39,
      type: "green",
      description: "Ollas viejas",
      imageUrl: "./assets/images/trash/green/cooking-pot.png"
    },
    {
      id: 40,
      type: "green",
      description: "Sarten vieja",
      imageUrl: "./assets/images/trash/green/frying-pan.png"
    },
    {
      id: 41,
      type: "green",
      description: "Botella de vidrio",
      imageUrl: "./assets/images/trash/green/drink.png"
    },
    {
      id: 42,
      type: "green",
      description: "Lata de gaseosa",
      imageUrl: "./assets/images/trash/green/cola.png"
    },
    {
      id: 43,
      type: "green",
      description: "Cadenas de metal",
      imageUrl: "./assets/images/trash/green/chains.png"
    },
    {
      id: 44,
      type: "green",
      description: "Latas de conservas",
      imageUrl: "./assets/images/trash/green/metals.png"
    },
    {
      id: 45,
      type: "green",
      description: "Tablas de madera",
      imageUrl: "./assets/images/trash/green/wood.png"
    },
    {
      id: 46,
      type: "green",
      description: "Caja de carton",
      imageUrl: "./assets/images/trash/green/open-box.png"
    },
    {
      id: 47,
      type: "green",
      description: "Galon de plastico",
      imageUrl: "./assets/images/trash/green/broken-bottle.png"
    },
    {
      id: 48,
      type: "green",
      description: "Botella de plastico",
      imageUrl: "./assets/images/trash/green/plastic-bottle-1.png"
    },
    {
      id: 49,
      type: "green",
      description: "Botella de plastico",
      imageUrl: "./assets/images/trash/green/plastic-bottle-2.png"
    },
    {
      id: 50,
      type: "green",
      description: "Botella y vasos de plastico",
      imageUrl: "./assets/images/trash/green/plastic.png"
    },
    {
      id: 51,
      type: "green",
      description: "Lata de gaseosa",
      imageUrl: "./assets/images/trash/green/coke1.png"
    },
    {
      id: 52,
      type: "black",
      description: "Papel de baño",
      imageUrl: "./assets/images/trash/black/toilet-paper.png"
    },
    {
      id: 53,
      type: "black",
      description: "Plumas de aves",
      imageUrl: "./assets/images/trash/black/feather.png"
    },
    {
      id: 54,
      type: "black",
      description: "Papel toalla",
      imageUrl: "./assets/images/trash/black/tissue-paper.png"
    },
    {
      id: 55,
      type: "black",
      description: "Cigarros / Colillas",
      imageUrl: "./assets/images/trash/black/cigarrete.png"
    },
    {
      id: 56,
      type: "black",
      description: "Ropa vieja",
      imageUrl: "./assets/images/trash/black/clothes.png"
    },
    {
      id: 57,
      type: "black",
      description: "Toallitas humedas",
      imageUrl: "./assets/images/trash/black/tissue-box.png"
    },
    {
      id: 58,
      type: "black",
      description: "Pañal sucio",
      imageUrl: "./assets/images/trash/black/diaper.png"
    },
    {
      id: 59,
      type: "black",
      description: "Popo de perro",
      imageUrl: "./assets/images/trash/black/popo.png"
    }
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
