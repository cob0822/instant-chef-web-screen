export enum OrderFrequencyType {
    AlwaysAtWork = 'always at work',
    AlwaysForHouseWork = 'always for housework',
    AlwaysAsHobby = 'always as hobby',
    Sometimes = 'sometimes',
    NotAtAll = 'not at all',
    InputByMyself = 'input by myself'
}

export const getOrderFrequencyTypeLabel = (orderFrequencyType : OrderFrequencyType | string) => {
    switch(orderFrequencyType) {
        case OrderFrequencyType.AlwaysAtWork: return '仕事でいつも料理をしている';
        case OrderFrequencyType.AlwaysForHouseWork: return '家事でいつも料理をしている';
        case OrderFrequencyType.AlwaysAsHobby: return '趣味で料理をしている';
        case OrderFrequencyType.Sometimes: return 'たまに料理をしている';
        case OrderFrequencyType.NotAtAll: return 'ぜんぜん料理はしない';
        case OrderFrequencyType.InputByMyself: return '※自分で入力する※';
        default: return '';
    }
}

export const getLabelToOrderFrequencyType = (word: string) => {
    switch(word) {
        case '仕事でいつも料理をしている': return OrderFrequencyType.AlwaysAtWork;
        case '家事でいつも料理をしている': return OrderFrequencyType.AlwaysForHouseWork;
        case '趣味で料理をしている': return OrderFrequencyType.AlwaysAsHobby;
        case 'たまに料理をしている': return OrderFrequencyType.Sometimes;
        case 'ぜんぜん料理はしない': return OrderFrequencyType.NotAtAll;
        case '※自分で入力する※': return OrderFrequencyType.InputByMyself;
        default: return word;
    }
}