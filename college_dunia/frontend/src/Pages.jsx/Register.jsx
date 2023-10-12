import React, { useState } from 'react'

import { ImLocation } from "react-icons/im";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneFill } from "react-icons/bs";

import { FaUserGraduate, FaBookReader,FaFilter, FaBinoculars } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { SiGooglescholar } from "react-icons/si";


import '../Styles/register.css'
import { Link } from '@chakra-ui/react';


let initialState={
    name:"",
    email:"",
    phone:"",
    city:"",
    course:""
}

const Register = () => {
    const [state,setState]=useState(initialState)

    const handleChange=(e)=>{
        const {name,value}=e.target

        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:8000/register',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(state)
        }).then(res=>res.json()).then(res=>{console.log(res);alert(res.msg); setState({...initialState})})
    
    }
    return (
        <div className='parent_reg'>
            <div>
                <h2>How Collegedunia helps you in Admission</h2>
                <div className='college_details'>
                    <div >
                        <div className='college_details_icon_div1'><FaBookReader className='college_details_icon' /></div>
                        <p>Brouchure Details</p>
                    </div>
                    <div>
                        <div className='college_details_icon_div2'><FaUserGraduate className='college_details_icon'></FaUserGraduate></div>
                        <p>Check Details Fees</p>
                    </div>
                    <div>
                        <div className='college_details_icon_div3'><FaFilter className='college_details_icon'></FaFilter></div>
                        <p>Short & Apply</p>
                    </div>
                    <div>
                        <div className='college_details_icon_div4'><FaBinoculars className='college_details_icon'></FaBinoculars></div>
                        <p>24/7 Counselling</p>
                    </div>
                    <div>
                        <div className='college_details_icon_div5'><SiGooglescholar className='college_details_icon'></SiGooglescholar></div>
                        <p>Scholarships</p>
                    </div>
                    <div>
                        <div className='college_details_icon_div6'><SlCalender className='college_details_icon'></SlCalender></div>
                        <p>Application Deadlines</p>
                    </div>
                    
                   
                </div>
                <h4>What people say</h4>
            </div>

            <div>
                <div className='register_div'>
                    <div className='register_image'>
                        <img src="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch" alt="" />
                    </div>
                    <div>
                        <h2 className='orange_color'>Register Now To Apply</h2>
                        <p>Get details and latest updates</p>
                    </div>
                </div>
                <hr />
                <div className='form_div'>
                    <form action="" className='register_form'>
                        <div>
                            <RiContactsFill />
                            <input className='input_field' type="text" placeholder='Full Name' name='name' onChange={handleChange}/>
                        </div>
                        <div>
                            <MdEmail />
                            <input className='input_field' type="email" placeholder='Email Address' name='email'  onChange={handleChange}/>
                        </div>
                        <div>
                            <div>+91</div>
                            <div>
                                <BsTelephoneFill className='icon_phone' />
                                <input className='input_field' type="phone" placeholder='Mobile Number' name='phone' onChange={handleChange}/>

                            </div>
                        </div>
                        <div>

                            <ImLocation />
                            <input className='input_field' type="text" placeholder='City You Live In' name='city' onChange={handleChange}/>
                        </div>
                        <div>
                            <GiGraduateCap />
                            <input className='input_field' type="text" placeholder='Course Interest In' name='course'  onChange={handleChange}/>
                        </div>
                        <div>

                        </div>
                        <div id='button_div'>
                            <div>
                                <h3>By Submitting this form, you accept and agree to our <p>Terms of Use.</p> </h3>
                                <Link to='' className='orange_color' id='link_btn'>Already Register? Click Here To Login</Link>
                            </div>
                            <input type="submit" value={"SUBMIT"} className='submit_button' onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register