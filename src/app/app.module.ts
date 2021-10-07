import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPage } from '../pages/filter/filter';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ContactsPage } from '../pages/contacts/contacts';

@NgModule({
  declarations: [MyApp, ListPage, ItemDetailsPage, FilterPage, ContactsPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), ReactiveFormsModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage, ItemDetailsPage, FilterPage, ContactsPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
