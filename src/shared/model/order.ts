import { OrderFrequencyType } from '../enum/order-frequency-type';
import { OrderDateType } from '../enum/order-date-type';
import { Category } from './category';
import { User } from './user';

export interface Order {
    id?: number;
    name: string;
    description: string;
    desired_date: string | OrderDateType;
    cooking_frequency: OrderFrequencyType;
    categories?: Category[];
    desired_cooking_time?: number;
    tools?: string[];
    ingredients?: string[];
    user?: User;
}