import * as types from '../constants/types';

export function selectOperation(payload) {
    return {
        type: types.app.SELECT, payload
    };
}