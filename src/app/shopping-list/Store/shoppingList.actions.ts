import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredients.model';

const NAMESPACE = '[Shopping List]';
export const ADD_INGREDIENT = `${NAMESPACE} Add Ingredient`;
export const DELETE_INGREDIENT = `${NAMESPACE} Delete Ingredient`;
export const DELETE_ALL_INGREDIENTS = `${NAMESPACE} Delete All Ingredient`;
export const ADD_TO_LIST = `${NAMESPACE} Add To List`;

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
