/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View,
	NgFor
} from 'angular2/angular2';

import {ReadingListForm} from '../readingListForm/ReadingListForm';

import {ReadingArticle} from '../readingArticle/ReadingArticle';

import {Article} from '../models/article';

@Component({
	selector: 'reading-list',
	properties: ['articles']
})

@View({
	template: `<section class="container">
		<reading-list-form [articles]="articles"></reading-list-form>
	</section>
	<reading-article *ng-for="#article of articles" [article]="article"></reading-article>`,
	directives: [ReadingListForm, ReadingArticle, NgFor]
})

export class ReadingListApp {
	articles: Array<Article>;

	constructor() {
		this.articles = [
			new Article('Angular', 'http://angular.io', 0),
			new Article('React', 'http://react.io', 0)
		];
	}
}
