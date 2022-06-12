export class Message {

  texte?:string="";
  pseudo: string | null;
  date: number;
  constructor(texte?:string)
  {
    this.pseudo=localStorage.getItem("pseudo");
    this.date=Date.now();
   this.texte=texte
  }
}
