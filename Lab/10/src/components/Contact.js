import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/logoCVR.jpg'

function Contact() {
    return (
        <div>
            <img className='logoCVR' src={logo} alt='LOGO'/>
            <h1>CVR COLLEGE OF ENGINEERING</h1>
            <div>
            <h3>Contact Info:</h3>
<pre><strong>Campus:</strong>
      CVR College Of Engineering,
      Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),
      Rangareddy (D), Telangana 501 510
</pre>
                <p>Telephone(Head office): 08414 661 601</p>
                <p>
                E-mail:</p>
    <p>
        For general enquiries: principal@cvr.ac.in
    </p>
    <p>
    For admissions related enquiries: snreddy@cvr.ac.in
    </p>
    <p>
    For placements related enquiries: placement@cvr.ac.in
    </p>       
            </div>
        </div>
    )
}

export default Contact