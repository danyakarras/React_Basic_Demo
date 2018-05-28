import React from 'react';
import AppActions from '../actions/AppActions.js';

class Picture extends React.Component {

	 _toggleShowPicture() {
	    AppActions.toggleShowPicture();
	  }

	render() {
		const { showPicture } = this.props;

		return (
			<div>
				<button className="center-block" onClick={this._toggleShowPicture}>Toggle Picture</button>
        		{showPicture && <img className="img" src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://culturess.com/wp-content/blogs.dir/386/files/2016/09/chicken-1-850x535.jpg&c=sc&w=850&h=535"/>}
			</div>
		);
	}
}


export default Picture;
