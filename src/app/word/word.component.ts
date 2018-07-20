import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  value: number;
  handsome: boolean;

  color: string;
  fontSize: number;

  isBordered: boolean;
  classesObj: Object;
  classList: string[];

  cities: string[];
  people: object[];
  peopleByCity: Object[];

  constructor() { 
    this.value = 1;
    this.handsome = false;
  }

  ngOnInit() {
    this.isBordered = true;
    this.classList=['blue', 'round'];
    this.toogleBorder();
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' }, 
      { name: 'John', age: 12, city: 'Miami' }, 
      { name: 'Peter', age: 22, city: 'New York' } 
    ]
    this.peopleByCity = [
      {city: 'Miami',
        people: [
          {name:'john', age: 12},
          {name:'Angel', age: 22}
        ]
      },
      {city: 'NYC',
        people: [
          {name:'john', age: 12},
          {name:'Angel', age: 22},
          {name:'john', age: 12}
        ]
      }
    ]
  }

  toogleBorder(): void{
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    }
  }

  cong(): void{
    this.value += 1;
  }

  tru(): void{
    this.value -= 1;
  }

  myFunc(): boolean{
    this.handsome = !this.handsome;
    return this.handsome;
  }

  apply(color: string, fontSize: number): void{
    this.color = color;
    this.fontSize = fontSize;
  }

}
