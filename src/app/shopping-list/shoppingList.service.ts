import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('cose ', 5),
        new Ingredient('cose', 2)

    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    listChanged = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient:Ingredient){

        this.ingredients.push(ingredient);
        this.listChanged.emit(this.ingredients.slice());

    }

    addIngredients(ingredients:Ingredient[]){
        console.log("[sl-service] adding ingredients", ingredients)
        this.ingredients.push(...ingredients);
        console.log("[sl-service] added ingredients", this.ingredients)
        this.listChanged.emit(this.ingredients.slice());

    }


}