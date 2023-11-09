import { useContext } from 'react'
import { authContaxt } from '../Customhooks/Provider.jsx';

function useAuth() {
  return useContext(authContaxt);
}

export default useAuth