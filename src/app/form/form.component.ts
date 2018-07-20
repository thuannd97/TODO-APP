import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contents: string[];
  error: boolean;

  constructor() { }

  ngOnInit() {
    this.contents = [];
    this.error = false;
  }

  add(value: string): void{
    if(this.checkDuplicate()){
      this.contents.push(value);
    } else{
      this.error = true;
    }
  }

  remove(num: number): void{
    this.contents.splice(num, 1);
  }

  checkDuplicate():boolean{
    var counts = [];
    for(var i = 0; i < this.contents.length; i++){
      if(counts[this.contents[i]] === undefined){
        counts[this.contents[i]] = 1;
      } else{
        return false;
      }
    }
    return true;
  }

}
