import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './notFound/not-found.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NewRecipeComponent} from './recipes/new-recipe/new-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: NewRecipeComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
