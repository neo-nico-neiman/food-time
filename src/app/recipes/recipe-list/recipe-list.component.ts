import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'Asado Argentino',
      'The authentic method',
      'https://asadordecarne.net/wp-content/uploads/2020/03/asado-argentino-costillitas-de-vacuno-a-la-parrilla.jpg'
    ),
    new Recipe( 'Empanadas',
      'Meet, Chicken and Mondongo',
      'https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/1:1/w_2560%2Cc_limit/argentinian-beef-empanadas.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
