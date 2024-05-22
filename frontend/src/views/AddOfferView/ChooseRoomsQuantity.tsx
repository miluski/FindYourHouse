import { Form } from 'react-bootstrap';


export const ChooseRoomQuantity = () => {
  return (
      <Form className='w-27 mb-2'>
      <Form.Select >
        <option value="one"> 1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
        <option value="five">5</option>
        <option value="six">6</option>
        <option value="more">more</option>
      </Form.Select>
      </Form>
  );
};

