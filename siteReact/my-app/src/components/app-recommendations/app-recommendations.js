import './app-recommendations.css';

import blog from '../../assets/images/img/blog.png';

import { RecommendationsSlider } from './recommendations-slider/recommendations-slider';
import { Slider } from '../slider/slider';

const recommendationSliderData = {

    imgClass: "blogImg",
    slideInfo: "textBlogGroup",
    slideHeaderText: "dateBlog",
    slideMediumText: "blogCardMediumText",
    slideFooterText: "blogCardFooterText",
    sliderMobile: "blogCard2",
    info: [
    {   
        data: 'December 16, 21',
        label: 'How to move during COVID',
        title:"It depends on the size of your room It depends\n on the size of your room It depends on the size\n of your room",
        img: blog,
    },
    {   
        data: 'December 16, 21',
        label: 'How to move during COVID',
        title:"It depends on the size of your room It depends\n on the size of your room It depends on the size\n of your room",
        img: blog,
    },
    {   
        data: 'December 16, 21',
        label: 'How to move during COVID',
        title:"It depends on the size of your room It depends\n on the size of your room It depends on the size\n of your room",
        img: blog,
    },
    ]
}

const AppRecommendations = () => {
    return (
        <div className="app-recommendations">
            <div className="HeaderRecommendations">
                <div className="textRecommendations">
                    <p className="infoHeaderText">BLOG</p>
                    <h3 className="h3">Our latest moving tips</h3>
                </div>
                <button className='buttonRecomendation'>View All</button>
            </div>
            <RecommendationsSlider data={recommendationSliderData}/>
            <Slider data={recommendationSliderData}/>           
            <svg xmlns="http://www.w3.org/2000/svg" className='sladePoints' width="36" height="6" viewBox="0 0 36 6" fill="none" display={"none"}>
                <circle cx="3" cy="3" r="3" fill="#F2B91D"/>
                <circle cx="18" cy="3" r="3" fill="#E0E0E0"/>
                <circle cx="33" cy="3" r="3" fill="#E0E0E0"/>
            </svg>
        </div>
        
    )
}

export default AppRecommendations;

