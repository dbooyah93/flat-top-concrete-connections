import ReactDOM from 'react-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
ReactDOM.render(<Footer />, document.getElementById('footer'));