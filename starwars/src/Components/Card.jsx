import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Context } from "../store/appContext"
import {Link} from 'react-router-dom'
import '../style/index.scss'

const Mycard = (props) => {
    const { store, actions } = React.useContext(Context);

    return (
        <div>
            <Card className="card text-white mb-3 shadow" style={{ width: '18rem', background:'black'}}>
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                     <Card.Text className="fw-light" >
                     {props.name} is the mysterious Eye of the starwars.
                    </Card.Text> 
                    <Link to={"/"+ props.category+"/"+ props.index}>
					<Button variant="btn btn-outline-primary primary" onClick={()=>actions.getPersonsApiId(props.index)}>Learn More!</Button>
				    </Link>
                    <Button variant="btn btn btn-outline-warning float-right" onClick={()=>actions.agregarLista(props.name)}><i className="far fa-heart"></i></Button>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mycard
