import React from 'react';



const Searchbox=({searchfield, searchchange})=>{
	return(
		<div className = "tc pa2">
		<input className = " pa3 ba b--green bg-light-blue "type = "search" placeholder = "search users..."
		onChange={searchchange}/>
		</div>


		);
};


export default Searchbox