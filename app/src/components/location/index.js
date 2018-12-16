import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.20243035525!2d54.94687202664003!3d25.075084027000113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sin!4v1544994499781" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location
