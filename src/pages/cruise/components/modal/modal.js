import React, { Component, PropTypes as T } from 'react';
import './index.scss';

class Modal extends Component {

	static propTypes = {
		data: T.object
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			show: true
		};

		this.element = null;
	}

	confirm = () => {
		const value = this.element.value;
		const { callBack } = this.props.data;
		callBack && callBack(value);
		this.hide();
	}

	hide = () => {
		this.setState({
			show: false
		});

		this.props.close && this.props.close();
	}

	arrowDown() {
		const { pageY } = this.props.data;
		const pageHeight = document.body.clientWidth;
		if(pageHeight - pageY < 300) {
			return true;
		}
	}

	render() {
		let { pageX, pageY, arrowDown } = this.props.data;
		const show = this.state.show;
		const checkPos = this.arrowDown();
		const arrowClass = checkPos ? 'arrow down' : 'arrow';
		pageY = checkPos ? pageY - 220 : pageY;
		if(!show) return null;
		return (
			<div className="modal">
				<div className="mask" onClick={this.hide} onWheel={(e) => e.preventDefault()}></div>
				<div className="modal-content" style={{left: pageX, top: pageY}}>
					<div className={arrowClass}></div>
					<div className="discrible">(separate multiple resources name with commas)</div>
					<input 
						type="text" 
						className="input" 
						placeholder="please input resources" 
						ref={
							(node) => this.element = node
						} />
					<div className="btn" onClick={this.confirm}>Add resources</div>
					<div className="btn" onClick={this.hide}>close</div>
				</div>
			</div>
		)
	}
}

export default Modal;