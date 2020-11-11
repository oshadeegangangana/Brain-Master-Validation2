import React from 'react'
import '../../../App.css';

export default function   Form() {
    return (
       <form>
           <h3>Sign Up</h3>

           <div className='form-group'>
               <label>First Name</label>
               <input type='text' className='form-control' placeholder='First Name' />
           </div>
       </form>
    )
}