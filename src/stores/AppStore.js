import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _showPicture = false;
let _counter = 0;


class AppStore extends EventEmitter {

	emitChange() {
		this.emit( CHANGE_EVENT );
	}

	addChangeListener( callback ) {
		this.on( CHANGE_EVENT, callback );
	}

	removeChangeListener( callback ) {
		this.removeListener( CHANGE_EVENT, callback );
	}

	getShowPicture() {
		return _showPicture;
	}

	getCounterNum() {
		return _counter;
	}
}

const _appStore = new AppStore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
	switch ( action.actionType ) {

		case 'toggleShowPicture':
			_showPicture = !_showPicture;
			_appStore.emitChange();
			break;

		case 'setCounter':
			_counter = action.num;
			_appStore.emitChange();
			break;

		default:
			break;
	}

	return true;
});
