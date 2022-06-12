import { selectDarkMode, setDarkMode } from '@/slices/DarkModeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { MoonIcon, SunIcon } from '../Icons';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => selectDarkMode(state));

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <>
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
