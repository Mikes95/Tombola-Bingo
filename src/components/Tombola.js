import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

import './style.scss'

class Tombola extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      array: [],
      clicked: []

    }

    this.selectNumber = this.selectNumber.bind(this)
  }

  selectNumber(item) {

    var select = this.state.clicked
    if (item.selected == false) {
      item.selected = true
      select.unshift(item)
      this.setState({ clicked: select })
    }
    else {
      item.selected = false
      console.log(select.indexOf(item))
      select.splice(select.indexOf(item), 1);
      this.setState({ clicked: select })
    }


  }

  componentDidMount() {
    var numbers = []
    for (var i = 1; i < 91; i++) {
      numbers.push({ "number": i, "selected": false })
    }
    this.setState({ array: numbers })
    console.log(this.state.array)
  }


  render() {



    return (
      <div className='container'>
        <div className="Tombola">
          {this.state.array.map(function (item, i) {



            if (item.selected == true) return <div className="rectSelected" onClick={() => this.selectNumber(item)}>{item.number}</div>
            else return <div className="rect" onClick={() => this.selectNumber(item)}>{item.number}</div>


          }, this)
          }
        </div>

        <div className='infoContainer'>
          <div className='lastNumbers'>
          
          <div className='Title'>Ultimi usciti: </div>
         



          <div className='NumbersSelected'>
            {this.state.clicked.map(function (item, i) {
              if (i == 0 && item.selected == true) return <div className="circleB" onClick={() => this.selectNumber(item)} > {item.number}</div>
              if (i < 3 && item.selected == true) return <div className="circle" onClick={() => this.selectNumber(item)} > {item.number}</div>

            }, this)
            }
          </div>

          </div>
        </div>
      </div>
    )
  }
}


export default Tombola;
