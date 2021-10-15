import { Component } from "@angular/core";
import { ISportsEquipment } from "../../models/app";
import { NavParams } from "ionic-angular";

@Component({
  selector: "page-item-details",
  templateUrl: "item-details.html",
})
export class ItemDetailsPage {
  public selectedItem: ISportsEquipment;

  constructor(private navParams: NavParams) {
    this.selectedItem = navParams.get("item");
  }
}
