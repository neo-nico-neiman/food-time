import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: {name: string, description: string, ingredients: string };
  constructor() { }

  ngOnInit(): void {
  }

  assignRecipe(data){
    this.selectedRecipe = {
      name: data.name,
      description: data.description,
      ingredients: data.ingredients,
    }
  }
}
