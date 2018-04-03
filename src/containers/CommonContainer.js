import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions/';

export default function CommonContainer(ComposedComponent) {
  class CommonContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (<ComposedComponent {...this.props}/>);
    }
  }

  function mapStateToProps(state) {
    return {carProfileReducer: state.carProfileReducer, authReducer: state.authReducer, commonReducer: state.commonReducer};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(CommonContainer);
}

CommonContainer.contextTypes = {
  router: React.PropTypes.object
};
