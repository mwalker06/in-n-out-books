/**
 * Title: app.component.ts
 * Author: Megan Walker
 * Date: 06/25/2023
 * description: app.component.ts file for in-n-out-books app
 * Source: Provided by Professor Krasso, Web 425 exercises
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books";
  }
}
