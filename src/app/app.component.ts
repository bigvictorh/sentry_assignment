import { Component } from '@angular/core';
import { ErrorHandler } from "@angular/core";
import * as Sentry from "@sentry/browser";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ErrorHandler{
  title = 'Test App';

	handleError(error) {
		Sentry.captureException(error.originalError || error);
	    alert('An unexpected error occurred.');
	        console.log(error);
	}

    
    throwError() {
    	try {throw new Error('an error');}
    	catch(e) {
    		// Sentry.captureException(e.orignalError || e);
    		this.handleError(e);
    	}
    	throw(Error);
    }
		

}