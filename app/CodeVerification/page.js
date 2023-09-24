import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LeftSideBar from '../Components/LeftSideBar'

function CodeVarification() {
  return (
    <div className='row'>
        <LeftSideBar/>
              <div className='col-lg-9 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center  text-center' >
          
          <h1 className='fw-bold mt-4'>Code Verification</h1>
          <p>You will recive an SMS with a verification code to reset your password</p>
          <p>Enter the verification code sent to your Mail id {

          }</p>
          <form className='row justify-content-center d-flex gap-md-3 gap-2 col-lg-10 col-12 mt-2'>

          <div class=" col-lg-1 col-2 p-md-1 p-0">
            <input type="tel" class="form-control border-0 p-3" id="floatingUserName"  required  />
          </div>
          <div class="  col-lg-1 col-2  p-md-1 p-0">
            <input type="tel" class="form-control border-0 p-3" id="floatingUserName"  required  />
          </div>
          <div class="  col-lg-1 col-2  p-md-1 p-0">
            <input type="tel" class="form-control border-0 p-3" id="floatingUserName"  required  />
          </div>
          <div class="  col-lg-1 col-2  p-md-1 p-0">
            <input type="tel" class="form-control border-0 p-3" id="floatingUserName"  required  />
          </div>
          <div class="  col-lg-1 col-2  p-md-1 p-0">
            <input type="tel" class="form-control border-0 p-3" id="floatingUserName"  required  />
          </div>
          <div className='text-center mt-3'>
            <button type='submit' className='btn text-light ps-5 pe-5 fw-bold'>Verify Code</button>
          </div>
          <div className='text-center mt-2'>
            <button type='submit' className='btn  ps-5 pe-5 fw-bold' style={{backgroundColor:"#fff !important",color:"#331E82"}}>Cancel</button>
          </div>

          </form>
          </div>
          </div>

          )
}

export default CodeVarification