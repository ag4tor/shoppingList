import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  /* nascosto per servizi */
  // ingredients:Ingredient[] = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',2)

  // ];

  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.listChanged.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
      console.log("[SL-component] recivet that ingredietns", newIngredients);
    });
  }



  addItemHandler(newIngredient: Ingredient) {

    this.ingredients.push(newIngredient);

  }

}
