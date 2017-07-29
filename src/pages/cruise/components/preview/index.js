import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

export default class Preview extends Component {
  
  static propTypes = {
  	title: T.string,
  	dataSource: T.array
  }
  
  constructor(props, context) {
    super(props, context);
  }

  render(){
  	const { title, dataSource } = this.props;
    return (
    	<div className="preview">
			<div className="title">{title}</div>
			<div className="item-list">
				<div className="item-detail">liux</div>
				<div className="item-detail">2</div>
			</div>
		</div>
    )
  }
}
