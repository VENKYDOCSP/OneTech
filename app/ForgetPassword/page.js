import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function forgetPassword() {
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
          <div className='col-lg-9 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center mt-4'> 
          <h2 className='fw-bold mb-4'>FORGOT PASSWORD</h2>
          <p className='text-center'>Provide your accounts email  for which you want to reset your password</p>
          <form className='col-lg-5 col-md-8 col-10'>
          <div class="form-floating mb-3">
            <input type="email" class="form-control border-0" id="floatingInput" placeholder="name@example.com" required/>
            <label for="floatingInput" className='ps-4'>Email Id</label>
          </div>

          {/* <div class="form-floating  mb-3">
            <input type="text" class="form-control border-0" id="floatingUserName" placeholder="Create User name" required  />
            <label for="floatingUserName" className='ps-4'>User name</label>
          </div> */}

         
          <div className=' text-center gap-3'>
          <button type="submit" class="btn  text-light ps-5 pe-5">Request reset password link</button>
          
          </div>
          <div className=' text-center mt-3'>
          <Link href='/'><button type='button' className='btn  ps-5 pe-5 ' style={{backgroundColor:"#fff !important",color:"#331E82"}} >Cancel</button></Link>
          
          </div>
            
            </form>
          </div>
        </div>

  )
}

export default forgetPassword