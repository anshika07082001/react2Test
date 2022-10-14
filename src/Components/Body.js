import React from 'react'
import BodyLeft from './BodyLeft'
import MarkedList from './MarkedList'
import NumbersDiv from './NumbersDiv'
 
const Body = (props) => { 
    
  return (
  <>
    <div id='head'>
      <h2>Quiz</h2>
    </div>
    <div id='bodyDiv'>
        <BodyLeft btnSave={props.btnSave} count={props.count} inpchange={props.inpchange}/>
        <div id='divRight'>
            <MarkedList/>
            <NumbersDiv/>
        </div>
    </div>
    </>
  )
}

export default Body