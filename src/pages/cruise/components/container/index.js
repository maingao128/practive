import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tab from "../tab";
import ListItem from "../list-item";
import Detail from "../detail";

import "./index.scss";

export default class Container extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
	    	firstClass: "",
	    	secondClass: ""
		};
	}

	getListItem(item, index) {
	  	return (
	  		<ListItem sourceData={item} key={index} listIndex={index} />
	  	);
	}

	render(){
	  	const { sourceData } = this.props;
	  	if(!sourceData.infos) return null;
			return (
		    <div className="content-container">
		      <Tab 
		      	type="bar" 
		      	dataSource={sourceData.tab1}>
		      	  <Tab 
		      	  	className="second-bar" 
		      	  	type="capsule"
		      	  	dataSource={sourceData.tab2}>
		      	  </Tab>
		      </Tab>
		      <div className="content">
		      	<div className="content-list">
		      		{
			      		sourceData.infos.map(this.getListItem)
			      	}
		      	</div>
		      	<div className="content-detail">
		      		<Detail />
		      	</div>
		      </div>
		    </div>
	   	);
	}
}
