import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { ISportsEquipment } from "../../models/app";

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
