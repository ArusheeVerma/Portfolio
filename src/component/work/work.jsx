import './work.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
export default function Work() {
  const data=[
    {
      id:"1",
      icon:"https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=220&h=150&dpr=2",
      title:"HealthCare ",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, reprehenderit nemo accusamus obcaecati ipsa? In ipsa modi blanditiis facilis?",
    },
    {
      id:"2",
      icon:"https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=220&h=150&dpr=2",
      title:"Women ",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, reprehenderit nemo accusamus obcaecati ipsa? In ipsa modi blanditiis facilis?",
    },
    {
      id:"3",
      icon:"https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=220&h=150&dpr=2",
      title:"Database ",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, reprehenderit nemo accusamus obcaecati ipsa? In ipsa modi blanditiis facilis?",
    },
  ];
  
  const [currentSlide, setCurrentSlide]=useState(0);
  const handleClick=(way)=>{
    way==="left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1: 2) : setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0)
  }
  return( 
    <div className='work' id='work'>
      <div className="slider" 
        style={{transform: `translateX(-${currentSlide *100}vw)` }}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon}/>
                {/* https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=220&h=150&dpr=2  */}
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              {/* <img src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400&h=150&dpr=2"/> */}
              <img src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400&h=150&dpr=2"/>
            </div>
          </div>
        </div>
        ))};
      </div>
      
    
      <KeyboardArrowLeftIcon className='arrow left' fontSize="large" onClick={()=>handleClick("left")}/>
      <KeyboardArrowRightIcon className='arrow right' fontSize="large" onClick={()=>handleClick()}/>

    </div>
    );
}