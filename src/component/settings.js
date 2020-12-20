import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../store/settingsReducer.js';


export default function Settings() {
  const currentMode = useSelector(state => state.settingsStore.dayMode);
  const dispatch = useDispatch();

  function toggleMode(){
    dispatch(changeMode());
  }

  return (
    <div >

      <Button onClick={toggleMode} className='float-right'>{currentMode? "Day Mode" : "Night Mode"}</Button>

    </div>
  );
}