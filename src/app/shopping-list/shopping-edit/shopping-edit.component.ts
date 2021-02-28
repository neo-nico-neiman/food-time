import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredients.model';
import * as ShoppingListActions from '../../State/shoppingList.actions';
import * as ShoppingListReducer from '../../State/shoppingList.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild( 'nameInput', { static: false } ) nameInputRef: ElementRef;
  @ViewChild( 'amountInput', { static: false } ) amountInputRef: ElementRef;
  @ViewChild( 'unitInput', { static: false } ) unitInputRef: ElementRef;

  constructor( private store: Store<{ shoppingList: ShoppingListReducer.State}> ) {}

  onAddIngredients(): void {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
      this.unitInputRef.nativeElement.value
    );
    this.store.dispatch( new ShoppingListActions.AddIngredient( ingredient ) );
  }

  onDeleteIngredient(): void {
    this.store.dispatch( new ShoppingListActions.DeleteIngredient() );
  }
  onClearIngredients(): void {
    this.store.dispatch( new ShoppingListActions.DeleteAllIngredients() );
  }

}
