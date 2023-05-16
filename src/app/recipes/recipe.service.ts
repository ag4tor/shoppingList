import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService{
    recipes:Recipe[] = [
        new Recipe("recipe 1", "first description", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",[
          new Ingredient("patate",2),
          new Ingredient("pomodori",1)

        ]),
        new Recipe("recipe 2", "second description", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",[
          new Ingredient("cipolle",2),
          new Ingredient("insalata",4)
        ])
      ];

      constructor( private slService:ShoppingListService ){}
      recipeSelected = new EventEmitter<Recipe>();


      addToSL(ingredients:Ingredient[]){
        console.log("[recipe-service] recived", ingredients);
        this.slService.addIngredients(ingredients);
      }


}