import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import validator from 'validator';

@Component({
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent {
    email = new FormControl('');
    emailValid = false;
    emailNonValid = false;

    handleSubmitEmail() {
	if (validator.isEmail(this.email.value)) {
	    this.emailValid = true;
	    this.emailNonValid = false;
	    this.email.setValue('');
	} else {
	    this.emailNonValid = true;
	    this.emailValid = false;
	}
    }

    hideCurrentElement(arg: number) {
	if (arg == 0) {
	    this.emailValid = false;
	} else {
	    this.emailNonValid = false;
	}
    }
}
