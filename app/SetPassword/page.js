import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function SetPassword() {
  return (
    <div className='row'>
        <div className='col-lg-3 col-md-4 col-12 d-flex  flex-column text-light ' style={{background: "linear-gradient(180deg, #59599B 0%, #24243E 59.38%, #0F0C29 100%)",height:"100vh"}}>
                    <Link href='/' className='d-flex gap-2 mt-4 text-decoration-none text-light ps-3' >
                      <Image src="/chevron-left.svg" width={20}
                              height={20}
                              alt="Picture of the author"
                              className='img-fluid'/>
                        <p className='m-0'>Return Home</p>
                    </Link>
                  <div className='d-flex flex-column gap-3 justify-content-center align-items-center mt-md-5 pt-3 '> 
                      <Image
                        src="/Group_749.png"
                        width={45}
                        height={40}
                        alt="Picture of the author"
                        className='img-fluid'
                      />
                      <h3 style={{fontWeight:"900"}} >One<span style={{fontWeight:"500"}}>Tech</span></h3>
                    
                      <Image
                        src="/handshake-img.png"
                        width={600}
                        height={500}
                        alt="Picture of the author"
                        className='img-fluid ps-3'
                      />
                      <h1 style={{fontWeight:"900"}} className='text-center mt-3'>Partnership for Business Growth</h1>
                      
                    </div>
              </div>

             
          <div className='col-lg-9 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center '>
          <h1 className='fw-bold'>NEW CREDENTIALS</h1>
         <ul className='mt-3 '>
            <li>Password must be at least 8 characters long.</li>
            <li>Password must contain at least one upper case.</li>
            <li>One lower case letter.</li>
            <li>Password must contain at least one number or special character</li>
         </ul>
          <form className='col-lg-4 mt-2'>
          <div class="form-floating  mb-3 d-flex">
            <input type="password" class="form-control border-0 hide" id="floatingNewPassword" placeholder="Password" required />
            <label for="floatingPassword" className='ps-4'> New Password </label>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className='position-absolute' style={{bottom:"30%",right:"8%",cursor:"pointer"}}>
              <g clip-path="url(#clip0_2_133)">
              <path d="M8.37061 5.80765L10.8041 8.24118L10.8157 8.11371C10.8157 6.83513 9.77666 5.79606 8.49808 5.79606L8.37061 5.80765Z" fill="#A7A3FF"/>
              <path d="M8.49813 4.25098C10.6304 4.25098 12.3609 5.98151 12.3609 8.11375C12.3609 8.61205 12.2605 9.08717 12.0867 9.52365L14.3464 11.7834C15.5129 10.8099 16.4323 9.5507 17.0001 8.11375C15.6597 4.72226 12.3648 2.31961 8.49816 2.31961C7.41658 2.31961 6.38138 2.51274 5.41956 2.86039L7.08827 4.52522C7.52471 4.35528 7.99983 4.25098 8.49813 4.25098Z" fill="#A7A3FF"/>
              <path d="M0.77254 2.14575L2.53396 3.90717L2.88548 4.25869C1.61077 5.25529 0.60259 6.58022 0 8.11372C1.33653 11.5052 4.63531 13.9079 8.49808 13.9079C9.69555 13.9079 10.8389 13.6761 11.8857 13.255L12.2141 13.5834L14.4661 15.8392L15.4511 14.8581L1.75754 1.16075L0.77254 2.14575ZM5.04477 6.41411L6.23837 7.60771C6.2036 7.77382 6.18043 7.93989 6.18043 8.11372C6.18043 9.3923 7.2195 10.4314 8.49808 10.4314C8.6719 10.4314 8.83801 10.4082 9.00025 10.3734L10.1938 11.567C9.68008 11.822 9.10842 11.9765 8.49808 11.9765C6.36584 11.9765 4.63531 10.246 4.63531 8.11372C4.63531 7.50341 4.78983 6.93171 5.04477 6.41411Z" fill="#A7A3FF"/>
              </g>
              <defs>
              <clipPath id="clip0_2_133">
              <rect width="17" height="17" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <div class="form-floating  mb-3 d-flex">
            <input type="password" class="form-control border-0 hide" id="floatingPassword1" placeholder="Re-type Password" required />
            <label for="floatingPassword" className='ps-4'>Re-type Password </label>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className='position-absolute' style={{bottom:"30%",right:"8%",cursor:"pointer"}} >
              <g clip-path="url(#clip0_2_133)">
              <path d="M8.37061 5.80765L10.8041 8.24118L10.8157 8.11371C10.8157 6.83513 9.77666 5.79606 8.49808 5.79606L8.37061 5.80765Z" fill="#A7A3FF"/>
              <path d="M8.49813 4.25098C10.6304 4.25098 12.3609 5.98151 12.3609 8.11375C12.3609 8.61205 12.2605 9.08717 12.0867 9.52365L14.3464 11.7834C15.5129 10.8099 16.4323 9.5507 17.0001 8.11375C15.6597 4.72226 12.3648 2.31961 8.49816 2.31961C7.41658 2.31961 6.38138 2.51274 5.41956 2.86039L7.08827 4.52522C7.52471 4.35528 7.99983 4.25098 8.49813 4.25098Z" fill="#A7A3FF"/>
              <path d="M0.77254 2.14575L2.53396 3.90717L2.88548 4.25869C1.61077 5.25529 0.60259 6.58022 0 8.11372C1.33653 11.5052 4.63531 13.9079 8.49808 13.9079C9.69555 13.9079 10.8389 13.6761 11.8857 13.255L12.2141 13.5834L14.4661 15.8392L15.4511 14.8581L1.75754 1.16075L0.77254 2.14575ZM5.04477 6.41411L6.23837 7.60771C6.2036 7.77382 6.18043 7.93989 6.18043 8.11372C6.18043 9.3923 7.2195 10.4314 8.49808 10.4314C8.6719 10.4314 8.83801 10.4082 9.00025 10.3734L10.1938 11.567C9.68008 11.822 9.10842 11.9765 8.49808 11.9765C6.36584 11.9765 4.63531 10.246 4.63531 8.11372C4.63531 7.50341 4.78983 6.93171 5.04477 6.41411Z" fill="#A7A3FF"/>
              </g>
              <defs>
              <clipPath id="clip0_2_133">
              <rect width="17" height="17" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <div className='text-center mt-2'>
            <button type='submit' className='btn  ps-5 pe-5  fw-bold' style={{backgroundColor:"#fff !important",color:"#331E82"}}>Verify</button>
          </div>
          </form>

          </div>

          <div className='text-center'>
            <h1>Password Updated</h1>
            <p>Your password has been updated</p>
            <button type="submit" class="btn text-center col-12 text-light ">Login</button>
          </div>
          </div>

          )
}

export default SetPassword