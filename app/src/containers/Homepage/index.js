import React from 'react';
import { connect } from 'react-redux';

import { test } from '../../redux/actions';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
  componentDidMount() {
    console.log("IN HERE2")
    this.props.dispatch(test())
  }
  render() {
    console.log("PROPS")
    console.log(this.props);
   
    return (
     <div></div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: () => dispatch(test)
  }
}


export const HomepageContainer = connect(
  mapStateToProps,
)(Homepage);
export default HomepageContainer;

