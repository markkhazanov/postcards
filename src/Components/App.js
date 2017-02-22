import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import base from '../base';

export default class App extends Component {
	constructor(){
		super();

		this.addEntry = this.addEntry.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);

		this.state = {
			entries: {},
			name: null,
			email: null,
			uid: null,
			owner: null
		};
	}

	componentWillMount(){
		this.ref = base.syncState(`/entries`
		, {
			context: this,
			state: 'entries'
		});
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	addEntry(entry){
		//update our state
		const entries = this.state.entries;
		//add in our new entry
		const timestamp = Date.now();
		entries[`entry-${timestamp}`] = entry;
		//set state
		this.setState({ entries })
	}

	authenticate(provider){
		base.authWithOAuthPopup(provider, this.authHandler);
	}

	authHandler(err, authData) {
		console.log(authData);
		console.log(authData.user.email);
		console.log(authData.user.displayName);
		if(err){
			console.error(err);
			return;
		}

		//grab the users info
		const userRef = base.database().ref(authData.user.uid);

		this.setState({
			name: authData.user.displayName,
			email: authData.user.email,
			uid: authData.user.uid,
		})

	}

	renderLogin(){
		return (
			<div><button className="facebook" onClick={() => this.authenticate('facebook')}> Log In with Facebook</button></div>
		)
	}

  render() {
  	const logout = <button>Log Out!</button>;

  	//check if they are not logged in at all
  	if(!this.state.uid){
  		return <div>{this.renderLogin()}</div>
  	}
  	else{
  		return (
	      <div><h1> Postcard App </h1>
			 		<Header />
			 			<Form addEntry={this.addEntry} name={this.state.name} email={this.state.email}/>
			 		<Footer />
	      </div>
  		)
  	}


    return (
      <div><h1> Postcard App </h1>
		 		<Header />
		 			<Form addEntry={this.addEntry} name={this.state.name} email={this.state.email}/>
		 		<Footer />
      </div>
    );
  }
}