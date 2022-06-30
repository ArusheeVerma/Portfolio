import'./testimonial.scss';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Testimonial() {
  const data=[
    {
      id:"1",
      name:"ABC",
      title:"HOD, Department of Artificial Intelligence",
      img:"https://images.pexels.com/photos/7395304/pexels-photo-7395304.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      desc:"Lorem ipsum dolor, sit amet consectet totam perspiciatis veritatis ipsum doloribus suscipit dignissimos odio.",
      
    },
    {
      id:"2",
      name:"DEF",
      title:"HOD, Department of Computer Science",
      img:"https://images.pexels.com/photos/5905898/pexels-photo-5905898.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nu doloribus suscipit dignissimos odio.",
      featured:"true",
    },
    {
      id:"3",
      name:"GHI",
      title:"HOD, Department of Data Analytics",
      img:"https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nulla eaque quis totam perspiciats odio.",
      
    },
  ]
  
  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="container">
        {data.map(d=>(

        
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            {/* <img src="" className='left'/> */}
            <SubdirectoryArrowRightIcon className="left"/>
            {/* <img src="https://images.pexels.com/photos/5905898/pexels-photo-5905898.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2" className='user'/> */}
            <img src={d.img} className="user"/>
            {/* <img src="" className='right'/> */}
            <LinkedInIcon className="right"/>
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}