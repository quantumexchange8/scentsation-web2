import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import ReactDOM from 'react-dom';

function ContactUs() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
			<title>Contact Us - Scentsation </title>

			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			{/* <GoogleMap location={location} /> */}
			{/* <TwoColumnFaq /> */}
		</>
	);
}
const rootElement = document.getElementById('root');
// ReactDOM.render(<ContactUs />, rootElement);

export default ContactUs;
