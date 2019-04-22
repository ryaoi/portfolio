import React from 'react';

import {
	NavLink,
} from "react-router-dom";

function NavBar(props) {

	const navStyle = {
		margin: '10px',
	}

	const Item = ({items}) => (
		<>
		{items.map(item => (
					<NavLink to={item.url} style={navStyle}>
				<h2>{item.content}</h2>
			</NavLink>
		))}
		</>
	);
	
	var items = [
		{content:"Home", url:"/"}, 
		{content:"Projects", url:"/projects"}, 
		{content:"Contact", url:"/contact"}, 
	]

    return (
		<Item items={items} />
    )
}


export default NavBar;