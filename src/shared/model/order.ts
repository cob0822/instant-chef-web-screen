import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';
import { Category } from './category';
import { User } from './user';

export interface OrderRequest {
    name: string;
    description: string;
    desired_date: string | OrderDateType;
    cooking_frequency: OrderFrequencyType;
    categories?: Category[];
    desired_cooking_time?: number;
    tool?: string[];
    ingredients?: string[];
}

export interface OrderList {
    id: number;
    categories: Category[];
    description: string;
    desired_date: string | OrderDateType;
    name: string;
    user: User;
}