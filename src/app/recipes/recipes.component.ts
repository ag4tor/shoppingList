import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService:RecipeService){}
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe( (response:Recipe) => { this.recipeSelected = response});
  }

  recipeSelected: Recipe ;



  showRecipe( recipe:Recipe ){
    this.recipeSelected = recipe;
    console.log('sto mosntrando ', this.recipeSelected);
  }

}
