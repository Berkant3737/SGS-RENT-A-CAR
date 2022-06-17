import React from 'react'
import "./ContactUsForm.css"

function ContactUsForm() {
  return (
    <div>
      <div className="container">
          <div className="row contactus-form">
              <div className="col-12 text-center">
                  <div className="contactus-form-header">
                      <h1 className='pt-4'>İletişim</h1>
                      <h5>info@istanbulvitokiralama.com</h5>
                      <h5>+(90)212 288 24 25 / +(90) 555 865 66 19</h5>
                  </div>
                  <div className="contactus-form-body">
                      <form action="">
                        <input type="text" placeholder='Ad'/>
                        <input type="text" placeholder='Soyad'/>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ContactUsForm
