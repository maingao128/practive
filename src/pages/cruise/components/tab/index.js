import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

export default class Tab extends Component {
  
  static propTypes = {
  	type: T.oneOf(['capsule', 'bar']),
  	onChange: T.func,
  	dataSource: T.array,
  	activeIndex: T.number
  }

  static defaultProps = {
  	dataSource: [],
  	type: 'capsule',
  	onChange: () => {}
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
    	index: 1
    }
  }

  componentWillReceiveProps(props) {
  	if(props.activeIndex !== undefined) {
  		this.setState({
  			index: props.activeIndex
  		})
  	}
  }

  onChange(i, value) {
  	if (i === this.state.index - 1) {
  		return;
  	}
  	this.setState({
		index: i + 1
	});
	this.props.onChange(i, value);
  }

  getTabItem = (index) => (item, i) => {
  	const klass = index === i + 1 ? 'bar-item active' : 'bar-item';
  	return (
  	  <div 
  	  	className={klass} 
  	  	key={i}
  	  	onClick={this.onChange.bind(this, i, item)}>
  	  	{item}
  	  </div>
  	)
  }

  render(){
  	const { type, dataSource, onChange, children, ...others } = this.props;
  	const klass = `${type}-tab`;
  	const index = this.props.activeIndex !== undefined ? this.props.activeIndex : this.state.index;

    return (
      <div className="tab" {...others}>
      	<div className={klass}>
      		<div className="bar-detail">
      			{dataSource.map(this.getTabItem(index))}
      		</div>
      	</div>
      	{ 
  			type === 'bar' ? 
  			<div className="bar-content">
  				{ dataSource[index-1] ? <div className="checked">{dataSource[index-1]}</div> : null }
  				{children}
  			</div> : null
  		}
      </div>
    )
  }
}
