import React from 'react'
import '../style/index.scss'
import { Context } from "../store/appContext"
import { cars } from "./image/image.js"
import {Table, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CarsData = (props) => {
    const { store, actions } = React.useContext(Context);
    console.log(store.vehicleId)
    const item = (store.vehicleId)
    const { index } = props.match.params

    React.useEffect(()=>{
        actions.getVehicleId(index)
    })
  
    return (
        <div className="container " style={{ background: 'black' }}>
            <div className="row mt-5 pt-3">
                <div className="col-sm-12 col-md-6">
                    <img src={cars} className="card-img-top mb-2" alt="character 1" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h1 className="text-white" >{item.properties?.name}</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae obcaecati fugiat cum modi quibusdam, autem excepturi tenetur placeat a quae sint veniam dignissimos accusamus voluptates aperiam quam consectetur architecto quod.</p>
                    <br/>
                    <br/>
                    <Link to='/'>
                         <Button variant="btn btn-outline-primary primary">Volver a inicio</Button>
                    </Link>
                    <Button variant="btn btn btn-outline-warning float-right" onClick={()=>actions.agregarLista(item.properties?.name)}><i className="far fa-heart"></i> </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <hr className="solid mt-sm-2 mt-md-4" />
                    <Table responsive className="table table-borderless text-white">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Vehicle class</th>
                                <th>Manufacturer</th>
                                <th>Length</th>
                                <th>Max atmosphering speed</th>
                                <th>Cargo capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.properties?.model}</td>
                                <td>{item.properties?.vehicle_class}</td>
                                <td>{item.properties?.manufacturer}</td>
                                <td>{item.properties?.length}</td>
                                <td>{item.properties?.max_atmosphering_speed}</td>
                                <td>{item.properties?.cargo_capacity}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default CarsData 
