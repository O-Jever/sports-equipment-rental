import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { ListPage } from "../pages/list/list";
import { ItemDetailsPage } from "../pages/item-details/item-details";

@NgModule({
  declarations: [MyApp, ListPage, ItemDetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage, ItemDetailsPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
