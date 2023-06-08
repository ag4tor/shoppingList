import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectRecipe = new EventEmitter<Recipe>();

  //tolta per sostituzione servizi
  // recipes:Recipe[] = [
  //   new Recipe("recipe 1", "first description", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"),
  //   new Recipe("recipe 2", "second description", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg")
  // ];

  /* inserito per servizi */
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route })
  }



  /* fine parte servizi */

  // onSelectRecipe(recipe:Recipe){
  //   this.selectRecipe.emit(recipe);
  // }

}
