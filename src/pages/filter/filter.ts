import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { IFilter } from '../../models/app';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  public filterForm: FormGroup;
  public costForm: FormGroup;
  public dataFilter: IFilter[];

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

    let selectedItems = navParams.get('filter');
    let priceRange = navParams.get('cost');

    if (selectedItems) {
      this.filterForm.patchValue(
        selectedItems.reduce((accum, element) => {
          accum[element.name] = true;
          return accum;
        }, {})
      );
    }

    if (priceRange) {
      this.costForm.patchValue(priceRange);
    }
  }

  /**
   * Заглушка для фильтра
   */
  private loadData() {
    this.dataFilter = [
      {
        title: 'Наличию',
        controls: [
          {
            label: 'В наличии',
            name: 'inStock',
            typeFilter: 'availability',
          },
          {
            label: 'На складе',
            name: 'inWarehouse',
            typeFilter: 'availability',
          },
          {
            label: 'Нет в наличии',
            name: 'notAvalible',
            typeFilter: 'availability',
          },
        ],
      },
      {
        title: 'Типу',
        controls: [
          {
            label: 'Велотренажер',
            name: 'bike',
            typeFilter: 'type',
          },
          {
            label: 'Батут',
            name: 'trampoline',
            typeFilter: 'type',
          },
          {
            label: 'Коврик',
            name: 'rug',
            typeFilter: 'type',
          },
          {
            label: 'Турник',
            name: 'horizontalBar',
            typeFilter: 'type',
          },
          {
            label: 'Эспандер',
            name: 'expander',
            typeFilter: 'type',
          },
          {
            label: 'Обруч',
            name: 'hoop',
            typeFilter: 'type',
          },
          {
            label: 'Доска',
            name: 'board',
            typeFilter: 'type',
          },
        ],
      },
      {
        title: 'Сезонности',
        controls: [
          {
            label: 'Любой',
            name: 'any',
            typeFilter: 'seasonality',
          },
          {
            label: 'Осень',
            name: 'autumn',
            typeFilter: 'seasonality',
          },
          {
            label: 'Зима',
            name: 'winter',
            typeFilter: 'seasonality',
          },
          {
            label: 'Весна',
            name: 'spring',
            typeFilter: 'seasonality',
          },
          {
            label: 'Лето',
            name: 'summer',
            typeFilter: 'seasonality',
          },
        ],
      },
    ];
  }

  /**
   * Закрытие модального окна и передача данных в родительский компонент
   */
  public dismiss(): void {
    let filterItems = [];

    for (const item of this.dataFilter) {
      for (let key in this.filterForm.value) {
        if (this.filterForm.value[key] && item.controls.find(control => control.name === key)) {
          filterItems.push(item.controls.find(control => control.name === key));
        }
      }
    }

    if(this.costForm.value.minCost) {
      filterItems.push({
        label: this.costForm.value.minCost,
        typeFilter: 'minCost'
      });
    }

    if(this.costForm.value.maxCost) {
      filterItems.push({
        label: this.costForm.value.maxCost,
        typeFilter: 'maxCost'
      });
    }

    this.viewCtrl.dismiss({ filterItems, cost: this.costForm.value });
  }
}
