import React, { Component } from "react";
import ReactDOM from "react-dom";
import Preview from "../preview";

import "./index.scss";

export default class Detail extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render(){
		return (
    	<div className="content-box">
    		<Preview title="Summary" />
    		<Preview title="History" />
    	</div>
		);
	}
}
