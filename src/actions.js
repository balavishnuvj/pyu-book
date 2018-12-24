import * as C from './constants';
export function updateBookStatus(bookId, currentStatus, nextStatus) {
    return {
      type: C.UPDATE_BOOK_STATUS,
      bookId,
      currentStatus,
      nextStatus,
    };
  }
