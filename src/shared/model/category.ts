export interface Category {
    id: number;
    name: string;
    pivot?: {
        order_id: number;
        category_id: number;
    }
    created_at?: string;
    updated_at?: string;
}