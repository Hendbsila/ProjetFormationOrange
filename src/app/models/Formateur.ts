import { Session } from "./Session";

export class Formateur {
  
    constructor(
      public id: string,
      public nom: string,
      public prenom: string,
      public cin:number,
      public profession: string,
      public sessions:[Session]   
       ) {

  }
}