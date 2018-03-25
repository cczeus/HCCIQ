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

		var head;
		var deets;

		if(this.state.hover){
			 head = {
				height: 150,
				width: '100%',
			// border: 'solid',
			
				borderBottom: '1px solid #F2F2F2',
			};
			deets = {
			height: 150,
			width: '35%',
			// border: 'solid',
			
			borderBottom: '1px solid #F2F2F2',
		};

			}else{

				head = {
					height: 150,
					width: '100%',
					backgroundColor: '#e6e6e6',
			
					borderBottom: '1px solid #F2F2F2',
				};
				deets = {
					height: 150,
					width: '35%',
					// border: 'solid',
					backgroundColor: '#e6e6e6',
					borderBottom: '1px solid #F2F2F2',

		};
			}
		return (
			
			<div style={{flexDirection: 'row', display: 'flex', flex: 1}} onMouseEnter={this.toggleOver} onMouseLeave={this.toggleOver}>
				<div style={head} >
					<div style={{flexDirection: 'row', display: 'flex', paddingLeft: 10}}>
						<div style={{paddingTop:10}}>
							<img src="http://niksingh.net/img/shridhar2.jpg" height="40" width="40" style={{borderRadius: '100%'}}/> 
						</div>
						<div style={styles.name}>
							<p style={{ fontWeight: '400' }}>Meserve, Matt</p>
						</div>
					</div>
					<div style = {styles.noteBox}>
						<p style={{ margin: 0, color:'#757575', fontWeight: '200' }}>The relating to the formal aspect of art, emphasizing lines, colorsfie wjfoiejw foijew fiojewif jweoifj ewoijf oewij feowijf oiewjfoweijf eowijfeowijf weoijfijoewf..
						</p>
						
					</div>
					
					<div>

					</div>
				</div>
				<div style={deets} onClick={() => {alert("hi")}}>
					<div style = {styles.bottomBox}>
						<div>
							<p style = {styles.bottomText}>reimbursement</p>
						</div>

						<div style={{height: 50}}>
							<p style = {styles.bottomCost}>$350.00</p>
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
			paddingLeft: 40,
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
		 	// paddingBottom: 100
		 },
		 bottomCost: {
		 	fontSize: 15,

		 	textAlign: 'center',
		 	color: '#4da6ff',
		 	fontSize: 20,

		 

		 }
		
};