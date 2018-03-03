/*
 * Action creators
 * */

//categories actions
export const addCategory = (id, text, enc='#', temp=false) => ({
    type: 'ADD_CATEGORY',
    id: id,
    name: text,
    enc: enc,
    temp:temp
});

// * actions
