import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import {ShoppingListService} from './shoopingList.service';
import {RecipesService} from '../recipes/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsObs: Subscription;
  constructor( private shoppingListService: ShoppingListService, private re: RecipesService ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsObs = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredient: Ingredient[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientsObs.unsubscribe();
  }
}
