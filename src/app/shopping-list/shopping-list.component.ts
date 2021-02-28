import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredients.model';
import * as ShoppingListReducer from '../State/shoppingList.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<{ ingredients: Ingredient[] }>;
  ingredientsObs: Subscription;
  constructor( private store: Store<{ shoppingList: ShoppingListReducer.State }> ) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select( 'shoppingList' );
  }
}
