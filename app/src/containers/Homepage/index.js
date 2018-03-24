import React from 'react';
import { connect } from 'react-redux';

import { test } from '../../redux/actions';

import DiagnosisChart from '../../components/DiagnosisChart';
import Note from '../../components/Note';
import { diagnosis } from '../../static.js';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    this.props.dispatch(test())
  }
  render() {
    return (
        <div style={{  display: 'flex', flexDirection: 'column', flex: 1,  position: 'absolute', height: '100%', width: '100%' }}>
          <div style={{ border: '1px solid #E0E0E0', paddingLeft: 20, height: 65 }}>
            <p style={{ color: '#757575', fontWeight: 'light', fontSize: 21 }}>DiagnosisIQ<br /></p>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>   
            <div style={{ flex: 1, borderRight: '1px solid #E0E0E0', paddingLeft: 20 }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <p style={{ color: '#757575', fontWeight: 'light', fontSize: 21 }}>Your Notes</p>
                <div>
                  <p>Create note</p>
                </div>
              </div>
            </div>
            <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flex: 0.5, flexDirection: 'row', borderBottom: '1px solid #E0E0E0', height: 200, padding: 20}}>
                
                <div style={{display: 'flex', flex: 0.6, flexDirection: 'row'}}>
                  <img src="http://niksingh.net/img/neel2.jpg" height={75} width={75} style={{ borderRadius: '50%' }} />
                  <p style={{ paddingLeft: 10, fontSize: 21, color: '#424242' }}>Doyner, Louis</p>
                </div>

                <div style={{ flex: 1, flexDirection: 'row', textAlign: 'right', marginRight: 50 }}>
                  <h1 style={{ color: '#4688F1'}}>$45,210</h1>
                  <p style={{ color: '#BDBDBD'}} >Reimbursment</p>
                </div>
              </div>
              
              <DiagnosisChart diagnosis={diagnosis} />
            </div>
          </div>
        </div>
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

