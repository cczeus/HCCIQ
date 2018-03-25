import React from 'react';
import { connect } from 'react-redux';
import DataTables from 'material-ui-datatables';
import ReactTable from 'react-table'

import { test } from '../../redux/actions';

import DiagnosisChart from '../../components/DiagnosisChart';
import Note from '../../components/Note';
import Table from '../../components/Table';
import { diagnosis } from '../../static.js';

import AngleDown from 'react-icons/lib/fa/angle-down';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    this.props.dispatch(test())
  }
  // The relating to the formal aspect of art, emphasizing lines, colors, generalized or geometrical forms, etc., especially with reference to their relationship to one another.
    
  render() {
    return (
        <div style={{  display: 'flex', flexDirection: 'column', flex: 1,  position: 'absolute', height: '100%', width: '100%', overflowX: 'none' }}>
          <div style={{ border: '1px solid #E0E0E0', paddingLeft: 20, paddingRight: 20, height: 65, display: 'flex', flexDirection: 'row' }}>
            <p style={{ color: '#757575', fontWeight: 'light', fontSize: 21, flex: 1 }}>DiagnosisIQ</p>
            <img src="http://niksingh.net/img/pic.jpg" height={40} width={40} style={{ borderRadius: '50%', alignSelf: 'center', marginRight: 5 }} />
            <AngleDown style={{ alignSelf: 'center', fontSize: 21 }} />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>   
            <div style={{ flex: 0.30, flexDirection: 'column', display: 'flex', borderRight: '2px solid #E0E0E0', paddingLeft: 20, paddingRight: 20 }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <p style={{ color: '#757575', fontWeight: 'light', fontSize: 21, flex: 1 }}>Your Notes</p>
                <div style={{ color: '#4688F1', fontWeight: 'light', fontSize: 18, display: 'flex', flexDirection: 'row' }}>
                  <p style={{ alignSelf: 'center', fontSize: 16 }}>CREATE</p>
                </div>
                <div>
                </div>
              </div>
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
            </div>
            <div style={{ flex: 0.7, display: 'flex', flexDirection: 'column', overflowY: 'scroll', overflowX: 'hidden' }}>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'row', borderBottom: '1px solid #E0E0E0',  minHeight: 80, padding: 20}}>
                
                <div style={{display: 'flex', flex: 3, flexDirection: 'column' }}>
                  <div style={{display: 'flex', flex: 0.6, flexDirection: 'row'}}>
                    <img src="http://niksingh.net/img/neel2.jpg" height={75} width={75} style={{ borderRadius: '50%' }} />
                    <p style={{ paddingLeft: 10, fontSize: 21, color: '#424242', fontWeight: '400' }}>Doyner, Louis</p>
                  </div>
                   <div style={{display: 'flex', flex: 0.6, flexDirection: 'row'}}>
                  </div>
                </div>

                <div style={{ flex: 1, flexDirection: 'row', textAlign: 'right', marginRight: 50 }}>
                  <h1 style={{ color: '#4688F1', margin: 10}}>$45,210</h1>
                  <p style={{ color: '#BDBDBD', margin: 10 }} >Reimbursment</p>
                </div>
              </div>
              <h1 style={{ paddingLeft: 20, color:'#757575', fontWeight: '300' }}>Diagnosis Report</h1>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>Doctors Note</h3>
              <p style={{ paddingLeft: 20, color:'#757575', fontWeight: '200' }} >The patienf has <span style={{ color: '#4688F1', fontWeight: '400' }}>Type I Diabetes</span> as well as <span style={{ color: '#4688F1', fontWeight: '400' }}>numbness and tingling in the feet</span> The patienf feels soreness in the throat as well as pains in the stomach
              The patienf feels soreness in the throat as well as pains in the stomach</p>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>Detected Symptoms</h3>
              <p style={{ paddingLeft: 20, color:'#757575', fontWeight: '200' }} >Sore throat, tingling in feet, abdominal pains</p>
               <div style={{ height: 300 }}>
                <DiagnosisChart diagnosis={diagnosis} />
              </div>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>HCC Codes</h3>
              <div>
                <Table />
              </div>
             
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

