import { createContext } from 'react';

const HoroscopeContext = createContext();

export default HoroscopeContext;

//* Created the horoscope context object and then exported to the main.jsx component.

//* Wrapped the main jsx in the horoscopeContext and provided a value of {sign:'Leo'}

//*In the details component imported useContext and then passed in the HoroscopeContext
