import InitialState from './initialstate';

/*
* Reducers
* */


//categories reducer

export const categories = (state = InitialState.categories, action) => {
    let obj={};
    switch(action.type) {
        case 'ADD_CATEGORY':
            return state.concat(
                {
                    id: action.id,
                    category_name: action.name,
                    category_enc: action.enc,
                    temp: action.temp
                }
            );
        default:
            return state;
    }
};

//* reducer