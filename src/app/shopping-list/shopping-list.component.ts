import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient( 'Rib Eye', 2 ),
    new Ingredient( 'Tomatoes', 5 ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  newValueAdded(data){
    this.ingredients.push(
      new Ingredient(data.name, data.amount)
    );
  }

  onDeleteOrClear(data: { remove: 'last' | 'all' }) {
    if( data.remove === 'last' ) {
      this.ingredients.pop();
    } else {
      this.ingredients = [];
    }
  }

}
