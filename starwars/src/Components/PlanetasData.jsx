import React from 'react'
import '../style/index.scss'
import { Context } from "../store/appContext"
import { planetfoto } from "./image/image.js"
import {Link} from 'react-router-dom'
import {Table, Button} from 'react-bootstrap'

const PlanetasData = (props) => {
    const { store, actions } = React.useContext(Context)
    console.log(store.planetId)
    const item = (store.planetId)
    const { index } = props.match.params

    React.useEffect(() => {
        actions.getPlanetId(index)
    }, [])

    return (
        <div className="container " style={{ background: 'black' }}>
            <div className="row mt-5 pt-3">
                <div className="col-sm-12 col-md-6">
                    <img src={planetfoto} className="card-img-top mb-2" alt="character 1" />
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
                                <th>Diameter</th>
                                <th>Rotation period</th>
                                <th>Orbital period</th>
                                <th>Gravity</th>
                                <th>Population</th>
                                <th>Climate</th>
                                <th>Terrain</th>
                                <th>Surface water</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.properties?.diameter}</td>
                                <td>{item.properties?.rotation_period}</td>
                                <td>{item.properties?.orbital_period}</td>
                                <td>{item.properties?.gravity}</td>
                                <td>{item.properties?.population}</td>
                                <td>{item.properties?.climate}</td>
                                <td>{item.properties?.terrain}</td>
                                <td>{item.properties?.surface_water}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default PlanetasData 
