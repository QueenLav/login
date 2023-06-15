import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-board',
  templateUrl: './welcome-board.component.html',
  styleUrls: ['./welcome-board.component.css']
})
export class WelcomeBoardComponent {

  public name: any;

  constructor(){

    this.name = sessionStorage.getItem('name');

  }

}
