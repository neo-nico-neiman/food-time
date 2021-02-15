import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient( 'Rib Eye', 2 ),
    new Ingredient( 'Tomatoes', 5 ),
  ];

  newValueAdded(data: Ingredient): void{
    this.ingredients.push(
      new Ingredient(data.name, data.amount)
    );
  }

  onDeleteOrClear( remove: 'last' | 'all' ): void {
    if ( remove === 'last' ) {
      this.ingredients.pop();
    } else {
      this.ingredients.length = 0;
    }
  }
}
