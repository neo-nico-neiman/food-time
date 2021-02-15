import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe( 'Asado Argentino',
      'The authentic method',
      'https://asadordecarne.net/wp-content/uploads/2020/03/asado-argentino-costillitas-de-vacuno-a-la-parrilla.jpg',
      [ 'Meat 1kg', 'Salt a bit', 'Pepper not much']
    ),
    new Recipe( 'Empanadas',
      'Meet, Chicken and Mondongo',
      'https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/1:1/w_2560%2Cc_limit/argentinian-beef-empanadas.jpg',
      [ 'Knife chopped Meat 1kg', 'Salt a bit', 'Pepper not much']
    ),
  ];

  selectedRecipe: Recipe = this.recipes[0];

  onSelectRecipe(recipe: Recipe): void{
    this.selectedRecipe = recipe;
  }
}
