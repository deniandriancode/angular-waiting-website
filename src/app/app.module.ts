import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WaitingComponent } from './waiting/waiting.component';

@NgModule({
    declarations: [
	AppComponent,
	WaitingComponent
    ],
    imports: [
	BrowserModule,
	ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
