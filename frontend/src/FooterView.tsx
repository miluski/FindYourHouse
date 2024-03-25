import './FooterViewStyles.css';
import facebookLogo from './assets/facebook.svg'
import instagramLogo from './assets/instagram.svg';
import linkedinLogo from './assets/linkedin.svg';
import phoneLogo from './assets/phone-flip.svg';
import pinLogo from './assets/pin-location.svg';
import emailLogo from './assets/email-open.svg';
import 'bootstrap/dist/css/bootstrap.css'; 

export default function FooterView() {
  return (
    <footer className="footer">
        <div className='JoinUsView'>
            <h3>Znajdź swój dach!</h3>
            <div>
                Dołącz do nas na: 
                <a href='https://www.facebook.com' target='_blank'>
                    <img className='miniSocialIcons' src={facebookLogo}></img>
                </a>
                <a href='https://www.instagram.com' target='_blank'>
                    <img className='miniSocialIcons' src={instagramLogo}></img>
                </a>
                <a href='https://www.linkedin.com' target='_blank'>
                    <img className='miniSocialIcons' src={linkedinLogo}></img>
                </a>
            </div>
        </div>

        <div className='ContactInfoView'>
            <div>
                <img className='miniContactIcons' src={phoneLogo}></img>
                +48 456 654 789
            </div>
            <div>
                <img className='miniContactIcons' src={emailLogo}></img>
                <a className='writeEmailStyle' href='mailto:znajdzswojdach@tu.kielce.pl?subject=Hello&body=How are you?'>znajdzswojdach@tu.kielce.pl</a>
            </div>
            <div>
                <img className='miniContactIcons' src={pinLogo}></img>
                plac Wolności 2, 25-367 Kielce
            </div>
        </div>
    </footer>
    
  );
}
