import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { Ingredient } from '../../shared/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  name = '';
  description = '';
  ingredients: Ingredient[] = [];
  imagePath = '';

  constructor( private routes: ActivatedRoute,
               private recipeService: RecipesService ) { }

  ngOnInit(): void {
    this.routes.params
      .subscribe(
        (params: Params) => {
          this.id = + params.id;
          this.editMode = !!params.id;
          if (!!this.editMode) {
            this.name = this.recipeService.getRecipe(this.id).name;
            this.description = this.recipeService.getRecipe(this.id).description;
            this.ingredients = this.recipeService.getRecipe(this.id).ingredients;
            this.imagePath = this.recipeService.getRecipe(this.id).imagePath;
          }
        }
      );
  }

  onSave(): void {
    const recipe: Recipe = new Recipe( this.name, this.description, this.imagePath, this.ingredients);
    this.recipeService.getRecipes()[this.id] = recipe;
  }

}
