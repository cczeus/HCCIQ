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
            <h1 style={{paddingLeft: '5%'}}>DiagnosisIQ</h1>
            <h1 style={{textAlign: 'center', marginTop: '200px'}}>Physician Portal</h1>
            <form style={{textAlign: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', margin: '0 auto'}}>
                    <label><b>Username:</b></label>
                    <input
                        style={{ margin: '2%', padding: 10, width: '100%', height: 20, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                        value={this.state.userName}
                        onChangeText={(userName) => this.setState({userName})}
                        placeholder="Username" />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', margin: '0 auto'}}>
                    <label><b>Password:</b></label>
                    <input
                        style={{ margin: '2%', padding: 10, width: '100%', height: 20, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        placeholder="Username"
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
