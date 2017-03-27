import React from 'react';
import '../css/Banner.css';


class Banner extends React.Component {
	render() {
		return(
			<div className="banner">
				<div className="centering">
					<h1 id='time'>130</h1>
					<h2 id='unit'>Days</h2>
				</div>
			</div>
		)
	}
}

export default Banner