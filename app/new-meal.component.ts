import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meals.model';

@Component({
  selector: 'new-meal',
  template: `
  <h2 class="title">New Meal:</h2>
  <div class="newMeal">
    <div>
    <label>What Did You Have To Eat?</label>
    <input #newFoodName />
    </div>
    <div>
    <label>Details of your Meal?</label>
    <input #newFoodDetails />
    </div>
    <div>
    <label>How Many Calories?</label>
    <input #newFoodCalories type="number" />
    </div>
    <div>
    <button (click)="submitNewMeal(newFoodName.value, newFoodDetails.value, newFoodCalories.value);">Add to List!</button>
    </div>
  </div>
  `
})
 export class NewMealComponent {
   @Output() newMealSendToFront = new EventEmitter();

   submitNewMeal(name: string, details: string, calories: number) {
     var newMealToAdd = new Meal(name, details, calories);
     if (name === "" || details === "" || calories === undefined) {
       alert('fill out ALL the information please!');
     } else {
       this.newMealSendToFront.emit(newMealToAdd);
     }
   }
 }
