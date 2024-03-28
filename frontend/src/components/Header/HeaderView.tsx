import './HeaderViewStyles.css';
import houseLogo from '../../assets/FindMyHouse_Logo.svg'
import profileLogo from '../../assets/profile.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css'; 

export default function HeaderView() {
  return (
    <header className="header mb-5">
        <div className='LeftButtonsGroup'>
            <div className='BuyingMenu'>
                <Dropdown className='MenuDropdowns'> 
                    <Dropdown.Toggle variant="secondary"> Kupuję </Dropdown.Toggle> 
                    <Dropdown.Menu> 
                        <Dropdown.Item href="#"> Mieszkanie </Dropdown.Item>
                        <Dropdown.Item href="#"> Dom </Dropdown.Item> 
                        <Dropdown.Item href="#"> Garaż </Dropdown.Item> 
                    </Dropdown.Menu> 
                </Dropdown>
            </div>
            
            <div className='RentingMenu'>
                <Dropdown className='MenuDropdowns'> 
                    <Dropdown.Toggle variant="secondary"> Wynajmuję </Dropdown.Toggle> 
                    <Dropdown.Menu> 
                        <Dropdown.Item href="#"> Mieszkanie </Dropdown.Item> 
                        <Dropdown.Item href="#"> Dom </Dropdown.Item> 
                        <Dropdown.Item href="#"> Garaż </Dropdown.Item> 
                    </Dropdown.Menu> 
                </Dropdown>
            </div>
        </div>
        
        <div className='MainHeaderLogo'>
            <a href="#MainPage"><img src={houseLogo} className="Logo" width={120} height={50} /></a>
        </div>
        <div className='RightMyAccountGroup'>
            
            <div className='AccountProfile'><img src={profileLogo} height={30} /></div>
            <div className='MyAccountDropdown'>
                <Dropdown className='MenuDropdowns'> 
                    <Dropdown.Toggle variant="secondary"> Moje konto </Dropdown.Toggle> 
                    <Dropdown.Menu> 
                        <Dropdown.Item href="#"> Moje konto </Dropdown.Item> 
                        <Dropdown.Item href="#"> Zaloguj </Dropdown.Item> 
                        <Dropdown.Item href="#"> Zarejestruj</Dropdown.Item>
                    </Dropdown.Menu> 
                </Dropdown>
            </div>
        </div>
    </header>
    
  );
}
