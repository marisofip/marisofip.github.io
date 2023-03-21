import React from "react";
import venta from "../../../dist/ventasretail.png";


export const Proyectos = () => {
    return (
        < div className="container mb-5 mt-5 w-75 h-75 "  id="proyectos" >
            <h3 className="text-white">Ventas de Retail con Qlick</h3>
	          <img className="rounded d-block img-fluid" src={venta} style={{borderRadius:"70%"}}/>
              <a
            href="https://2f3xqfxubgi7xfq.us.qlikcloud.com/sense/app/4ee98f9b-81b8-44d6-a3a1-b02a3dfe9144/sheet/149014b1-1fde-4f09-b5a3-72971c9a68ca/state/analysis"
            target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "300px" }}
            >
              {" "}
              <h5> Inicia sesión <br/>revisa análisis</h5>{" "}
            </a>     
	</div>
     )}