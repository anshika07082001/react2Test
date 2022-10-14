import { createRef, useState } from 'react';
import './App.css';
import Body from './Components/Body';
 
function App() {
  const inpAns1 = createRef()
  const inpAns2 = createRef()
  const inpAns3 = createRef()
  const inpAns4 = createRef()
  const[answers,setAnswers]=useState([4,6,8,10,12,14])
    
  const mcqArray=[
    {ques:'Find 2*2',op1:'4',op2:'9',op3:'5',op4:'1'},
    {ques:'Find 2*3',op1:'4',op2:'6',op3:'5',op4:'1'},
    {ques:'Find 2*4',op1:'8',op2:'9',op3:'5',op4:'1'},
    {ques:'Find 2*5',op1:'4',op2:'9',op3:'5',op4:'10'},
    {ques:'Find 2*6',op1:'4',op2:'9',op3:'5',op4:'12'},
    {ques:'Find 2*7',op1:'14',op2:'9',op3:'5',op4:'1'}
  ]

  const[count,setCount]=useState({cnt:0,count:mcqArray[0]})
    var inp=''
  const inpchange=(e)=>{
    inp = e.target.getAttribute('ans')
    for(var i=0;i<mcqArray.length;i++){
      if(mcqArray[i].ques){
      }
    }
  }

  const btnSave=()=>{
      if(count.cnt>=5)
      {
        return "";
      }
      count.cnt+=1
        setCount({...count,count:mcqArray[count.cnt]})
  }

  const clearbtn=()=>{
        inpAns1.current.value='off'
        inpAns2.current.value=''
        inpAns3.current.value=''
        inpAns4.current.value=''
        console.log(inpAns1.current.value)
  }

  return (
    <div className="App">
      <Body 
      clearbtn={clearbtn}
      btnSave={btnSave}
      answers={answers}
      count={count.count}
      inpchange={inpchange}/>
    </div> 
  );
}

export default App;
