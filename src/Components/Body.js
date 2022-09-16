import React, { createRef, useState } from 'react'

const Body = () => {
    const inpAns1 = createRef()
    const inpAns2 = createRef()
    const inpAns3 = createRef()
    const inpAns4 = createRef()
    const[answers,setAnswers]=useState([4,32,45,32,49])
    const[ans1,setAns1]=useState()
    var inp,inp2,inp3,inp4
    const mcqArray=[
        {ques:'Find 2*2',op1:'4',op2:'9',op3:'5',op5:'1'},
        {ques:'Find 2*3',op1:'4',op2:'6',op3:'5',op5:'1'},
        {ques:'Find 2*4',op1:'8',op2:'9',op3:'5',op5:'1'},
        {ques:'Find 2*5',op1:'4',op2:'9',op3:'5',op5:'10'},
        {ques:'Find 2*6',op1:'4',op2:'9',op3:'5',op5:'12'},
        {ques:'Find 2*7',op1:'14',op2:'9',op3:'5',op5:'1'}
    ]
    const inpchange=(e)=>{
        inp = e.target.getAttribute('ind')
    }
   
    const btnSave=(e)=>{
        if(inp=='1'){
            var a1 = (document.getElementById('a1').innerHTML)
            if(a1==answers[0]){
                alert("1")
            }
        }
        if(inp=='2'){
            var a2 = (document.getElementById('a2').innerHTML)
            if(a2==answers[0]){
                alert("2")
            }
        }
        if(inp=='3'){
            var a3 = (document.getElementById('a3').innerHTML)
            if(a3==answers[0]){
                
            }
        }
        if(inp=='4'){
            var a4 = (document.getElementById('a4').innerHTML)
            if(a4==answers[0]){
                
            }
        }
        setAns1(answers[0])
        console.log(setAns1)
    }
    const clearbtn=()=>{
        inpAns1.current.value='off'
        inpAns2.current.value=''
        inpAns3.current.value=''
        inpAns4.current.value=''
        console.log(inpAns1.current.value)
    }
  return (<>
    <div id='head'>
      <h2>Quiz</h2>
    </div>
    <div id='bodyDiv'>
        <div id='divLeft'>
            <h3>Question1</h3>
            <hr style={{width:'90%'}}/>
            <form>
            <span>{mcqArray[0].ques}</span>
            <div className='radioDiv'>
            <input type='radio' name='gff' ind='1' onChange={inpchange}/><span id='a1'>{mcqArray[0].op1}</span>
            </div>
            <div className='radioDiv'>
            <input type='radio'name='gff' ind='2' onChange={inpchange}/><span id='a2'>{mcqArray[0].op2}</span>
            </div>
            <div className='radioDiv'>
            <input type='radio' name='gff' ind='3' onChange={inpchange}/><span id='a3'>{mcqArray[0].op3}</span>
            </div>
            <div className='radioDiv'>
            <input type='radio' name='gff' ind='4' onChange={inpchange}/><span id='a4'>{mcqArray[0].op5}</span>
            </div>
            </form>
            <div id='btnDiv'>
                <div className='btnTop'>
                <button style={{backgroundColor:'green'}} onClick={btnSave}>Save&Next</button>
                <button style={{backgroundColor:'grey'}} onClick={clearbtn}>Clear Response</button>
                <button style={{backgroundColor:'rgb(182, 182, 84)'}}>Make for Review</button>
                </div>
                <div className='btnTop'>
                <button style={{backgroundColor:'blue'}}>Save&Mark for Review and next</button>
                <button style={{backgroundColor:'darkGrey'}}>submit & close</button>
                </div>
            </div>
        </div>
        <div id='divRight'>
            <div id='rightTop'>
                <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
                <div style={{backgroundColor:'grey',height:'30px',width:'30px',margin:'1%'}}></div>Not visited
                <div style={{backgroundColor:'red',height:'30px',width:'30px',margin:'1%'}}></div>Not answered
                </div>
                <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
                <div style={{backgroundColor:'green',height:'30px',width:'30px',margin:'1%'}}></div>Answered
                <div style={{backgroundColor:'blue',height:'30px',width:'30px',margin:'1%'}}></div>Marked for review
                </div>
                <div style={{display:'flex',flexdirection:'row',height:'20%',width:'70%',margin:'2%'}}>
                <div style={{backgroundColor:'yellow',height:'30px',width:'30px',margin:'1%'}}></div>Answered and Marked for Review
                </div>
            </div>
            <div id='rightDown'>
                <div className='small'>1</div>
                <div className='small'>2</div>
                <div className='small'>3</div>
                <div className='small'>4</div>
                <div className='small'>5</div>
                <div className='small'>6</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body