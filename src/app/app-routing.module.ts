import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { StartComponent } from "./recipes/recipe-detail/start/start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";


const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: StartComponent },
            { path:'new', component: RecipeNewComponent},
            { path: ':id', component: RecipeDetailComponent },
            { path:':id/edit' , component:RecipeEditComponent }
        ]
    },
    { path: 'shopping', component: ShoppingListComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {



}