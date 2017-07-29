import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import addResource from '../modal';

import './index.scss';

export default class ListItem extends Component {
  
  static propTypes = {
  	sourceData: T.object
  }

  static defaultProps = {
    sourceData: {}
  }

  static contextTypes = {
    dispatch: T.func
  }

  constructor(props, context) {
    super(props, context);
  }

  deleteResource(resourceIndex) {
    const { dispatch } = this.context;
    const { listIndex } = this.props;
    dispatch('deleteResource', {
      listIndex,
      resourceIndex
    })
  }

  getResource(item, index) {
  	return (
  		<span className="resource-list" key={index}>
  			{item} <i className="iconfont" onClick={this.deleteResource.bind(this, index)}>&#xe603;</i>
  		</span>
  	)
  }

  addResource(e) {
    const { dispatch } = this.context;
    const { listIndex } = this.props;

    addResource({
      pageX: e.pageX - 70,
      pageY: e.pageY + 40,
      callBack: (value) => {
        dispatch('addResource', {
          listIndex,
          value
        })
      }
    });
  }

  render(){
  	const { sourceData } = this.props;
    if (!sourceData.name) return null;
    const klass = sourceData.ifDeny ? 'list-item deny' : 'list-item';

    return (
    	<div className={klass}>
    		<div className="icon"></div>
    		<div className="infos">
    			<p>
    				<span className="name">{sourceData.name}</span>
    				<span> {sourceData.info}</span>
    			</p>
    			<p className="resourse-line">
    				+ <span className="addResource" onClick={this.addResource.bind(this)}>Spacify resources</span>
    				<span> | resourse: 
    				 {sourceData.resourses.map(this.getResource.bind(this))}
    				 </span>
    			</p>
          { sourceData.ifDeny ? 
      			<div className="deny">
      				<i className="iconfont">&#xe693; </i>
      				<a href="">Deny</a>
      			</div> : null
          }
    		</div>
    	</div>
    )
  }
}
