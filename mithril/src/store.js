import mitt from 'mitt';
import CONSTANTS from './constants';

const emitter = mitt();
let _data = {
  count: 0,
  showSidebar: false
};

const Store = {
  getAll() {
    return { data: _data };
  },

  addChangeListener(callback) {
    emitter.on(CONSTANTS.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    emitter.off(CONSTANTS.CHANGE_EVENT, callback);
  },

  emitChange() {
    emitter.emit(CONSTANTS.CHANGE_EVENT);
  },

  dispatchIndex(payload) {
    console.log('PAYLOAD:', payload);
    switch(payload.type) {
      case CONSTANTS.ActionTypes.TEST_STORE:
        _data.message = 'test store works';
        Store.addChangeListener.emitChange();
        return;
      case CONSTANTS.ActionTypes.SHOW_SIDEBAR:
        _data.showSidebar = true;
        Store.addChangeListener.emitChange();
        return;
      case CONSTANTS.ActionTypes.HIDE_SIDEBAR:
        _data.showSidebar = false;
        Store.addChangeListener.emitChange();
        return;
      case CONSTANTS.ActionTypes.COUNT_UP:
        _data.count++;
        Store.addChangeListener.emitChange();
        return;
      case CONSTANTS.ActionTypes.COUNT_DOWN:
        _data.count--;
        Store.addChangeListener.emitChange();
        return;
    }
  }
};

export default Store;
