import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Minatozaki Sana';
  username:string= "MinaTozakI SaNa";
  numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.5;
  date: Date = new Date();
  show:boolean=true;
  idiom: string = 'es';
  videoURL:string= 'https://www.youtube.com/embed/tgbNymZ7vqY';
  valPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Data arrived');
    }, 4500);
  });

  driver = {
    name: 'John',
    age: 30,
    carInfo: {
      model: 'Fiat 500',
      color: 'Green',
      doors: 3,
      motor: 1.4
    }

  };


}
