import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  // @Input() recipe:Recipe;
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router:Router) { }

  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    }
    )
  }

  onEditRecipe(){

    this.router.navigate(['edit'],{relativeTo:this.route})

  }

  onAddToSL() {

    console.log("partito")
    this.recipeService.addToSL(this.recipe.ingredients.slice());

  }



}
