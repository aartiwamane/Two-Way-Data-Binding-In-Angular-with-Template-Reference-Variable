import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name : string = "";

  public Value : any;

  public Findlen(No : any)
  {
    this.Value = this.Name.length;
  }
}
