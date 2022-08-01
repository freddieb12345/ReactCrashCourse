import React from 'react';

const ContactCard = (props) => {
    console.log(props)
    return (
        <div className='contact-card'>
            <img src={props.imgUrl} alt="" />
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default ContactCard;
