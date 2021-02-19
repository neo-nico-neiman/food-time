import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient( 'Ribs', 2, 'kg' ),
    new Ingredient( 'Chorizo', 1, 'kg' ),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  newValueAdded(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onDeleteOrClear( remove: 'last' | 'all' ): void {
    if ( remove === 'last' ) {
      this.ingredients.pop();
      this.ingredientsChanged.next(this.ingredients.slice());
    } else {
      this.ingredients.length = 0;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  addIngredients( ingredients: Ingredient[] ): void{
    this.ingredients.push( ... ingredients );
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
