/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

import {Article} from '../models/article';

@Component({
	selector: 'reading-article',
	properties: ['article']
})

@View({
	template: `<article>
		<div class="priority">Priority: {{article.priority}}</div>
		<div class="main">
			<h2>
				<a href="{{article.link}}">{{article.title}}</a>
			</h2>
			<ul>
				<li><a href (click)="article.priorityUp()">up priority</a></li>
				<li><a href (click)="article.priorityDown()">down priority</a></li>
			</ul>
		</div>
	</article>`
})

export class ReadingArticle {
	article: Article
}
