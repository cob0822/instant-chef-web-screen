import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';
import { Category } from './category';
import { User } from './user';
import { HasDate } from './has-date';

export interface Order {
    name: string;
    description: string;
    desired_date: string | OrderDateType;
    cooking_frequency: OrderFrequencyType;
    categories?: Category[];
    desired_cooking_time?: number;
}

export interface OrderRequest extends Order {
    tools?: string[];
    ingredients?: string[];
}

export interface OrderResponse extends Order {
    id: number;
    tools?: Tool[];
    ingredients?: Ingredient[];
    user?: User;
}

export interface Tool extends HasDate {
    id: number;
    name: string;
}

export interface Ingredient extends HasDate {
    id: number;
    name: string;
}