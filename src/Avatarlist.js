import React from 'react';
 const Avatarlist = (props) => {
 	return (
 			<div className = "imgstyle bg-light-purple">
			<img src="https://joeschmoe.io/api/v1/Minky" alt="Avatar" />
			<h1>{props.name}</h1>
			<p>{props.work}</p>
			</div>
 		)
 }
 export default Avatarlist;