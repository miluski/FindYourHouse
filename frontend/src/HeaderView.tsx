import './HeaderViewStyles.css';
import houseLogo from './assets/FindMyHouse_Logo.svg'
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css'; 

export default function HeaderView() {
  return (
    <header className="header">
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
            <a href="#MainPage"><img src={houseLogo} className="Logo" width={140} height={50} /></a>
        </div>
        <div className='RightMyAccountGroup'>
            
            <div className='AccountProfile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>  
            </div>
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
