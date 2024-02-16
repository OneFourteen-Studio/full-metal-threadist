import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './CustomForm'

const MailchimpForm = () => {
    const url = `https://fullmetalthreadist.us13.list-manage.com/subscribe/post?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`
    
    return (
    <>
        <MailchimpSubscribe 
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    </>
  )
}

export default MailchimpForm