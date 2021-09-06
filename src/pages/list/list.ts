import { Component } from "@angular/core";

import { AlertController, NavController, NavParams } from "ionic-angular";
import { ISportsEquipment } from "../../models/app";

@Component({
  selector: "page-list",
  templateUrl: "list.html",
})
export class ListPage {
  public sportsEquipment: Array<ISportsEquipment>;
  public filterTerm: string;

  constructor(private alertCtrl: AlertController) {
    this.loadData();
  }

  private loadData(): void {
    this.sportsEquipment = [
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
    let alert = this.alertCtrl.create();
    alert.setTitle("Типы");

    alert.addInput({
      type: "checkbox",
      label: "Велотренажер",
      value: "Велотренажер",
    });

    alert.addInput({
      type: "checkbox",
      label: "Батут",
      value: "Батут",
    });

    alert.setTitle("Доступность");

    alert.addInput({
      type: "checkbox",
      label: "В наличии",
      value: "В наличии",
    });

    alert.addInput({
      type: "checkbox",
      label: "На складе",
      value: "На складе",
    });

    alert.addButton("Отмена");
    alert.addButton({
      text: "Применить",
      handler: (data) => {
        console.log("Checkbox data:", data);
      },
    });

    alert.present();
  }
}
