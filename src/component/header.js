import {Navbar, Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {searchPhotos} from '../store/photosReducer.js';
import {useState} from 'react';
import {changeMode} from '../store/settingsReducer.js';

export default function Header (){
  const [input, setInput] = useState();

  const dispatch = useDispatch();

  const dayMode = useSelector(state => state.settingsStore.dayMode);

  function handleInput (e) {
    setInput(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    dispatch(searchPhotos(input));
  }

  function toggleMode(){
    dispatch(changeMode());
  }

  return(
    <>
      <Navbar bg={dayMode? "info":"dark"} variant="dark" className="justify-content-between">
        <Navbar.Brand className="d-inline">Welcome to the Photo Gallary</Navbar.Brand>
        <Form onSubmit={handleSubmit} inline>
          <Form.Control type="text" placeholder="What&#39;s on your mind?" onChange={handleInput} />
          <Button variant={dayMode? "success":"secondary"} type="submit" className='ml-2'>
            Show me the photos
          </Button>
          <Button variant={dayMode? "success":"secondary"} onClick={toggleMode} className='float-right ml-2'>{dayMode? "Day Mode" : "Night Mode"}</Button>
        </Form>
      </Navbar>
    </>
  );
}