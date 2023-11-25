import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer:React.FC  = (props) => {
    return(
        <div className='flex justify-evenly p-8 absolute bottom-0 w-full'>
            <span className='justify-evenly'>
                <p>© 2023 Biographic page, by Damian Cortez.</p>
            </span>

            <span className='flex items-center justify-evenly text-emerald-400 gap-4'>
                <a href="https://www.linkedin.com/in/zetrocal/"><FontAwesomeIcon icon={faLinkedinIn} className='w-6'/></a>
                <a href="https://github.com/Zetrocal"><FontAwesomeIcon icon={faGithub} className=' w-6'/></a>
                <a href="https://www.facebook.com/damian.cortez.520125"><FontAwesomeIcon icon={faFacebook} className=' w-6'/></a>
            </span>
        </div>
    );
}


export default Footer;