import {Component, DoCheck} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements DoCheck {
  selectedRecipe: Recipe;
  constructor( private recipesService: RecipesService) { }

  ngDoCheck(): void {
    this.selectedRecipe = this.recipesService.selectedRecipe;
  }
}
