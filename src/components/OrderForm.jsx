import './OrderForm.css'

const OrderForm = ({ onSubmit }) => {


  return (
    <div className='order-form-container'>
        <h2 className='form-title'>Ready to order?</h2>
        <h3 className='reminder'>* Please read the general information before you place your order</h3>
        <form name='order-form' method='POST' className='order-form' encType="multipart/form-data" onSubmit={onSubmit}>
          <input type='hidden' name='form-name' value='order-form' />

          <div className='top-form-container'>
            <input required type='text' name='name' autoComplete='name' className='form-input' placeholder='Full name' />
            <input required type='text' name='email' autoComplete='email' className='form-input' placeholder='Email'/>
            <input required type='text' name='street-address' autoComplete='address-line1' className='form-input' placeholder='Address'/>
            <input type='text' name='apt-suite' autoComplete='address-line2' className='form-input' placeholder='Apartment, suite etc.'/>
          </div>

          <div className='address-container'>
            <input required type='text' name='city' autoComplete='address-level2' className=' city form-input' placeholder='City'/>
            <input required type='text' name='state' autoComplete='address-level1' className=' state form-input' placeholder='State'/>
            <input required type='text' name='zip-code' autoComplete='postal-code' className=' zip form-input' placeholder='Zip code'/>
            

          </div>
          
          <div className='project-size'>
            <select required name='hoop-size' className='dropdown-options'>
              <option value=''>Hoop Size</option>
              <option value='5 inches'>5 inches</option>
              <option value='7 inches'>7 inches</option>
              <option value='10 inches'>10 inches</option>
            </select>

            <div className='image-size-container'>
              <label htmlFor='image' className='image-label'>Your Image size (in inches)</label>
              <input required type='number' name='image-size' className='image-size'/>
            </div>
            
          </div> 
          
          <div className='upload-container'>
            <label htmlFor='file' className='upload-label'>Add an image to upload</label>
            <input  required name='file' type='file' className='upload' accept='image/*' />
          </div>
          
          <div className='checkbox-container'>
          <input type='checkbox' name='consent' className='checkbox'/>
          <label htmlFor='consent' className='checkbox-label'>I consent to my order being featured on social media</label>
          </div>
          
          <button type='submit' className='submit-btn'>Place order</button>
        </form>
    </div>
    
  )
}

export default OrderForm