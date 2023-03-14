import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Portfolio } from "./portfolio";

export const Home = () => (
	<>
		<div class="container">
                <div class="text-center text-white">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
	<Portfolio/>
	</div>
	</>
);
