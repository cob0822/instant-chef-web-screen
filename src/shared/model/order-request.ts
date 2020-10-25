import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';

export interface OrderRequest {
    title: string;
    description: string;
    date: string | OrderDateType;
    frequency: OrderFrequencyType;
    categories?: number[];
    creation_time?: number;
    tool?: string[];
    ingredients?: string[];
}