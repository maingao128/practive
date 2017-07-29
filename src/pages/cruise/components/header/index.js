import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render(){
  	return (
  	  <div className="header">
    		<div className="sign-out">
    			<i className="iconfont">&#xe622;</i>
    			<a href="">Sign out</a>
    		</div>
        <div className="login-info">
          Signed in as 
          <a href="" className="member">Member</a>
        </div>
      </div>
  	);
	}
}
