import React from 'react';
import { Container } from 'react-bootstrap';
import "../../index.css" 
import { GeoAltFill } from 'react-bootstrap-icons';

interface FlatPhotosProps {
    photos: string[];
}

export const FlatPhotos: React.FC<FlatPhotosProps> = () => {
    const photos = Array(5).fill(
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Two_red_dice_01.svg"
    );
    return (
        <>
        
            <Container className="mb-3">
                <h2>tutaj miejsce na dodanie tytułu</h2>
            </Container>
          
            <Container className="border border-black d-flex justify-content-center mb-3">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/36/Two_red_dice_01.svg"
                    alt="obraz"
                    className="rounded"
                />
            </Container>
            <Container className="d-flex justify-content-between">
                {photos.map((photo, index) => (
                    <div key={index} className="border border-black p-2 mb-5 onclick ">
                        <img
                            src={photo}
                            alt={`User upload ${index + 1}`}
                            className="rounded img-fluid"
                        />
                    </div>
                ))}
            </Container>
            <Container className='d-flex '> 
                <GeoAltFill className=' h-21'/> 
                <h3> ul. Romana Kiełkowskiego, Zabłocie, Podgórze, Kraków, małopolskie</h3>
            </Container>
            <Container>
                <h2 className='mt-2 align-items-center  d-flex'> 989 000 zł</h2>
            </Container>
            
            
        </>
    );
};