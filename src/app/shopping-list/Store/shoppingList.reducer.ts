import * as shoppingListAction from './shoppingList.actions';
import { Ingredient } from '../../shared/ingredients.model';

const initialState: State = {
  ingredients: [
    new Ingredient('Pears', 2, 'kg'),
    new Ingredient('Cranberry', 1, 'kg'),
  ]
};

export interface State {
  ingredients: Ingredient[];
}

export function ShoppingListReducer(
  state: State = initialState,
  action: shoppingListAction.ShoppingListActions | any,
): object {
  switch ( action.type ) {
    case shoppingListAction.ADD_INGREDIENT:
      return ( {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload
          ]
      } );
    case shoppingListAction.ADD_TO_LIST:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...action.payload,
        ]
      };
    case shoppingListAction.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients.slice(0, state.ingredients.length - 1 )
        ]
      };
    case shoppingListAction.DELETE_ALL_INGREDIENTS:
      return {
        ...state,
        ingredients: []
      };
    default:
      return initialState;
  }
}
