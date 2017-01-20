import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meals.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="editMeal">
      <h3>{{childSelectedMeal.name}}</h3>
      <h3>Edit Meal:</h3>
      <div>
      <label>Name: </label>
      <input [(ngModel)]="childSelectedMeal.name" />
      </div>
      <div>
      <label>Meal Details: </label>
      <input [(ngModel)]="childSelectedMeal.details" />
      </div>
      <div>
      <label>Amount of Calories: </label>
      <input [(ngModel)]="childSelectedMeal.calories" />
      </div>
      <button (click)="doneChangingInfo()">Done-zo!</button>
    </div>
  `
})

export class EditMealComponent {
@Input() childSelectedMeal: Meal;
@Output() doneChangingButtonSender = new EventEmitter();

doneChangingInfo() {
  if (this.childSelectedMeal.name === "" || this.childSelectedMeal.details === "" || !this.childSelectedMeal.calories) {
    alert("Hey! Don't be trying to break things or be unthurough! Fill everything out!");
  } else {
    this.doneChangingButtonSender.emit();
  }
}
}
