import { Component } from "@angular/core";

import { ModalController, NavController, NavParams } from "ionic-angular";
import { ISportsEquipment } from "../../models/app";
import { FilterPage } from "../filter/filter";

@Component({
  selector: "page-list",
  templateUrl: "list.html",
})
export class ListPage {
  public sportsEquipment: Array<ISportsEquipment>;
  public filterTerm: string;
  private filter;

  constructor(private modalCtrl: ModalController) {
    this.sportsEquipment = this.loadData();
  }

  private loadData(): ISportsEquipment[] {
    return [
      {
        title: "ALPIN Велотренажер Actuel B-160",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Велотренажер",
        price: 22000,
      },
      {
        title: "GetActive Батут",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Весна", "осень", "лето"],
        availability: "В наличии",
        type: "Батут",
        price: 4819,
      },
      {
        title: "ALPIN Велотренажер мини Rigi B-170",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "На складе",
        type: "Мини велотренажор",
        price: 4600,
      },
      {
        title: "MELA Коврик для йоги и фитнеса",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "Нет в наличии",
        type: "Коврик",
        price: 4600,
      },
      {
        title: "Absolute Champion Настенный турник",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "Нет в наличии",
        type: "Турник",
        price: 2890,
      },
      {
        title: "GOOD LIFE Эспандер",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Эспандер",
        price: 579,
      },
      {
        title: "FIT FOR ME Набор для фитнеса",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Коврик",
        price: 939,
      },
      {
        title: "FIT FOR ME Обруч массажный",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "На складе",
        type: "Обруч",
        price: 936,
      },
      {
        title: "Bodo Доска балансировочная",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Доска",
        price: 3332,
      },
      {
        title: "ICON-TRADE Гантели",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Гантели",
        price: 7467,
      },
      {
        title: "Shark Fit Ролики для пресса",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Ролик",
        price: 883,
      },
      {
        title: "HelloFriends Коврик спортивный",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "На складе",
        type: "Коврик",
        price: 827,
      },
      {
        title: "DFC Тренажер для спины",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "Нет в наличии",
        type: "Тренажер",
        price: 15990,
      },
      {
        title: "Barbell Atlet Диск для штанги",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "Нет в наличии",
        type: "Диск",
        price: 990,
      },
      {
        title: "Atletika24 Фитбол",
        preview: "../assets/imgs/logo.png",
        seasonality: ["Любой"],
        availability: "В наличии",
        type: "Фитбол",
        price: 1050,
      },
    ];
  }

  public openDialog(): void {
    const modal = this.modalCtrl.create(FilterPage, { filter: this.filter });
    modal.present();

    modal.onDidDismiss((data) => {
      console.log("Отфильтрованые данные", data);
      this.filter = data;

      if (data.length > 0) {
        this.sportsEquipment = this.loadData().filter((element) => {
          for (let key in element) {
            if (data.find((control) => control.label === element[key])) {
              return element;
            }
          }
        });
      } else {
        this.sportsEquipment = this.loadData();
      }
    });
  }
}
