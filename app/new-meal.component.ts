import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meals.model';

@Component({
  selector: 'new-meal',
  template: `
  <h2>New Meal:</h2>
  <div>
  <label>What Did You Have To Eat?</label>
  <input #newFoodName />
  <label>Details of your Meal?</label>
  <input #newFoodDetails />
  <label>How Many Calories?</label>
  <input #newFoodCalories type="number" />
  <button (click)="submitNewMeal(newFoodName.value, newFoodDetails.value, newFoodCalories.value);">Add to List!</button>
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
