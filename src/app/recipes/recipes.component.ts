import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes/recipe";
import { RecipesListComponent } from '../recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
@Component({
  moduleId: module.id,
  selector: 'np-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
recipeSelected: Recipe;
selectedRecipe: Recipe;
  constructor() { }
  ngOnInit() {
  }
}
