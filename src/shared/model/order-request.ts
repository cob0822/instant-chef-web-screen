import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';

export interface OrderRequest {
    name: string;
    description: string;
    desired_date: string | OrderDateType;
    cooking_frequency: OrderFrequencyType;
    categories?: number[];
    desired_cooking_time?: number;
    tool?: string[];
    ingredients?: string[];
}