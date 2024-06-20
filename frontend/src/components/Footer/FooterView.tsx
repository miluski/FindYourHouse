import { Col, Container } from "react-bootstrap";
import {
	EnvelopeOpen,
	Facebook,
	GeoAlt,
	Instagram,
	Linkedin,
	TelephoneFill,
} from "react-bootstrap-icons";

export default function FooterView({ fixedBottom }: { fixedBottom?: boolean }) {
	return (
		<footer
			className={
				"footer bg-dark-subtle p-2" + (fixedBottom ? " fixed-bottom" : "")
			}>
			<Container fluid className='d-flex flex-row'>
				<Container className='d-flex flex-column justify-content-center align-content-center w-sm-60 w-md-65 flex-xs-wrap'>
					<Col>
						<p className='ff-kreon fs-3 fw-regular'>Znajdź swój dach!</p>
					</Col>
					<Col>
						<p className='ff-kreon fs-5 fw-regular'>Dołącz do nas</p>
						<Instagram
							className='cursor-pointer mx-2'
							size={32}
							onClick={() => {
								window.location.href = "https://instagram.com";
							}}
						/>
						<Facebook
							className='cursor-pointer mx-2'
							size={32}
							onClick={() => {
								window.location.href = "https://facebook.com";
							}}
						/>
						<Linkedin
							className='cursor-pointer mx-2'
							size={32}
							onClick={() => {
								window.location.href = "https://linkedin.com";
							}}
						/>
					</Col>
				</Container>
				<Container className='w-sm-40 w-xxl-35 d-flex flex-column ml-5 d-none d-lg-flex'>
					<Col md={12}>
						<TelephoneFill className='my-2 mx-5' size={32} />
						<a
							href='tel:+48456654789'
							className='text-nowrap cursor-pointer no-style-link'>
							+48 456 654 789
						</a>
					</Col>
					<Col md={12}>
						<EnvelopeOpen className='my-2 mx-5' size={32} />
						<a
							href='mailto:znajdzswojdach@tu.kielce.pl'
							className='text-nowrap cursor-pointer no-style-link'>
							znajdzswojdach@tu.kielce.pl
						</a>
					</Col>
					<Col md={12}>
						<GeoAlt className='my-2 mx-5' size={32} />
						<a
							href='https://www.google.com/maps/search/?api=1&query=plac+Wolności+2,+25-367+Kielce'
							className='text-nowrap cursor-pointer no-style-link'
							target='_blank'
							rel='noopener noreferrer'>
							plac Wolności 2, 25-367 Kielce
						</a>
					</Col>
				</Container>
			</Container>
		</footer>
	);
}
