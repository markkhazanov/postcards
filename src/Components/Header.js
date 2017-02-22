import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<div>
				<h1>Header</h1>
				<ul className="navbar">
					<li>Home</li>
						<li>Form</li>
						<li>Thank You</li>
				</ul>
			</div>
		);
	}
}

export default Header;