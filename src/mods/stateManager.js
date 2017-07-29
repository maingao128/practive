import React, { Component } from 'react';

const noop = () => {};
const createStores = (reducers, initalState) => (Comp) => {
	class App extends Component {
		constructor(props, context) {
			super(props, context);
			this.state = initalState
		}

		dispatch = (type, data) => { 
			const state = (reducers[type] || noop)(data, this.state);
			if(state === undefined) {
				console.warn('reducers should not return undefined');
				return;
			}

			if(state === this.state) {
				return;
			}

			this.setState(state);

		}

		render() {
			const props = {
				dispatch: this.dispatch,
				data: this.state,
				...this.props
			}
			return (
				<Comp {...props} />
			)
		}	
	};

	return App
}


export default createStores