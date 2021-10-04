import _ from 'lodash';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { IControl, ISportsEquipment } from '../../models/app';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public sportsEquipment: Array<ISportsEquipment>;
  public filterTerm: string;
  private filter: IControl[];
  private cost;

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {
    this.sportsEquipment = this.loadData();
  }

  /**
   * Заглушка для списка
   * @returns {ISportsEquipment[]} - массив со спортивным инвентарем
   */
  private loadData(): ISportsEquipment[] {
    return [
      {
        id: 1,
        title: 'ALPIN Велотренажер Actuel B-160',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Велотренажер',
        price: 22000,
        manufacturerCountry: 'Китай',
        manufacturer: 'ALPIN',
        weight: 200,
      },
      {
        id: 2,
        title: 'GetActive Батут',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Весна', 'Осень', 'Лето'],
        availability: 'В наличии',
        type: 'Батут',
        price: 4819,
        manufacturerCountry: 'Китай',
        manufacturer: 'GetActive',
        weight: 200,
      },
      {
        id: 3,
        title: 'ALPIN Велотренажер мини Rigi B-170',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'На складе',
        type: 'Мини велотренажор',
        price: 4600,
        manufacturerCountry: 'Китай',
        manufacturer: 'ALPIN',
        weight: 200,
      },
      {
        id: 4,
        title: 'MELA Коврик для йоги и фитнеса',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'Нет в наличии',
        type: 'Коврик',
        price: 4600,
        manufacturerCountry: 'Китай',
        manufacturer: 'MELA',
        weight: 200,
      },
      {
        id: 5,
        title: 'Absolute Champion Настенный турник',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'Нет в наличии',
        type: 'Турник',
        price: 2890,
        manufacturerCountry: 'Китай',
        manufacturer: 'Absolute Champion',
        weight: 200,
      },
      {
        id: 6,
        title: 'GOOD LIFE Эспандер',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Эспандер',
        price: 579,
        manufacturerCountry: 'Китай',
        manufacturer: 'GOOD LIF',
        weight: 200,
      },
      {
        id: 7,
        title: 'FIT FOR ME Набор для фитнеса',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Коврик',
        price: 939,
        manufacturerCountry: 'Китай',
        manufacturer: 'FIT FOR ME',
        weight: 200,
      },
      {
        id: 8,
        title: 'FIT FOR ME Обруч массажный',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'На складе',
        type: 'Обруч',
        price: 936,
        manufacturerCountry: 'Китай',
        manufacturer: 'FIT FOR ME',
        weight: 200,
      },
      {
        id: 9,
        title: 'Bodo Доска балансировочная',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Доска',
        price: 3332,
        manufacturerCountry: 'Китай',
        manufacturer: 'Bodo',
        weight: 200,
      },
      {
        id: 10,
        title: 'ICON-TRADE Гантели',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Гантели',
        price: 7467,
        manufacturerCountry: 'Китай',
        manufacturer: 'ICON-TRADE',
        weight: 200,
      },
      {
        id: 11,
        title: 'Shark Fit Ролики для пресса',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Ролик',
        price: 883,
        manufacturerCountry: 'Китай',
        manufacturer: 'Shark Fit',
        weight: 200,
      },
      {
        id: 12,
        title: 'HelloFriends Коврик спортивный',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'На складе',
        type: 'Коврик',
        price: 827,
        manufacturerCountry: 'Китай',
        manufacturer: 'HelloFriends',
        weight: 200,
      },
      {
        id: 13,
        title: 'DFC Тренажер для спины',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'Нет в наличии',
        type: 'Тренажер',
        price: 15990,
        manufacturerCountry: 'Китай',
        manufacturer: 'DFC',
        weight: 200,
      },
      {
        id: 14,
        title: 'Barbell Atlet Диск для штанги',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'Нет в наличии',
        type: 'Диск',
        price: 990,
        manufacturerCountry: 'Китай',
        manufacturer: 'Barbell Atlet',
        weight: 200,
      },
      {
        id: 15,
        title: 'Atletika24 Фитбол',
        preview: '../assets/imgs/logo.png',
        seasonality: ['Любой'],
        availability: 'В наличии',
        type: 'Фитбол',
        price: 1050,
        manufacturerCountry: 'Китай',
        manufacturer: 'Atletika24',
        weight: 200,
      },
    ];
  }

  /**
   * Фильтрация спортивного инвентаря по параметрам из фильтра
   */
  public openFilter(): void {
    const modal = this.modalCtrl.create(FilterPage, { filter: this.filter, cost: this.cost });
    modal.present();

    modal.onDidDismiss(data => {
      this.filter = data.filterItems;
      this.cost = data.cost;
      this.sportsEquipment = this.loadData();

      if (data.filterItems.length || data.cost.minCost || data.cost.maxCost) {
        const groupedFilterItems = _.groupBy(data.filterItems, 'typeFilter');
        const filters = {
          seasonality: (element, filterItems) => {
            return filterItems.some(item => element.seasonality.includes(item.label));
          },
          availability: (element, filterItems) => {
            return filterItems.some(item => element.availability === item.label);
          },
          type: (element, filterItems) => {
            return filterItems.some(item => element.type === item.label);
          },
          minCost: (element, filterItems) => {
            console.log('minCost', filterItems);
            return element.price >= filterItems[0].label;
          },
          maxCost: (element, filterItems) => {
            console.log('maxCost', filterItems);
            return element.price <= filterItems[0].label;
          },
        };

        this.sportsEquipment = this.loadData().filter((element: ISportsEquipment) => {       
          return _.every(groupedFilterItems, (filterItems, typeFilter) => {
            return filters[typeFilter](element, filterItems);
          });
        });
      
      }
    });
  }

  /**
   * Переход на страницу с подробным описанием спортивного инвентаря
   * @param {ISportsEquipment} item - информация об спортивном инвентаре
   */

  public itemTapped(item: ISportsEquipment): void {
    this.navCtrl.push(ItemDetailsPage, { item });
  }
}
