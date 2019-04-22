import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import './index.css';

import {
	Route,
	HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

class Main extends Component {
	render() {
		return (
				<HashRouter>
				<div>
					<AppBar color="default" position="static">
						<Toolbar>
							{/* <h1 id="title">PortFolio</h1> */}
							<Navbar />
						</Toolbar>
					</AppBar>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={Projects}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
				</HashRouter>
			   );
	}
}

export default Main;
