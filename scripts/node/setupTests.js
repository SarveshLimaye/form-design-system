/* eslint-disable */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Shimming window.scroll for 3rd party libraries
window.scroll = () => {}
