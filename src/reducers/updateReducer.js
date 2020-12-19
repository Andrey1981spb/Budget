import initialState from '../constants/initialState';
import action from '../constants/types';

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'SELECT':
            return state.Operation = action.payload;
        default:
            return state
    }
}