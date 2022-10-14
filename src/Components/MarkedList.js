import React from 'react'

const MarkedList = () => {
  return (
  <div id='rightTop'>
    <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
      <div style={{backgroundColor:'grey',height:'30px',width:'30px',margin:'1%'}}>0</div>Not visited
      <div style={{backgroundColor:'red',height:'30px',width:'30px',margin:'1%'}}>0</div>Not answered
    </div>
    <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
      <div style={{backgroundColor:'green',height:'30px',width:'30px',margin:'1%'}}>0</div>Answered
      <div style={{backgroundColor:'blue',height:'30px',width:'30px',margin:'1%'}}>0</div>Marked for review
    </div>
    <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
      <div style={{backgroundColor:'yellow',height:'30px',width:'30px',margin:'1%'}}>0</div>Answered and Marked for Review
    </div>
  </div>
  )
}

export default MarkedList