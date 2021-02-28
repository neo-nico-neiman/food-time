import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onNew(): void {
    this.router.navigate(['/recipes', 'new'] );
  }
}
