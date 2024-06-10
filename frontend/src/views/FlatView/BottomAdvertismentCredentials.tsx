import { Table } from "react-bootstrap"

export const BottomAdvertismentCredentials = () => { 

    return( 
        <> 
         <div className="d-flex flex-column p-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div>
                <h5>Szczegóły ogłoszenia</h5>
                <Table bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td>Powierzchnia</td>
                            <td>49,51 m²</td>
                        </tr>
                        <tr>
                            <td>Forma własności</td>
                            <td>pełna własność</td>
                        </tr>
                        <tr>
                            <td>Liczba pokoi</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Stan wykończenia</td>
                            <td>do zamieszkania</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="mt-4">
                <h5>Opis</h5>
                <p>
                    lorum ipsum lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                    lorum ipsum lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                    lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                    lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                    lorum ipsum
                </p>
            </div>
        </div>
        </>
    )
}