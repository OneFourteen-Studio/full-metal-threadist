import './Contact.css'
import Images from './Images'
import instaIcon from '/src/assets/icons8-instagram.svg'
import MailchimpForm from './MailchimpForm'
const Contact = () => {
  return (
    <div className='contact-container' id='contact'>

       <MailchimpForm />

        <p className='follow-us'>Don&apos;t forget to follow on instagram</p>
        
        <a href='https://www.instagram.com/fullmetalthreadist/'>
            <div className='icon-container'>
                <Images source={instaIcon} alt='instagram logo' className='icon'/>
                <p className='social-tag'>@FullMetalThreadist</p>
            </div>
        </a>
    </div>
  )
}

export default Contact