import './Info.css'
import Images from './Images'
import bulletPoint from '/src/assets/bullet-point.svg'
const Info = () => {
  return (
    <div className='general-info-container' id='general-info'>
        <div className='info-title-container'>
            <h2 className='info-title'>General Information</h2>
            <p className='info-tag'>Here&apos;s some information about my custom work! </p>
        </div>

        <div className='question1 questions'>
            <Images source={bulletPoint} alt='alchemy symbol as a bullet point' className='bullet-point'/>

            <div className='question-text'>
                <h3 className='question-title'>What kind of projects do you do?</h3>
                <p className='question-text'>I specialize in working on anime or cartoon characters. However, providing your ideas do not include explicit and inappropriate content, all ideas are welcomed!</p>
            </div>
            
        </div>

        <div className='question2 questions'>
            <Images source={bulletPoint} alt='alchemy symbol as a bullet point' className='bullet-point'/>

            <div className='question-text'>
                <h3 className='question-title'>How long will I wait?</h3>
                <p className='question-text'>The amount of time it takes me to finish a piece depends on the size, and the amount of detail. A full break down of the work time for your order will be provided when your order is placed.</p>
            </div>
        </div>

        <div className='question3 questions'>
            <Images source={bulletPoint} alt='alchemy symbol as a bullet point' className='bullet-point'/>

            <div className='question-text'>
                <h3 className='question-title'>Pricing</h3>
                <p className='question-text'>
                    The price for your piece will depend on the size and the amount of detail your image, as well as the amount of time it will take to complete it. Below are the starting prices for each size hoop I use.
                </p>
                <ul className='price-bullets'>
                    <li>5 inch hoop (2 - 4in image) ~ $10</li>
                    <li>7 inch Hoop (5 - 6in image) ~ $20</li>
                    <li>10 inch hoop (7 - 9in image) ~ $30</li>
                </ul>
                <p className='question-text'>
                    If you would like a size that is not listed please feel free to email me to see what I can do for you! The final prices for your piece(s) will be quoted to you in an email after you have placed your order.
                </p>


            </div>
        </div>
        
    </div>
  )
}

export default Info