import React from 'react';

export default class Note extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      hover: true,
      

    }
    this.toggleOver = this.toggleOver.bind(this);
    

   
  }
	toggleOver(){
		this.setState({hover: !this.state.hover});
		
	}
	

	render(){
		const height = 125;
		var head;
		var deets;
		var color = '#D9453D'
		if(this.props.cost === 'Medium') {
			color = '#F3B32A';
		}
		else if(this.props.cost === 'Low') {
			color = '#4688F1';
		}

		if(this.state.hover){
			 head = {
				height,
				width: '100%',
			// border: 'solid',
			
				borderBottom: '1px solid #F2F2F2',
			};
			deets = {
			height,
			width: '35%',
			// border: 'solid',
			
			borderBottom: '1px solid #F2F2F2',
		};

			}else{

				head = {
					height,
					width: '100%',
					backgroundColor: '#e6e6e6',
			
					borderBottom: '1px solid #F2F2F2',
				};
				deets = {
					height,
					width: '35%',
					// border: 'solid',
					backgroundColor: '#e6e6e6',
					borderBottom: '1px solid #F2F2F2',

		};
			}
		return (
			
			<div style={{flexDirection: 'row', display: 'flex', flex: 1}} onMouseEnter={this.toggleOver} onMouseLeave={this.toggleOver}>
				<div style={head} >
					<div style={{flexDirection: 'row', display: 'flex', paddingLeft: 10,}}>
						<div style={{paddingTop:0, alignItems: 'flex-start'}}>
							<img src={this.props.imgURL} height="40" width="40" style={{borderRadius: '100%'}}/> 
						</div>
						<div style={styles.name}>
							<p style={{ fontWeight: '400', margin: 0 }}>{this.props.lastName}, {this.props.firstName}</p>
							<p style={{ margin: 0, color:'#757575', fontWeight: '200' }}>3/4/2018, 3:15PM</p>
						</div>
					</div>
					<div style = {styles.noteBox}>
						<p style={{ margin: 0, color:'#757575', fontWeight: '200' }}>{this.props.note}
						</p>
						
					</div>
					
					<div>

					</div>
				</div>
				<div style={deets}>
					<div style = {styles.bottomBox}>
						<div style={{height: 125, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<p style = {{fontSize: 15, textAlign: 'center', color, fontSize: 20,}}>{this.props.cost}</p>
						</div>
					</div>
				</div>
				
			</div>
		)
	}	
}

const styles = {
		
		// header: {

		// 	height: 150,
		// 	width: 500,
		// 	// border: 'solid',
			
		// 	borderBottom: '1px solid #F2F2F2',
		// 	borderRight: '1px solid #F2F2F2',
			
		// },

		// details: {
		// 	height: 150,
		// 	width: 200,
		// 	// border: 'solid',
			
		// 	borderBottom: '1px solid #F2F2F2',
		// 	borderRight: '1px solid #F2F2F2',
		// },

		name: {
			height: 40,
			width: 250,
			// backgroundColor: 'red',

			paddingLeft: 10
		},
		headerText: {
			color: 'white',
			fontSize: 65,
			textAlign: 'center'
		},

		noteBox: {
			width: '80%',
			height: '45%',
			paddingLeft: 60,
			overflow:'hidden',
		    // wordWrap: 'break-word',
			textOverflow: 'ellipsis',

		},

		description: {
			color: 'white',
			fontSize: 20,
			textAlign: 'center',
			fontStyle: 'italics',
		},

		bottomBox: {
			paddingLeft: 20,
	
			flexDirection: 'column',
			display: 'flex',
			flex: 0.25,
		},

		 bottomText: {

		 	color: 'gray',
		 	fontSize: 15,
		 	textAlign: 'center',
		 	justifyContent: 'center',
		 	alignItem: 'center'
		 	// paddingBottom: 100
		 },
		 bottomCost: {
		 	

		 

		 }
		
};