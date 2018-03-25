import React from 'react';


class LoginScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  render() {
    return (
        <div>
            <div style={{ border: '1px solid #E0E0E0', paddingLeft: 20, paddingRight: 20, height: 65, display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: '#757575', fontWeight: 'light', fontSize: 21, flex: 1 }}>DiagnosisIQ</p>
            </div>
            <p style={{fontSize: 32, textAlign: 'center', marginBottom: 10, marginTop: '200px', fontWeight: 'light'}}>Physician Portal</p>
            <form style={{textAlign: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', margin: '0 auto'}}>
                    <label><b>Username:</b></label>
                    <input
                        style={{ margin: '2%', padding: 10, width: '100%', height: 20, borderWidth: 0, backgroundColor: '#F0F1F3', borderRadius: '4px' }}
                        value={this.state.userName}
                        onChangeText={(userName) => this.setState({userName})}
                        placeholder="Username" />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', margin: '0 auto'}}>
                    <label><b>Password:</b></label>
                    <input
                        style={{ margin: '2%', padding: 10, width: '100%', height: 20, borderWidth: 0, backgroundColor: '#F0F1F3', borderRadius: '4px' }}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        placeholder="Password"
                        type="password"
                        secureTextEntry={true} />
                </div>
                <div onClick="" style={{color: 'white', display: 'flex', backgroundColor: '#4da6ff', height: '40px', alignItems: 'center', margin: '0 auto', width: '15%', textAlign: 'center', borderRadius: '5px', marginTop: '20px'}}>
                    <div style={{margin: '0 auto'}}>
                        Login
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default LoginScreenContainer;
