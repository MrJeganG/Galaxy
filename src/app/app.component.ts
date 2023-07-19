import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(private router: Router) {
  }


  ngOnInit(){

  }

  get(){
    this.router.navigate(['/game'])
  }
}
