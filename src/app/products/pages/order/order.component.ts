import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  public isUpperCase: boolean =false;
public orderBy? : keyof Hero ;
public heroes: Hero[]=[
{
  name:'superman',
  canFly:true,
  color:Color.blue,
},
{
  name:'batman',
  canFly:false,
  color:Color.black,
},
{
  name:'hulk',
  canFly:true,
  color:Color.green,
},
{
  name:'daredevil',
  canFly:false,
  color:Color.red ,
}
]

toggleUpperCase():void{
  this.isUpperCase=!this.isUpperCase;
}
changeOrder(value :keyof Hero){
  this.orderBy=value;

}
}
