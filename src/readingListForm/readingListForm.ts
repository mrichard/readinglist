/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

import {
	FormBuilder,
	FORM_DIRECTIVES,
	ControlGroup,
	Control,
	Validators,
	NgIf
} from 'angular2/angular2';

import {Article} from '../models/article';

@Component({
	selector: 'reading-list-form',
	properties: ['articles'],
	viewInjector: [FormBuilder]
})

@View({
	directives: [FORM_DIRECTIVES, NgIf],
	template: `
		<form [ng-form-model]="myForm" (submit)="onSubmit(myForm.value)">
			<div class="form-group" 
				[class.has-error]="! myForm.controls.title.valid && myForm.controls.title.touched"
				[class.has-success]="myForm.controls.title.valid && myForm.controls.title.touched"
			>
				<div><label for="title">Title:</label></div>
				<div><input type="text" id="title" name="title" class="form-control" placeholder="Enter a title" [ng-form-control]="myForm.controls.title" /></div>

				<div *ng-if="! myForm.controls.title.valid && myForm.controls.title.touched">Title is invalid</div>
				<div *ng-if="myForm.controls.title.hasError('required') && myForm.controls.title.touched">Title is required</div>
			</div>
			<div class="form-group" 
				[class.has-error]="! myForm.controls.link.valid && myForm.controls.link.touched"
				[class.has-success]="myForm.controls.link.valid && myForm.controls.link.touched"
			>
				<div><label for="link">Link:</label></div>
				<div><input type="text" id="link" name="link" class="form-control" placeholder="Enter a link" [ng-form-control]="myForm.controls.link" /></div>
				<div *ng-if="! myForm.controls.link.valid && myForm.controls.link.touched">Link is invalid</div>
				<div *ng-if="myForm.controls.link.hasError('required') && myForm.controls.link.touched">Link is required</div>
			</div>
			<button class="btn btn-primary" type="submit">Submit Article</button>
		</form>
	`
})

export class ReadingListForm {
	myForm: ControlGroup;
	articles: Array<Article>;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			title: ['', Validators.required],
			link: ['', Validators.required]
		});

		this.myForm.valueChanges.observer({
			next: (value) => {
				console.log(value);
			}
		});
	}

	onSubmit(value) {
		if (this.myForm.valid) {
			this.articles.push( new Article(value.title, value.link, 0));
			console.log(this.myForm);
		}
	}
}
