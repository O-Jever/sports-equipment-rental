import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NavController, NavParams, ViewController } from "ionic-angular";

@Component({
  selector: "page-filter",
  templateUrl: "filter.html",
})
export class FilterPage {
  public filterForm: FormGroup;
  public costForm: FormGroup;
  public dataFilter;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.loadData();

    this.costForm = new FormGroup({
      minCost: new FormControl(null),
      maxCost: new FormControl(null),
    });

    this.filterForm = new FormGroup({
      inStock: new FormControl(null),
      inWarehouse: new FormControl(null),
      notAvalible: new FormControl(null),
      bike: new FormControl(null),
      trampoline: new FormControl(null),
      rug: new FormControl(null),
      horizontalBar: new FormControl(null),
      expander: new FormControl(null),
      hoop: new FormControl(null),
      board: new FormControl(null),
      any: new FormControl(null),
      autumn: new FormControl(null),
      winter: new FormControl(null),
      spring: new FormControl(null),
      summer: new FormControl(null),
    });

    let selectedItems = navParams.get("filter");

    if (selectedItems) {
      this.filterForm.patchValue(
        selectedItems.reduce((accum, element) => {
          accum[element.name] = true;
          return accum;
        }, {})
      );
    }
  }

  private loadData() {
    this.dataFilter = [
      {
        title: "Наличию",
        controls: [
          {
            label: "В наличии",
            name: "inStock",
          },
          {
            label: "На складе",
            name: "inWarehouse",
          },
          {
            label: "Нет в наличии",
            name: "notAvalible",
          },
        ],
      },
      {
        title: "Типу",
        controls: [
          {
            label: "Велотренажер",
            name: "bike",
          },
          {
            label: "Батут",
            name: "trampoline",
          },
          {
            label: "Коврик",
            name: "rug",
          },
          {
            label: "Турник",
            name: "horizontalBar",
          },
          {
            label: "Эспандер",
            name: "expander",
          },
          {
            label: "Обруч",
            name: "hoop",
          },
          {
            label: "Доска",
            name: "board",
          },
        ],
      },
      {
        title: "Сезонности",
        controls: [
          {
            label: "Любой",
            name: "any",
          },
          {
            label: "Осень",
            name: "autumn",
          },
          {
            label: "Зима",
            name: "winter",
          },
          {
            label: "Весна",
            name: "spring",
          },
          {
            label: "Лето",
            name: "summer",
          },
        ],
      },
    ];
  }

  public dismiss(): void {
    let filteredItems = [];

    for (const item of this.dataFilter) {
      for (let key in this.filterForm.value) {
        if (this.filterForm.value[key] && item.controls.find((control) => control.name === key)) {
          filteredItems.push(item.controls.find((control) => control.name === key));
        }
      }
    }

    this.viewCtrl.dismiss(filteredItems, this.costForm.value);
  }
}
