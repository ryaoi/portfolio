import React, { Component } from "react";

class Home extends Component {
	
	
	render() {
		
		const pStyle = {
			'color':'green',
		};

		const imgStyle = {
			'display': 'block',
			'margin-left': 'auto',
			'margin-right': 'auto',
			'width': '50%',
		};

		return (
				<div>
				{/* <h3>HELLO</h3> */}
				<h3>Introduction</h3>
				<h4>Ryota YAOI.</h4>
				<h4>That's my name ! I am a 22 years old student from école 42.</h4>
				<h4>I wish I was always 16 years old...</h4>
				<h4>Skills:</h4>
				<p style={pStyle}>web(front / back), devOps, AdminSys, Security,
				Embedded Stuff, iOS Application</p>
				<h4>Tools:</h4>
				<p style={pStyle}>AWS(EC2, Elastikbeanstalk, APIGateway, Lambda),
				Github, VisualStudioCode, 
				GHIDRA, radare2, gdb, afl-fuzz, vim</p>
				<h4>Hobby:</h4>
				<p style={pStyle}>Ping Pong, Coding, CTF, Seeing Segfault, Drinking coffee with  
				<a href="https://twitter.com/bunjirohase">bunjiro</a></p>		
					<h4>Certificates / Diploma :</h4>
					<li>DELF B2 - 2015</li>
					<li>Baccalauréat - 2015</li>
					<li>DL4US (Deep learning course from University of Tokyo) - 2018</li>
					<li>Ecole 42 Senior Degree - 2019(?)</li>
					<p>Thanks for visiting my portfolio.</p>
					<p>Just relax and chill...</p>
					<img style={imgStyle} src="https://thumbs.gfycat.com/AstonishingScrawnyGardensnake-size_restricted.gif" alt="loading..." />
				</div>
			   );
	}
}

export default Home;
