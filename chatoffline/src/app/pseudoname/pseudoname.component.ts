import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pseudoname',
  templateUrl: './pseudoname.component.html',
  styleUrls: ['./pseudoname.component.css']
})
export class PseudonameComponent implements OnInit {
pseudo:string="";
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("pseudo")!=null)
    {
      window.location.replace("messages");

    }
  }
  login()
  {
    localStorage.setItem("pseudo",this.pseudo); // créer un paramétre pseudo
    window.location.replace("messages");

  }

}
