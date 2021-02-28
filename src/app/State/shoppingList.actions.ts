import {Action} from '@ngrx/store';
import {Ingredient} from '../shared/ingredients.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const DELETE_ALL_INGREDIENTS = 'DELETE_ALL_INGREDIENTS';
export const ADD_TO_LIST = 'ADD_TO_LIST';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor( public payload: Ingredient ) {}
}

export class AddToIngredientsList implements Action {
  readonly type = ADD_TO_LIST;
  constructor( public payload: Ingredient[] ) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class DeleteAllIngredients implements Action {
  readonly type = DELETE_ALL_INGREDIENTS;
}

export type ShoppingListActions = AddIngredient | AddToIngredientsList | DeleteAllIngredients | DeleteIngredient;
