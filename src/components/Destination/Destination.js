import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Destination.css'

export class Destination extends Component {
  render() {

    let destination = ['delhi', 'goa', 'gujarat', 'himachal-pradesh', 'jammu-kashmir', 'kerala', 'maharashtra', 'rajasthan', 'sikkim', 'tamilnadu', 'uttarakhand']
    let posters = destination.map((state,index) => {
      return(
        <Link className="link" to={`/${state}` }>
        
          <div key = {index} className={ `jumbotron state ${state}` }>
            <h1 className="text-light state-name">{state}</h1>   
			    </div>
      </Link>
      )
      
    })
    return (
      <div>
        <br />
        <div className="container-fluid">
          
          { posters }
                    
        </div>
      </div>
    )
  }
}

export default Destination
