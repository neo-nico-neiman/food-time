import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import * as ShoppingListActions from '../shopping-list/Store/shoppingList.actions';
import * as ShoppingListReducer from '../shopping-list/Store/shoppingList.reducer';

@Injectable({providedIn: 'root'})
export class RecipesService {
  constructor( private store: Store<{ shoppingList: ShoppingListReducer.State}> ) {}
  private recipes: Recipe[] = [
    new Recipe( 'Asado Argentino',
      'The authentic method',
      'https://asadordecarne.net/wp-content/uploads/2020/03/asado-argentino-costillitas-de-vacuno-a-la-parrilla.jpg',
      [
        new Ingredient( 'Picaña', 1, 'kg' ),
        new Ingredient( 'Salt a bit', 5, 'gr' ),
        new Ingredient(  'Pepper', 3, 'gr' )
      ]
    ),
    new Recipe( 'Empanadas',
      'Meet, Chicken and Mondongo',
      'https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/1:1/w_2560%2Cc_limit/argentinian-beef-empanadas.jpg',
      [
        new Ingredient( 'Knife chopped Meat', 1, 'kg' ),
        new Ingredient( 'Salt a bit', 5, 'gr' ),
        new Ingredient(  'Pepper', 3, 'gr' )
      ]
    ),
  ];

  selectedRecipe: Recipe = this.recipes[0];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    if ( id + 1 > this.recipes.length ) {
      return this.selectedRecipe;
    }
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]): void {
    this.store.dispatch( new ShoppingListActions.AddToIngredientsList( ingredients ) );
  }
}
