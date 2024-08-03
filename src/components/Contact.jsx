import React, { useState } from 'react'

export default function Contact() {

    const[inp, setInp] = useState({inp1:"", inp1b:"", inp2:"", inp3:""})

    function con (e){
        e.preventDefault()
        console.log(inp)
    }


  return (
   <section>

    <form>
        <fieldset className='contact-block'> <legend>Email Contact</legend>
                    {/* <h5>{inp.inp1} {inp.inp1b} {inp.inp2} {inp.inp3}</h5> */}
        <input className='first_name' placeholder='First Name' type="text" onChange={(e)=>setInp({ ...inp, inp1: e.target.value})} value={ inp.inp1}/>
        <input className='last_name' placeholder='Last Name' type="text" onChange={(e)=>setInp({ ...inp, inp1b: e.target.value})} value={ inp.inp1b}/>
        <br />
        <input className='email' placeholder='Email Address' type="text" onChange={(e)=> setInp({ ...inp, inp2: e.target.value})} value={inp.inp2}/>
        <br />
        <textarea className='msg' placeholder='Message' type="text" onChange={(e)=> setInp({ ...inp, inp3: e.target.value})} value={inp.inp3}/>
        <br />

        <button onClick={(e)=>con(e)} className='send-btn'>Message</button>
        </fieldset>

        <fieldset className='social-block'> <legend>Socials Accounts</legend>
<p>
            <div><i className="fab fa-facebook"></i><span>@Victor O. Oliver</span></div>
            <div><i className="fab fa-instagram"></i><span>@Oliverated</span></div>   
            <div><i className="fab fa-linkedin"></i><span>@Osakpolor Ovbiebo</span></div>   
            <div><i className="fab fa-x"></i><span>@LODoliver1</span></div>
            <div><i className="fab fa-github"></i><span>@Oliverated</span></div>
</p>
        </fieldset>

    </form>

    <footer>C: @ <span>Ovbiebo Oliver</span> </footer>
   </section>
  )
}
