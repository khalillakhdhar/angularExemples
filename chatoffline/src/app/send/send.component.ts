import { Component, OnInit } from '@angular/core';
import { Message } from '../classes/message';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
message="";
messages:Message[]=[];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("pseudo")==null)
    {
      window.location.replace("");

    }

  }
  sendmessage()
    {
      let msg=new Message(this.message);
      this.messages.push(msg);
      this.message="";
      console.log("liste des messages",this.messages);
    }

}
