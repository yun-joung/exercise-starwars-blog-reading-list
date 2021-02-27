import React, { useContext } from "react";
import Mycard from './Card';
import { Context } from "../store/appContext";
import { cars } from "./image/image.js"

const LineCardVehicle = (props) => {
    const { store, actions } = useContext(Context);
    console.log(store. vehicles)

    return (
        <div className="container">
            <div className="row">
              <h2 className="font-weight-bold mt-5 text-light">{props.category}</h2>
            </div>
            <div className="row scroll">
                 {store.vehicles.map((item, index) => {
                    return (
                        <div className="col" key={index} style={{ paddingLeft:'0', paddingRight:'30px'}}>
                        <Mycard category="vehicles" name={item.name} index={item.uid} url={cars} />
                        </div>
                        )
                    }
                )
                } 
            </div>
        </div>    
    )
}

export default LineCardVehicle
  