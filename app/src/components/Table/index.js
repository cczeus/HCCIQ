import React from 'react';


export default class Table extends React.Component {
	render () {
		return (
	    	<div style={{ display: 'flex', flexDirection: 'column', height: 300}}>
	    		<div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #E0E0E0', paddingLeft: 20, height: 50 }}>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>ICD-10</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>Desc</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>Risk Factor</p>
	    		</div>

	    		{
	    			this.props.codes.map((code, index) => {
	    				return(
	    					<div key={index} style={{ display: 'flex', flexDirection: 'row', flex: 1, borderBottom: '1px solid #E0E0E0', paddingLeft: 20, height: 100 }}>
				    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>{code.code}</p>
				    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>{code.description}</p>
				    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>{code.score}</p>
	    					</div>
	    				)
	    			})
	    		}
	    		
	    	</div>
	    )
  }
}
