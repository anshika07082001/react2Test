import React from 'react'

const BodyLeft = (props) => {
  return (
  <div id='divLeft'>
    <h3>Question1</h3>
    <hr style={{width:'90%'}}/>
    <form>
      <span>{props.count.ques}</span>
      <div className='radioDiv'>
        <input type='radio' name='gff' ind='1' ans={props.count.op1} onChange={props.inpchange}/>
        <span id='a1'>{props.count.op1}</span>
      </div>
      <div className='radioDiv'>
        <input type='radio'name='gff' ind='2' ans={props.count.op2} onChange={props.inpchange}/>
        <span id='a2'>{props.count.op2}</span>
      </div>
      <div className='radioDiv'>
        <input type='radio' name='gff' ind='3' ans={props.count.op3} onChange={props.inpchange}/>
        <span id='a3'>{props.count.op3}</span>
      </div>
      <div className='radioDiv'>
        <input type='radio' name='gff' ind='4' ans={props.count.op4} onChange={props.inpchange}/>
        <span id='a4'>{props.count.op4}</span>
      </div>
    </form> 
    <div id='btnDiv'>
      <div className='btnTop'>
        <button style={{backgroundColor:'green'}} onClick={props.btnSave}>Save&Next</button>
        <button style={{backgroundColor:'grey'}} onClick={props.clearbtn}>Clear Response</button>
        <button style={{backgroundColor:'rgb(182, 182, 84)'}}>Make for Review</button>
      </div>
      <div className='btnTop'>
        <button style={{backgroundColor:'blue'}}>Save&Mark for Review and next</button>
        <button style={{backgroundColor:'darkGrey'}}>submit & close</button>
      </div>
    </div>
  </div>
  )
}

export default BodyLeft