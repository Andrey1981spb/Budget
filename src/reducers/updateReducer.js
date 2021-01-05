import initialState from '../constants/initialState';

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'SELECT':
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            };
        case 'SET_EMPTY':
            return {
                state,
                items: {'Date': '', 'Operation': '', 'Amount': '', 'Item_of_expenditure': '', 'Balance': ''}
            };
        default:
            return state;
    }
}