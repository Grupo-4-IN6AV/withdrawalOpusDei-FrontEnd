import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-organizer',
  templateUrl: './body-organizer.component.html',
  styleUrls: ['./body-organizer.component.css']
})
export class BodyOrganizerComponent implements OnInit {

  //Variables de TypeScript//
  user : any;

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  ngOnInit(): void {}

  constructor(){}

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 480) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 480 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
  
  logOut(){
    localStorage.clear(); 
    window.location.replace('/login')
  }

}
