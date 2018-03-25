import React from 'react';
import { connect } from 'react-redux';
import DataTables from 'material-ui-datatables';
import ReactTable from 'react-table'
import Modal from 'react-responsive-modal';

import { test, getNotes, createNote } from '../../redux/actions';

import DiagnosisChart from '../../components/DiagnosisChart';
import Note from '../../components/Note';
import Table from '../../components/Table';
import { diagnosis } from '../../static.js';

import AngleDown from 'react-icons/lib/fa/angle-down';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      activeNoteIndex: 0,
      open: false,
      firstName: '',
      lastName: '',
      note: '',
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getNotes('DrPhil'))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      notes: nextProps.doctor.doctor
    })
  }


  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleCreateNote(){
    const notes = this.state.notes;
    console.log("NOTESSS")
    console.log(notes);
    const newNote = {note: this.state.note, patient: this.state.firstName + ' ' + this.state.lastName, doctor: notes[0].doctor}
    this.props.dispatch(createNote(newNote));
    notes.push(newNote);
    this.setState({notes});
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }
  handleNoteChange(event) {
    this.setState({note: event.target.value})
  }

  // The relating to the formal aspect of art, emphasizing lines, colors, generalized or geometrical forms, etc., especially with reference to their relationship to one another.
    
  render() {
    const notes = this.state.notes;
    if(notes === undefined) return <div></div>
    if(notes.length === 0)  return <div></div>
    const activeNote = notes[this.state.activeNoteIndex];
   
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
                <div style={{ color: '#4688F1', fontWeight: 'light', fontSize: 18, display: 'flex', flexDirection: 'row' }} onClick = {this.onOpenModal}>
                  <p style={{ alignSelf: 'center', fontSize: 16 }}>CREATE</p>
                </div>
                <div>
                </div>
              </div>
              {
                notes.map((note, index) => {
                  const name = note.patient.split(' ');
                  return(
                  <div style={{ margin: 10, padding: 0}}>
                  <Note 
                    key={index} 
                    firstName={name[0]} 
                    lastName={name[1]} 
                    imgURL={note.imgURL}
                    note={note.note}
                    cost={note.cost}
                    timeOfVisit={note.timeOfVisit}/>
                    </div>
                  )
              })
            }
             
            </div>
            <div style={{ flex: 0.7, display: 'flex', flexDirection: 'column', overflowY: 'scroll', overflowX: 'hidden' }}>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'row',  minHeight: 80, padding: 20}}>
                
                <div style={{display: 'flex', flex: 3, flexDirection: 'column' }}>
                  <div style={{display: 'flex', flex: 0.6, flexDirection: 'row'}}>
                    <img src="http://niksingh.net/img/neel2.jpg" height={75} width={75} style={{ borderRadius: '50%' }} />
                    <p style={{ paddingLeft: 10, fontSize: 21, color: '#424242', fontWeight: '400' }}>{activeNote.patient.split(' ')[1]}, {activeNote.patient.split(' ')[0]}</p>
                  </div>
                   <div style={{display: 'flex', flex: 0.6, flexDirection: 'row'}}>
                  </div>
                </div>

                <div style={{ flex: 1, flexDirection: 'row', textAlign: 'right', marginRight: 50 }}>
                  <h1 style={{ color: '#4688F1', margin: 10}}>${activeNote.cost}</h1>
                  <p style={{ color: '#BDBDBD', margin: 10 }} >Reimbursment</p>
                </div>
              </div>
              <h1 style={{ paddingLeft: 20, color:'#757575', fontWeight: '300' }}>Diagnosis Report</h1>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>Doctors Note</h3>
              <p style={{ paddingLeft: 20, color:'#757575', fontWeight: '200' }} >The patienf has <span style={{ color: '#4688F1', fontWeight: '400' }}>Type I Diabetes</span> as well as <span style={{ color: '#4688F1', fontWeight: '400' }}>numbness and tingling in the feet</span> The patienf feels soreness in the throat as well as pains in the stomach
              The patienf feels soreness in the throat as well as pains in the stomach
              {activeNote.note}</p>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>Detected Symptoms</h3>
              <p style={{ paddingLeft: 20, color:'#757575', fontWeight: '200' }} >Sore throat, tingling in feet, abdominal pains</p>
               <div style={{ height: 300 }}>
                <DiagnosisChart diagnosis={activeNote.diagnosis} />
              </div>
              <h3 style={{ paddingLeft: 20, color:'#757575', fontWeight: '400', marginBottom: 5 }}>HCC Codes</h3>
              <div>
                <Table />
              </div>
             
            </div>
             <Modal open={this.state.open} onClose={this.onCloseModal} little>
                    <h2 style={{textAlign: 'center'}}>New Note</h2>
                    <form>
                        
                      <div style={{flexDirection: 'column', display: 'flex'}}>
                        
                        <div style={{}}>
                            <label>
                                 First Name: 
                                <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} style={{width: 200}} />
                          </label>
                        </div>
                        <div style={{marginTop: 25}}>
                            <label>
                                 Last Name:
                                <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} style={{width: 200}} />
                          </label>
                        </div>
                      <div style={{marginTop: 50}}>
                        <label>
                            <textarea value={this.state.note} onChange={this.handleNoteChange} placeholder="Notes" style={{height: 100, width: 300}}>
                          
                            </textarea>
                        </label>
                      </div>
                      <div style={{marginTop: 50, width: 200, height: 60, backgroundColor: '#528AEA', margin: 'auto'}} onClick={() => {this.handleCreateNote(); this.onCloseModal()}}>
                          <h3 style={{textAlign:'center', color: 'white', fontWeight: 100}}>Create Note</h3>
                      </div>
                      </div>
                    </form>
                </Modal>
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {

  return {
    doctor: state.doctor
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: () => dispatch(test),
    getNotes: () => dispatch(getNotes)
  }
}


export const HomepageContainer = connect(
  mapStateToProps,
)(Homepage);
export default HomepageContainer;

