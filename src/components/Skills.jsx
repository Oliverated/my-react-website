import { useState } from "react";

export default function Skills() {
  const[slider,  SetSlider] = useState (false)
  const [btnSlider, setBtn] = useState(false)
  return (
    <nav className="side_bar" id={slider ? "out" : ""}>

      {/* <button className="slide_btn">click</button> */}
      <span className="skills_block" >
        <h5>Skills</h5>
        <span className='skills'>
<img src="src/skills-img/html.png" alt="" />
<img src="src/skills-img/css.png" alt="" />
<img src="src/skills-img/bootstrap.png" alt="" />
<img src="src/skills-img/atom.png" alt="" />
<img src="src/skills-img/js.png" alt="" />
<img src="src/skills-img/python.png" alt="" />
      </span>
      </span>
      <i onClick={()=>SetSlider(!slider)} className="arrow_slide fa fa-angle-double-right" id={slider ? "out" : ""}></i>
    </nav>
  );
}
