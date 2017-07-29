import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Container from './container';
import Footer from './footer';
import { data as mockData } from '../mods/mock';

import './index.scss';

export default class App extends Component {
  static childContextTypes = {
    dispatch: PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
  }

  getChildContext() {
    return {
      dispatch: this.props.dispatch
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch('init', mockData);
  }

  render(){
    const { data } = this.props;
    return (
      <div className="body">
        <Header />
        <Container sourceData={data} />
      </div>
    )
  }
}
