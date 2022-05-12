import './contact.styles.scss';
import { ReactComponent as InstaLogo } from '../../assets/instagram-brands.svg';
import { ReactComponent as FbLogo } from '../../assets/facebook-f-brands.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin-in-brands.svg';
import Title from '../title/title.component';


const Contact = () => {
  return (
    <div className='contact-outer'>
      <div className='contact-image-container'>
        <img src="https://i.ibb.co/MRt88gz/CPPC-BUSINESS-CARDS-MOCK-UP.webp" alt="business cards" className='contact-image'/>
      </div>
      <div className='contact-box'>


        <Title title="" colour="red" side="right" />
          <h3>Contact us</h3>
        <div className='contact-mid'>
          <p>Have any questions for us? Click above, fill the form  and we will get back to you as soon as possible. Alternatively, you can find us :</p>
        </div>
        <div className='contact-bottom'>
          <div className='contact-bottom-left'>
            {/*BUILD CONTACT US*/}
            <LinkedinLogo className='social-media-link'/>
            <a href="https://www.instagram.com/cppc_lex/" target="_blank"><InstaLogo className='social-media-link'/></a>
            <FbLogo className='social-media-link'/>
          </div>
          <div className='contact-bottom-right'>
            <p>23 Frensham road London SE9 3RG</p>
            {/*EMAIL AS LINK*/}
            <p>Tel : 0044 (0)7970 116340 | Email : <a href="info@cppcuk.com" target="_blank">info@cppcuk.com</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
