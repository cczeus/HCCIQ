import React from 'react';


export default class Table extends React.Component {
	render () {
		return (
	    	<div style={{ display: 'flex', flexDirection: 'column', height: 200}}>
	    		<div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #E0E0E0', paddingLeft: 20, height: 50 }}>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>ICD-10</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>Desc</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '400' }}>Risk Factor</p>
	    		</div>
	    		<div style={{ display: 'flex', flexDirection: 'row', flex: 1, borderBottom: '1px solid #E0E0E0', paddingLeft: 20 }}>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>E11.21</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>T2 DM soreness</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>0.53</p>
	    		</div>
	    		<div style={{ display: 'flex', flexDirection: 'row', flex: 1, borderBottom: '1px solid #E0E0E0', paddingLeft: 20 }}>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>E11.21</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>T2 DM soreness</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>0.53</p>
	    		</div>
	    		<div style={{ display: 'flex', flexDirection: 'row', flex: 1, borderBottom: '1px solid #E0E0E0', paddingLeft: 20 }}>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>E11.21</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>T2 DM soreness</p>
	    			<p style={{ display: 'flex', flex: 1, paddingLeft: 20, color:'#757575', fontWeight: '300' }}>0.53</p>
	    		</div>
	    	</div>
	    )
  }
}
