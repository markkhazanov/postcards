import React, {Component} from 'react';
import {firstName, lastName} from '../helpers';

class Form extends Component{

	createEntry(event){
		event.preventDefault();

		this.getFirstName = this.getFirstName.bind(this);
		this.getLastName = this.getLastName.bind(this);

		const entry={
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			message: this.message.value,
			zip: this.zip.value,
			person: this.person.value,
			option: this.option.value,
		} 
		this.props.addEntry(entry);
		this.entryForm.reset();
	}

	getFirstName(){
		return firstName(this.props.name);
	}

	getLastName(){
		return lastName(this.props.name);
	}

	render(){
		return(
			<div>
				<h1>{this.getFirstName()}! Thanks for being active in the political process :)</h1>
				<h2>We hope you get a lot of use out of this app and send it to friends who want to get involved as well!</h2>
				<h2>Let us know if you have any questions!</h2>
				<form ref={(input) => this.entryForm = input} className="entry-edit" action="" onSubmit={(e) => this.createEntry(e)}>
					<input ref={(input) => this.firstName = input} type="text" defaultValue={this.getFirstName()}/>
					<input ref={(input) => this.lastName = input} type="text" defaultValue={this.getLastName()}/>
					<textarea ref={(input) => this.message = input} type="text" placeholder="Message"></textarea>
					<input ref={(input) => this.zip = input} type="text" placeholder="Zip Code"/>
					<select ref={(input) => this.person = input}>
						<option value="guy1">Fresh!</option>
						<option value="guy2">Sold Out!</option>		
					</select>
					<select ref={(input) => this.option = input}>
						<option value="Postcard">Send a Postcard</option>
						<option value="Phone Call">We'll make a phone call</option>
						<option value="Both">Do both!</option>
					</select>
					<button type="submit">Submit</button>
				</form>

				<h1>Send a Postcard, Request a Call</h1>
				<ul className="navbar">
					<li>First Name</li>
					<li>Last Name</li>
					<li>Message</li>
					<li>Zip Code</li>
					<li>Who do you want this to be sent to Senator/Rep</li>
					<li>Call/Postcard</li>
					<li>Payment Info</li>
				</ul>
			</div>
		);
	}
}

export default Form;