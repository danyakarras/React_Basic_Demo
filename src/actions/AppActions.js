import AppDispatcher from '../dispatcher/AppDispatcher.js';

const AppActions = {

	toggleShowPicture: function() {
		AppDispatcher.dispatch( {
			actionType: 'toggleShowPicture'
		} );
	},

	setCounter: function( num ) {
		AppDispatcher.dispatch( {
			actionType: 'setCounter',
			num: num
		} );
	}
};

export default AppActions;