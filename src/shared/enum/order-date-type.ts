export enum OrderDateType {
    Detail = 'detail',
    Always = 'always'
}

export const getOrderDateTypeLabel = (orderDateType: OrderDateType | string) => {
    switch(orderDateType) {
        case OrderDateType.Detail: return '日付を指定する';
        case OrderDateType.Always: return 'いつでも良い';
        default: return '';
    }
}