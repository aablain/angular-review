import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meals.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="radio" (change)="onChange($event.target.value)">
  <label>
    <input type="radio" name="flavor" value="allFood" checked>
    All Food
  </label>
  <label>
    <input type="radio" name="flavor" value="belowAmount">
    Below 500 Calories
  </label>
  <label>
    <input type="radio" name="flavor" value="aboveAmount">
    Above 500 Calories
  </label>
</div>
<div class="holdTheTiles">
  <div *ngFor="let currentMeal of childMealList | calories:filterByCalories" (click)="mealToNowEdit(currentMeal)" class="mealTile">
    <h1>{{currentMeal.name}}</h1>
    <p>{{currentMeal.details}}</p>
    <h4>{{currentMeal.calories}} calories</h4>
  </div>
</div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allFood";

  onChange(filterChoice) {
    this.filterByCalories = filterChoice;
  }

  mealToNowEdit(mealThatIsSelected: Meal) {
    this.clickSender.emit(mealThatIsSelected);
  }

}
