import InitialState from './initialstate';

/*
* Reducers
* */

//редьюсер работы с товарами
export const cart = (state = InitialState.cart, action) => {

    switch(action.type) {
        case 'ADD_ITEM':
            return state.concat(action.item);
        default:
            return state;
    }
};

//редьюсер работы с cкидкой
export const discount = (state = InitialState.discount, action) => {
    switch(action.type) {
        case 'SET_DISCOUNT':
            return action.discount;
        default:
            return state;
    }
};