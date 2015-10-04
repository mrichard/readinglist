/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View,
	NgFor
} from 'angular2/angular2';

import {ReadingListForm} from '../ReadingListForm/ReadingListForm'

@Component({
	selector: 'reading-list'
})

@View({
	template: `<section class="container">
		<reading-list-form></reading-list-form>
	</section>`,
	directives: [ReadingListForm]
})

export class ReadingListApp {
}
