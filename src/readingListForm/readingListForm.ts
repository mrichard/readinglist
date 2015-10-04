/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

import {Article} from '../models/article';

@Component({
	selector: 'reading-list-form',
	properties: ['articles']
})

@View({
	template: `
		<div class="form-group">
			<div><label for="title">Title:</label></div>
			<div><input type="text" name="title" class="form-control" #newtitle /></div>
		</div>
		<div class="form-group">
			<div><label for="link">Link:</label></div>
			<div><input type="text" name="link" class="form-control" #newlink /></div>
		</div>
		<button class="btn btn-primary" (click)="addArticle(newtitle, newlink)" >Submit Article</button>
	`
})

export class ReadingListForm {
	articles: Array<Article>;

	addArticle(title, link) {
		console.log(title.value, link.value);
		this.articles.push( new Article(title.value, link.value, 0));
		console.log(this.articles);
		title.value = '';
		link.value = '';
		return false; 
	}
}
