import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shoopingList.service';

@Injectable({providedIn: 'root'})
export class RecipesService {
  constructor( private shoppingListService: ShoppingListService ) {}
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
    return this.recipes.slice();
  }

  onSelectRecipe(recipe: Recipe): void{
    this.selectedRecipe = recipe;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients( ingredients );
  }
}
