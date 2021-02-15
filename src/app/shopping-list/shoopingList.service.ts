import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient( 'Ribs', 2, 'kg' ),
    new Ingredient( 'Chorizo', 1, 'kg' ),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  newValueAdded(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onDeleteOrClear( remove: 'last' | 'all' ): void {
    if ( remove === 'last' ) {
      this.ingredients.pop();
      this.ingredientsChanged.emit(this.ingredients.slice())
    } else {
      this.ingredients.length = 0;
      this.ingredientsChanged.emit(this.ingredients.slice())
    }
  }

  addIngredients( ingredients: Ingredient[] ){
    this.ingredients.push( ... ingredients );
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
