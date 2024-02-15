import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './CustomForm'

const MailchimpForm = () => {
    const postUrl = `https://fullmetalthreadist.us13.list-manage.com/subscribe/post?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}`
     
    return (
    <>
        <MailchimpSubscribe 
            url={postUrl}
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