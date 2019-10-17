import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // Using inline html is good only for small code the template is single only so string type would suffice
  templateUrl: './app.component.html',            
  
  //in an array so that 2 or more style sheets can be added 
  styleUrls: ['./app.component.css']              
  
})
export class AppComponent {

  // Type casting should be done to prevent errors and warnings
  title: string = 'Product List';
}
