export interface ISportsEquipment {
  id: number;
  title: string;
  preview: string;
  seasonality: string[];
  availability: string;
  type: string;
  price: number;
  manufacturerCountry: string;
  manufacturer: string;
  weight: number;
}

export interface IFilter {
  title: string;
  controls: IControl[]
}

export interface IControl {
  label: string;
  name: string;
  typeFilter: string;
}

export interface ICost {
  minCost: number;
  maxCost: number;
}
