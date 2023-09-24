import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function SignIn() {
  return (
    <div className='container-fluid '>

        <div className='row'>
              <div className='col-lg-3 col-md-4 col-12 d-flex j flex-column text-light ' style={{background: "linear-gradient(180deg, #59599B 0%, #24243E 59.38%, #0F0C29 100%)",height:"100vh"}}>
                    <Link href='/' className='d-flex gap-2 mt-4 text-decoration-none text-light ps-2' >
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
                        className='img-fluid ps-2'
                      />
                      <h1 style={{fontWeight:"900"}} className='text-center mt-3'>Partnership for Business Growth</h1>
                      <div className='text-center mt-4'>
                        <p> If you don’t have an account register</p>
                        <p>You can  <span> <Link href="SignUp" className='text-decoration-none fw-bolder' style={{color:"#4D47C3"}}> Register here !</Link></span> </p>
                      </div>
                    </div>
              </div>
          
        <div className='col-lg-9 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center'> 
              <h2 className='fw-bold mb-4 mt-3'>Sign In</h2>
              <form className='col-lg-5 col-md-8 col-10'>
              <div class="form-floating mb-3">
                <input type="email" class="form-control border-0" id="floatingInput" placeholder="name@example.com" required/>
                <label for="floatingInput" className='ps-4'>Email address</label>
              </div>

              <div class="form-floating  mb-3 d-flex">
                <input type="password" class="form-control border-0 hide" id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword" className='ps-4'>Password </label>
                
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
              <Link href="/ForgetPassword" className='d-flex justify-content-end mb-2 text-decoration-none' style={{color:"#B5B5B5"}} >Forgot password ?</Link>

                <button type="submit" class="btn text-center col-12 text-light ">Login</button>

                <p style={{color:"#B5B5B5"}} className='text-center mt-md-4 mt-3'>or continue with</p>
                <div className='d-flex justify-content-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none" style={{cursor:"pointer"}}>
                    <ellipse cx="20.7287" cy="19.7286" rx="18.1376" ry="18.1376" fill="url(#paint0_linear_2_49)"/>
                    <path d="M27.4832 26.9339L28.2889 21.8146H23.2488V18.494C23.2488 17.0931 23.9515 15.7268 26.209 15.7268H28.5019V11.3685C28.5019 11.3685 26.4219 11.0226 24.4342 11.0226C20.2815 11.0226 17.5697 13.475 17.5697 17.9129V21.8146H12.9554V26.9339H17.5697V39.3101C18.4961 39.4519 19.4438 39.5245 20.4092 39.5245C21.3747 39.5245 22.3224 39.4519 23.2488 39.3101V26.9339H27.4832Z" fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_2_49" x1="20.7287" y1="1.59108" x2="20.7287" y2="37.7586" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#18ACFE"/>
                        <stop offset="1" stop-color="#0163E0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" style={{cursor:"pointer"}}>
                    <path d="M39.0521 20.7286C39.0521 30.7406 30.9356 38.8662 20.9146 38.8662C10.8936 38.8662 2.77701 30.7406 2.77701 20.7286C2.77701 10.7076 10.8936 2.59108 20.9146 2.59108C30.9356 2.59108 39.0521 10.7076 39.0521 20.7286Z" fill="#283544"/>
                    <path d="M29.416 16.1391C29.317 16.1968 26.9609 17.4153 26.9609 20.117C27.072 23.1981 29.9342 24.2786 29.9833 24.2786C29.9342 24.3363 29.5512 25.7505 28.4166 27.233C27.5162 28.5099 26.5167 29.7974 24.9991 29.7974C23.5555 29.7974 23.0373 28.9464 21.3716 28.9464C19.5828 28.9464 19.0766 29.7974 17.707 29.7974C16.1894 29.7974 15.116 28.441 14.1664 27.176C12.9328 25.5203 11.8843 22.9221 11.8473 20.4274C11.8224 19.1054 12.0944 17.806 12.7848 16.7022C13.7593 15.1613 15.499 14.1152 17.3989 14.0807C18.8545 14.035 20.1501 15.012 21.0384 15.012C21.8898 15.012 23.4815 14.0807 25.2824 14.0807C26.0597 14.0815 28.1325 14.2997 29.416 16.1391ZM20.9153 13.8168C20.6562 12.6095 21.3716 11.4023 22.0379 10.6322C22.8892 9.7009 24.2338 9.06879 25.3934 9.06879C25.4674 10.276 24.9983 11.46 24.1598 12.3224C23.4074 13.2537 22.1119 13.9548 20.9153 13.8168Z" fill="white"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" style={{cursor:"pointer"}}>
                    <path d="M39.4108 21.1315C39.4108 19.6402 39.2873 18.5519 39.02 17.4234H21.6434V24.1543H31.8431C31.6375 25.8271 30.5271 28.3462 28.0593 30.0389L28.0247 30.2643L33.5189 34.4354L33.8996 34.4727C37.3954 31.3086 39.4108 26.6533 39.4108 21.1315Z" fill="#4285F4"/>
                    <path d="M21.6422 38.8662C26.6392 38.8662 30.8342 37.2539 33.8984 34.4728L28.0581 30.0391C26.4953 31.1072 24.3977 31.8528 21.6422 31.8528C16.748 31.8528 12.5941 28.6889 11.1133 24.3157L10.8963 24.3338L5.18338 28.6667L5.10867 28.8702C8.15212 34.7952 14.4036 38.8662 21.6422 38.8662Z" fill="#34A853"/>
                    <path d="M11.1144 24.3158C10.7237 23.1873 10.4976 21.978 10.4976 20.7286C10.4976 19.479 10.7237 18.2699 11.0939 17.1414L11.0835 16.901L5.29899 12.4986L5.10973 12.5868C3.85537 15.0455 3.13562 17.8064 3.13562 20.7286C3.13562 23.6508 3.85537 26.4116 5.10973 28.8703L11.1144 24.3158Z" fill="#FBBC05"/>
                    <path d="M21.6423 9.60422C25.1176 9.60422 27.4619 11.0754 28.7986 12.3048L34.0219 7.30685C30.814 4.38469 26.6393 2.59108 21.6423 2.59108C14.4037 2.59108 8.15214 6.66192 5.10867 12.5868L11.0928 17.1414C12.5941 12.7683 16.7481 9.60422 21.6423 9.60422Z" fill="#EB4335"/>
                  </svg>
                </div>
                </form>
          </div>
      </div>
    </div>
  )
}

export default SignIn
