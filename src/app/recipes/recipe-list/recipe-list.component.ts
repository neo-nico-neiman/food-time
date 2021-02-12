import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<{
    name: string,
    description: string,
    ingredients: string[],
    imagePath: string,
  }>();
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

  constructor() { }

  ngOnInit(): void {
    this.recipeWasSelected.emit({
      name: this.recipes[0].name,
      description: this.recipes[0].description,
      ingredients: this.recipes[0].ingredients,
      imagePath: this.recipes[0].imagePath,
    })
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit({
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.ingredients,
      imagePath: recipe.imagePath,
    })
  }
}
