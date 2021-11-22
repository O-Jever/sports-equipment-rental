import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {ContactsPage} from '../pages/contacts/contacts';
import {FilterPage} from '../pages/filter/filter';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';

import {MyApp} from './app.component';

@NgModule({
    declarations: [MyApp, ListPage, ItemDetailsPage, FilterPage, ContactsPage],
    imports: [BrowserModule, IonicModule.forRoot(MyApp), ReactiveFormsModule],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, ListPage, ItemDetailsPage, FilterPage, ContactsPage],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
})
export class AppModule {}
