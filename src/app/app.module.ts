import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from "./app.component";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://9960087589984225a0ffb214ce8088a8@sentry.io/1354806"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})

export class AppModule {}