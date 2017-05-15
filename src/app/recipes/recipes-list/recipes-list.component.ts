import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesItemComponent } from './recipes-item.component';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'np-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
 recipe: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  constructor(private http: Http) { }
  ngOnInit() {
 //  this.getdata();
  }
  getdata() {
     return this.http.get("../assets/data.json").map(res => res.json()
      .map((data: Recipe) => new Recipe(data.name, data.description, data.imagePath)))
      .subscribe((data) => {
        this.recipe = data;
      });

  }
  onSelected(recipe: Recipe) {
   
    this.recipeSelected.emit(recipe);
  }
}
