import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/HeaderView';
import Footer from '../../components/Footer/FooterView';
import { Container } from 'react-bootstrap';
import { Offers } from './Offers';
import FilterDropdown from './FilterDropdown';

const FlatListView: React.FC = () => {
  const [offers, setOffers] = useState<Offers[]>([]);

  const mockOffers: Offers[] = [
    {
      offerType: 'Wynajem',
      propertyType: 'Mieszkanie',
      title: 'Mieszkanie 1 we Wrocławiu',
      price: 1000,
      rent: 500,
      caution: 200,
      area: 50,
      pricePerm2: 20,
      roomCount: 2,
      photos: ['https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg'],
      city: 'Wroclaw',
      houseNumber: 1,
      street: 'ul. Wroclawska',
      apartmentNumber: 1,
      description: 'Czysta 4 to nowoczesna inwestycja klasy premium zlokalizowana w centrum Wrocławia, oferująca wielowymiarowy komfort życia w mieście. W prostej formie łączy piękno nowoczesnej architektury z funkcjonalnością rozwiązań służących mieszkańcom.'
    },
    {
      offerType: 'Sprzedaż',
      propertyType: 'Dom',
      title: 'Dom 1 w Pozaniu',
      price: 2000,
      rent: 0,
      caution: 0,
      area: 100,
      pricePerm2: 20,
      roomCount: 4,
      photos: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg'],
      city: 'Poznan',
      houseNumber: 2,
      street: 'ul. Poznanska',
      apartmentNumber: 0,
      description: 'Czysta 4 to nowoczesna inwestycja klasy premium zlokalizowana w centrum Wrocławia, oferująca wielowymiarowy komfort życia w mieście. W prostej formie łączy piękno nowoczesnej architektury z funkcjonalnością rozwiązań służących mieszkańcom.'
    },
    {
      offerType: 'Sprzedaż',
      propertyType: 'Dom',
      title: 'Dom 2 w Łodzi',
      price: 2000,
      rent: 0,
      caution: 0,
      area: 100,
      pricePerm2: 20,
      roomCount: 4,
      photos: ['https://images.pexels.com/photos/20648486/pexels-photo-20648486/free-photo-of-stol-luksus-okno-apartament.jpeg'],
      city: 'Łódź',
      houseNumber: 2,
      street: 'ul. Łódzka',
      apartmentNumber: 0,
      description: 'Czysta 4 to nowoczesna inwestycja klasy premium zlokalizowana w centrum Wrocławia, oferująca wielowymiarowy komfort życia w mieście. W prostej formie łączy piękno nowoczesnej architektury z funkcjonalnością rozwiązań służących mieszkańcom..'
    },
  ];

  useEffect(() => {
    setOffers(mockOffers);
  }, []);

  return (
    <div>
      <Header />
      <Container style={{width:"100%"}} className='d-flex flex-row'>
        <div>
        {offers.map((offer: Offers) => (
          <div key={offer.title} className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={offer.photos[0]} alt={offer.title} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h3>{offer.title}</h3>
                    <button className="btn btn-primary " style={{backgroundColor: 'transparent', borderColor:"white"}}>
                      <i className="bi bi-heart text-black"></i>
                    </button>
                  </div>
                    <h5 className="card-text">{offer.price} zł</h5>
                  <div className='d-flex flex-row'>
                    <p className="card-text"> {offer.city}, {offer.street}</p>
                  </div>
                  <div className='d-flex flex-row'>
                    <p className="card-text">{offer.roomCount} pokoje, {offer.area}m, {offer.pricePerm2} zł/m</p>
                  </div>
                  <div className='d-flex flex-row'>
                    <br/>
                    {offer.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div style={{width:"100%"}} className='d-flex flex-row'>
          <div>
            <select aria-label="Sortuj" name="Sortowanie" className="rounded-0 shadow-none border border-dark-subtle form-select">
              <option value="Najniższa Cena">Cena: od najniższej</option>
              <option value="Najwyższa Cena">Cena: od najwyższej</option>
              <option value="Data najnowsze">Data dodania: najnowsze</option>
              <option value="Data najstarsze">Data dodania: najstarsze</option>
              <option value="Powierzchnia najmniejsza">Powierzchnia: od najmniejszej</option>
              <option value="Powierzchnia największa">Powierzchnia: od największej</option>
            </select>
          </div>
          <div>
            <FilterDropdown/>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default FlatListView;
