import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NavController, NavParams, ViewController } from "ionic-angular";

@Component({
  selector: "page-filter",
  templateUrl: "filter.html",
})
export class FilterPage {
  public filterForm: FormGroup;
  public dataFilter;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.loadData();

    this.filterForm = new FormGroup({
      bike: new FormControl(null),
      trampoline: new FormControl(null),
      rug: new FormControl(null),
      horizontalBar: new FormControl(null),
      expander: new FormControl(null),
      hoop: new FormControl(null),
      board: new FormControl(null),
    });
  }

  private loadData() {
    this.dataFilter = [
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
    ];
  }

  public applyFilter(): void {
    console.log("Данные с формы", this.filterForm.value);
  }

  public dismiss(): void {
    let filteredItems = [];

    for (let key in this.filterForm.value) {
      if (this.filterForm.value[key]) {
        filteredItems.push(this.dataFilter.find((control) => control.name === key));
      }
    }

    console.log("Данные отфильтрованые", filteredItems);

    this.viewCtrl.dismiss(filteredItems);
  }
}
