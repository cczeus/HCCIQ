import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];
export default class DiagnosisChart extends React.Component {
	render () {
		const LOW = '#D9453D';
		const MED = '#F3B32A';
		const HIGH = '#4688F1';
		const diagnosis = this.props.diagnosis;
		const data = [];
		for(var i in diagnosis) {
			console.log(diagnosis[i])
			const accuracy = diagnosis[i].Issue.Accuracy;
			const newData = {name: diagnosis[i].Issue.ProfName, accuracy};
			

			// if(accuracy >= 85)		newData.high = accuracy;
			// else if(accuracy >= 60)	newData.med = accuracy;
			// else 					newData.low = accuracy;

			data.push(newData)
		}
		console.log("IT IS");
		console.log(data)
	  	return (
	    	<BarChart width={800} height={400} data={data}
	            margin={{top: 5, right: 100, left: 0, bottom: 5}}>
	       <XAxis dataKey="name" height={150}  />
	       <YAxis />

	       <Tooltip/>

	      	<Bar dataKey="accuracy" fill={HIGH}>
       		{
          	data.map((entry, index) => {
          		console.log(entry);
          		var color = '#4688F1';
          		const accuracy = entry.accuracy
				if(accuracy <= 70 && accuracy > 40)	color = MED;
				else if(accuracy <= 39)				color = LOW;

            	return <Cell key={index} fill={color} />;
            })
          }
       </Bar>

	      
	      </BarChart>
	    );
  }
}
