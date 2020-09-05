import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = () => {
	return (
		<div>
		<h1>Welcome Here!</h1>
			<Avatarlist name="Jonnie" work="Web Developer" id="1"/>
			<Avatarlist name="Jonny" work="UI Developer" id="2"/>
			<Avatarlist name="Jacky" work="Backend Developer" id="3"/>
			<Avatarlist name="Micky" work="Fullstack Developer" id="4"/>
			
			<button>Subscribe</button>
		</div>
		)
	
}
export default Avatar;