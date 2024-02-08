import'./recommendations-slider.css';

export const RecommendationsSlider = ({ data }) => {

    return (
            <div className="blogGroup">
                {data.info.map((slide, idx) => (
                <div className="blogCard1">
                    <img src={slide.img} alt={`Slide ${idx + 1}`} className={slide.imgClass} />
                    <div className="textBlogGroup">
                        <ul>
                            <li className='dateBlog'>{slide.data}</li>
                            <li className='blogCardMediumText'>{slide.label}</li>
                            <li className='blogCardFooterText'>{slide.title}</li>
                        </ul>
                    </div>
                </div>
                
                ))}
            </div>
      
    
    )}