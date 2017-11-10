import React, { Component } from 'react';


class MesureFilter extends Component {
  
  render() {
    return (
      //passer la mm data du père vers fils
     <ul>
       
     <p>  {this.props.data.name} </p>
      <p> {this.props.data.equipe}</p>
 </ul>
    );
  }
}

export default MesureFilter;
