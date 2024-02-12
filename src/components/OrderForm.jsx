import './OrderForm.css'

const OrderForm = () => {
  return (
    <div>
        <h2>Ready to order?</h2>
        <form name='order' method='POST' data-netlify='true'>
            <p>
                <label>Full name</label>
                <input type='text' name='name' />
            </p>
            <p>
                <label>Email</label>
                <input type='text' name='email'/>
            </p>
        </form>
    </div>
    
  )
}

export default OrderForm