import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';

export interface Order {
    name: string;
    description: string;
    desired_date: string | OrderDateType;
    cooking_frequency: OrderFrequencyType;
    categories?: {id: number, name: string}[];
    desired_cooking_time?: number;
    tool?: string[];
    ingredients?: string[];
}