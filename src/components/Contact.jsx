import React, { useState } from 'react'

export default function Contact() {

    const[inp, setInp] = useState({inp1:"", inp2:"", inp3:""})

    function con (e){
        e.preventDefault()
        console.log(inp)
    }


  return (
   <section>
    <form>
        <h5>{inp.inp1} {inp.inp2} {inp.inp3}</h5>
        <input type="text" onChange={(e)=>setInp({ ...inp, inp1: e.target.value})} value={ inp.inp1}/>
        <br />
        <input type="text" onChange={(e)=> setInp({ ...inp, inp2: e.target.value})} value={inp.inp2}/>
        <br />
        <input type="text" onChange={(e)=> setInp({ ...inp, inp3: e.target.value})} value={inp.inp3}/>
        <br />

        <button onClick={(e)=>con(e)} className='send-btn'>Message</button>
    </form>
   </section>
  )
}
