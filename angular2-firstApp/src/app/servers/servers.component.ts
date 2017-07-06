import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test Server';
  serverCreated = false;
  constructor() {

    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit() {
  }


//Event Click
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created  ' + this.serverName ;
  }

//input Binding
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value

  }


}