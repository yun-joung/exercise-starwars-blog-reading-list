import React, { useContext } from "react";
import Mycard from './Card';
import { Context } from "../store/appContext";
import { characterfoto } from "./image/image.js"

const LineCardCharec = (props) => {
    const { store, actions } = useContext(Context);
    console.log(store.persons)

    return (
        <div className="container">
            <div className="row">
              <h2 className="font-weight-bold mt-5 text-light">{props.category}</h2>
            </div>
            <div className="row scroll">
                 {store.persons.map((item, index) => {
                    return (
                        <div className="col" key={index} style={{ paddingLeft:'0', paddingRight:'30px'}}>
                        <Mycard category="chareacters" name={item.name} 
                         gender={item.gender}
                         hair_color={item.hair_color}
                         eye_color={item.eye_color}
                         index={item.uid} url={characterfoto} />
                        </div>
                        )
                    }
                )
                } 
            </div>
        </div>    
    )
}

export default LineCardCharec 
  