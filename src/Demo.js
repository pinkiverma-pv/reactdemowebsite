import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

/*class Demo extends Component
{
	render(){
		return <div className='heading_bg'><h1> Hello {this.props.name} </h1>
				<p>Welcome to my app!</p>
				</div>
	}
}*/

const Demo = ({name}) => {
	return <div className='heading_bg'><h1> Hello {name} </h1>
				<p>Welcome to my app!</p>
				</div>
}
export default Demo;