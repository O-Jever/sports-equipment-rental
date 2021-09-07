import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { ListPage } from "../pages/list/list";
import { ReactiveFormsModule } from "@angular/forms";
import { FilterPage } from "../pages/filter/filter";

@NgModule({
  declarations: [MyApp, ListPage, FilterPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), ReactiveFormsModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage, FilterPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
