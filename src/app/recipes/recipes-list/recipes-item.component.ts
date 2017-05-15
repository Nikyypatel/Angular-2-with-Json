import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  moduleId: module.id,
  selector: 'np-recipes-item',
  templateUrl: './recipes-item.component.html'
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() {}

  ngOnInit() {
  }

}

