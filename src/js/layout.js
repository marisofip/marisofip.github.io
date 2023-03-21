import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Redes } from "./views/redes";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Portfolio } from "./views/portfolio";
import { About } from "./views/about";
import { Study } from "./views/estudios";
import { Proyectos } from "./views/proyectos";
//import {VideoPlayer} from "./views/videoPlayer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						
						<Route path="/" element={<Home />} />
						<Route path="/sobremi" element={<About />} />
						<Route path="/estudios" element={<Study />} />
						<Route path="/portafolio" element={<Portfolio />} />
						<Route path="/proyectos" element={<Proyectos />} />
						<Route path="/contactame" element={<Redes />} />
						{/*<Route path="/VideoPlayer" element={<VideoPlayer />} />*/}
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
