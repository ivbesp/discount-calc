/*
 * Action creators
 * */



// items actions
export const addItem = (name, price) => ({
    type: 'ADD_ITEM',
    item:{
        name: name,
        price: price
    }

});

// discount actions
export const setDiscount = (value) => ({
    type: 'SET_DISCOUNT',
    discount: value
});