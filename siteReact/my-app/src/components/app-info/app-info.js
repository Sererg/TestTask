import'./app-info.css';

import icon1 from '../../assets/images/img/icon1.png';
import icon2 from '../../assets/images/img/icon2.png';
import icon3 from '../../assets/images/img/icon3.png';
import icon4 from '../../assets/images/img/icon4.png';
import icon6 from '../../assets/images/img/icon6.png';
import { Slider } from '../slider/slider';

const sliderData = {

  imgClass: "icon",
  slideInfo: "slide__info",
  slideMediumText: "infoMediumCardText",
  slideFooterText: "infoFooterCardText",
  sliderMobile: "sliderMobile",

  info: [
  { 
    id:1,
    label: 'Residential Moving',
    title:"Managing every detail, big or small,\n to help you have the smoothest\n move possible. We’ll help you \n arrive home",
    img: icon1,
    
  },
  {
    id:2,
    label: 'Commerical Moving',
    title: `Fast & efficient moving for businesses,\n while ensuring careful handling of\n equipment. We’ll support your business\n venture`,
    img: icon2,
  },
  {
    id:3,
    label: 'Packing and Unpacking services',
    title: `Careful packing, crating, wrapping,\n and unpacking so you won’t have to\n worry. We’ll organize the moving\n parts`,
    img: icon3,
  },
  {
    id:4,
    label: 'Furniture disassembly service',
    title: `Servicing your appliances,\n electronics, over-sized furniture,\n and more. We’ll care for your\n valuables`,
    img: icon4,
  },
  {
    id:5,
    label: 'Long-Distance Movers',
    title: `From cross-country moves to\n anywhere in between, distance\n moving can be simple. We’ll help\n you get there`,
    img: icon1,
  },
  {
    id:6,
    label: 'Storage Units',
    title: `Climate controlled facilities to\n meet any of your storage needs.\n We’ll keep your items safe`,
    img: icon6,
  },
]
    
}

const AppInfo = () => {
    return (
        <div className="app-info">
            <div className="informatioServises">
                <p className="infoHeaderText">what we do</p>
                <h1 className="h1">Professional Moving Services</h1>
                <p className="infoMediumText">
                    From cross-country moves to anywhere in between,<br/>
                    distance moving can be simple. We’ll help you get there</p>
            </div>
            <Slider data={sliderData}/>
            <div className="formCard">
              {sliderData.info.map((slide, idx) => (
              <div className="card1">
                <img src={slide.img} alt={`Slide ${idx + 1}`} className={sliderData.imgClass} />
                <div className="slide__info">
                
                  <div className="infoMediumCardText">{slide.label}</div>
                  <div className="infoFooterCardText">{slide.title}</div>
                </div>
              </div>
                    
                ))}
              
            </div>
       
                <svg xmlns="http://www.w3.org/2000/svg" className='sladePoints' width="36" height="6" viewBox="0 0 36 6" fill="none" display={"none"}>
                    <circle cx="3" cy="3" r="3" fill="#F2B91D"/>
                    <circle cx="18" cy="3" r="3" fill="#E0E0E0"/>
                    <circle cx="33" cy="3" r="3" fill="#E0E0E0"/>
                </svg>
        </div>
        
    )}
export default AppInfo;
