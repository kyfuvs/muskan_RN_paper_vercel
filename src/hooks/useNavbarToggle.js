import { useContext } from 'react';
import { GlobalContext } from '../appContext/globalContext';


export const useNavbarToggle = () => {
  const { navbarTogglerVisible, setNavbarTogglerVisible,
          toggle_navbarTogglerVisible } = useContext(GlobalContext);


  return {
      navbarTogglerVisible, setNavbarTogglerVisible,
      toggle_navbarTogglerVisible
  };
};
