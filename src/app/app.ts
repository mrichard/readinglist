/// <reference path="../typings/angular2/angular2.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

@Component({
	selector: 'hello-world'
})

@View({
	template: `<div>Hello World</div>`
})

export class HelloWorld {

}
