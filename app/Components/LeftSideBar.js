import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function LeftSideBar() {
  return (
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
  )
}

export default LeftSideBar