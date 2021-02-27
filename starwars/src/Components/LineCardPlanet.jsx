import React, { useContext } from "react";
import Mycard from './Card';
import { Context } from "../store/appContext";
import { planetfoto } from "./image/image.js"

const LineCardPlaneta = (props) => {
    const { store, actions } = useContext(Context);
    console.log(store.planets)

    return (
        <div className="container">
            <div className="row">
              <h2 className="font-weight-bold mt-5 text-light">{props.category}</h2>
            </div>
            <div className="row scroll">
                 {store.planets.map((item, index) => {
                    return (
                        <div className="col" key={index} style={{ paddingLeft:'0', paddingRight:'30px'}}>
                        <Mycard category="planets" name={item.name} index={item.uid} url={planetfoto} />
                        </div>
                        )
                    }
                )
                } 
            </div>
        </div>    
    )
}

export default LineCardPlaneta
  