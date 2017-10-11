import CONSTANTS from './constants';
import Dispatcher from './dispatcher';

export default {
  testStore() {
    Dispatcher({
      type: CONSTANTS.ActionTypes.TEST_STORE
    });
  },

  showSidebar() {
    Dispatcher({
      type: CONSTANTS.ActionTypes.SHOW_SIDEBAR
    });
  },

  hideSidebar() {
    Dispatcher({
      type: CONSTANTS.ActionTypes.HIDE_SIDEBAR
    });
  },

  countUp() {
    console.log('countUp');
    Dispatcher({
      type: CONSTANTS.ActionTypes.COUNT_UP
    });
  },

  countDown() {
    Dispatcher({
      type: CONSTANTS.ActionTypes.COUNT_DOWN
    });
  },
};
