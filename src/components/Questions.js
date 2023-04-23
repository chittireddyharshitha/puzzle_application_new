import React,{useEffect, useState} from 'react'
import data from '../database/data'
import { useDispatch, useSelector } from 'react-redux'
// custom hook
import { useFetchQestion } from '../hooks/FetchTasks'
import { updateResultAction } from '../redux/result_red'
import { updateResult } from '../hooks/setResult'


export default function Questions({onChecked}) {

    const[checked,setChecked]=useState(undefined)
    
    const [{ isLoading , apiData , serverError},setGetData]=useFetchQestion()
    useSelector(state=>console.log(state));
    const dispatch=useDispatch()
    
    useSelector(state=>console.log(state));
    const questions =useSelector(state=>state.questions.queue[state.questions.trace])
    const trace =useSelector(state=>state.questions.trace)
    const result =useSelector(state=>state.result.result)
    const question=data[trace]
    useEffect(()=>{
        
        dispatch(updateResult({trace,checked}))
    },[checked])
    
    
    function onSelect(i){
  
        //console.log(i)
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace,checked}))
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
  return (
    <div className='questions'>
      <h2 className='text-light'>{question.question}</h2>
      <ul key={question.id}>
       {
        question.options.map((q,i)=>(
            <li key={i}>
                <input type="radio"
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={()=>onSelect(i)} />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace]==i ?'checked':''}`}></div>
            </li>
        ))
       }
      </ul>
    </div>
  )
}

