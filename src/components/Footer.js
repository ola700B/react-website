import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
       <footer className="footer">
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <WhatsAppIcon/>
            <LinkedInIcon/>
        </div>
           <p>&copy; {new Date().getFullYear()} istanbulpizzeria.com</p>
         </footer>
    </div>
  )
}

export default Footer
