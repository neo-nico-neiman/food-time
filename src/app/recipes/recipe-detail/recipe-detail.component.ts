import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;
  constructor( private recipesService: RecipesService,
               private routes: ActivatedRoute,
               private router: Router ) {}

  ngOnInit(): void {
    this.id = + this.routes.snapshot.params.id;
    this.selectedRecipe = this.recipesService.getRecipe( this.id );
    this.routes.params
      .subscribe(
        (param: Params) => {
          this.id = + param.id;
          this.selectedRecipe = this.recipesService.getRecipe( this.id );
        }
      );
  }

  addToShoppingList(): void {
    this.recipesService.addToShoppingList(this.selectedRecipe.ingredients);
  }

  onEdit(): void {
    this.router.navigate(['/recipes', this.id, 'edit'] );
  }
}
