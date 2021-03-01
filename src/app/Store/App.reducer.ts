import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/Store/shoppingList.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
}

export const AppReducer: ActionReducerMap<any> = {
  shoppingList: fromShoppingList.ShoppingListReducer,
};
