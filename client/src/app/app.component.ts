import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: string[] = [];

  
  addCards(): void {
    let num1 = ((document.getElementById("numberOfCards") as HTMLInputElement).value);

    for(var i = 0; i < Number(num1); i++){
      this.list[i] = 'down';
    }
  }


  //solution using forEach
  setPosition(index: number): void {
    this.list[index] = 'up';
    this.list.forEach((value, key) => {
      if(key != index) {
        this.list[key] = 'down';
      }
    });
  }



}
