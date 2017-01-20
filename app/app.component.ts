import { Component } from '@angular/core';
import { Meal } from './meals.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <meal-list [childMealList]="masterMealList" (clickSender)="selectAMeal($event)"></meal-list>
    <new-meal (newMealSendToFront)="addMeal($event)"></new-meal>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneChangingButtonSender)="doneEditingForNow()"></edit-meal>
  </div>
`
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('Burger', 'Super tasty cheeseburger with avacado from Killer Burger', 850),
    new Meal('Chicken and Rice Soup', 'Good soup, needed more sodium!', 140),
    new Meal('Chocolate Bar', 'Yum! Dark Chocolate with pretzel pieces in it', 300)
  ];

  selectedMeal = null;

  addMeal(theNewAddedMealToBe) {
    this.masterMealList.push(theNewAddedMealToBe);
  }

  selectAMeal(clickedAMeal) {
    this.selectedMeal = clickedAMeal;
  }

  doneEditingForNow() {
    this.selectedMeal = null;
  }
}
