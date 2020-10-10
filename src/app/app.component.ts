import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
//import { MatRadioButton } from '@angular/material/radio';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	// ...
  } from '@angular/animations';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
	trigger('myInsertRemoveTrigger', [
		transition(':enter', [
		  style({ opacity: 0, height: 0, margin: 0 }),
		  animate('1s', style({ opacity: 1, height: '*', margin: '*' })),
		]),
		transition(':leave', [
		  animate('1s', style({ opacity: 0, height: 0, margin: 0}))
		])
	  ]),
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  	materialForm: FormGroup;
  form = new FormGroup({
    food: new FormControl('lamb', this.onChange),
  });
  showIt = false;
  onInit()
  {
	  console.log('init');
	this.form.removeControl('food');//.disable();
  }
  onChange(x:any): ValidationErrors {
	//console.log('changed', x);
	return null;
  }
  onOptionChange(state:any): void{
//	console.log('changed', state);
	console.log('option', state.option);
	this.showIt = state.option === '2';
  }
  constructor(public fb: FormBuilder){
	  console.log("app ctor");
	  this.materialForm = this.fb.group({
		option:['1'],
		name: [''],
	  })
	  this.materialForm.valueChanges.subscribe(
		  form => this.onOptionChange(form));
	 // this.whichOne.valueChanges.subscribe(x => this.onChange(x));
  }

}
