export class Session {
  
    constructor(
      public id: string,
      public date: Date,
      public duration:string,
      public enroledUsers:[],
      public formation:string,
      public prix:number,
      public heureprix:number,
      public sessionStatus:boolean
    ) {

  }
}