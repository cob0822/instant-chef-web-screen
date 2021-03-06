export interface Pagination<T> {
    data: T[];
    links: Links;
    meta: Meta;
}

export interface Links {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}