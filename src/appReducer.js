import * as C from './constants';
import { allBooks } from './mock-data';

const initialState = {
    currentlyReading: ["9781593275846"],
    wantToRead: ["9781449331818"],
    read: ["9781449365035"],
    none: [],
    allBooks,
};

function getUpdatedStatuses(state, bookId, currentStatus, nextStatus) {
    const currentStatusArr = state[currentStatus].filter((itemId) => itemId !== bookId);
    const nextStatusArr = state[nextStatus].concat([bookId]);
    const updatedPartialState = { [currentStatus]: currentStatusArr, [nextStatus]: nextStatusArr}
    return updatedPartialState;
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case C.UPDATE_BOOK_STATUS:
            const { bookId, currentStatus, nextStatus } = action;
            const updatedPartialState = getUpdatedStatuses(state, bookId, currentStatus, nextStatus);
            return { ...state, ...updatedPartialState };
        default:
            return state;
    }
}

export default appReducer;
