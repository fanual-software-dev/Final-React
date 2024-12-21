import React from 'react'

const Support = () => {
  return (
    <div className='content d-flex flex-column align-items-center'>

      <form className='w-100 d-flex justify-content-center py-3' action="">
        <fieldset className='border rounded px-4 py-3  d-flex flex-column gap-2'>
          <legend > Donation Form </legend>
          <label htmlFor="email" className='mt-3 fw-bold'>Email address <sup>*</sup></label>
          <input type="text" id='email'  placeholder='Enter email address'/>
          <label htmlFor="phone" className=' fw-bold mt-2'>Phone number <sup>*</sup></label>
          <input type="text" id='phone'  placeholder='Enter phone number'/>
          <label htmlFor="payment" className=' fw-bold mt-2'>Payment options <sup>*</sup></label>
          <div className='d-flex gap-2'>
            <input type="radio" id='Chapa' name='payment'/>
            <label htmlFor="chapa">Chapa</label>
          </div>

          <div className='d-flex gap-2 '>
            <input type="radio" id='telebirr' name='payment'/>
            <label htmlFor="chapa">Telebirr</label>
          </div>

          <div className='d-flex gap-2'>
            <input type="radio" id='CBE' name='payment'/>
            <label htmlFor="CBE">CBE</label>
          </div>

          <div className='d-flex gap-2'>
            <input type="radio" id='amole' name='payment'/>
            <label htmlFor="amole">Dashen Amole</label>
          </div>

          <div className='w-100 d-flex justify-content-center gap-5 mb-3'>
          <button className='btn1 mt-5 rounded' type='submit'>Donate</button>
          <button className='btn2 mt-5 rounded' type='clear'>Clear</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Support
