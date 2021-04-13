import React, { Component } from 'react';


const UserDisplay = (props) => {
    const {first_name} = props
        return(
            <div class="the_content">
                <p>
                    First Name: {first_name}
                </p>
                {/* <p>
                    Last Name: {last_name}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Confirm Password: {confirm_password}
                </p>                 */}
            </div>
        )
}


export default UserDisplay;