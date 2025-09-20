import "./css/Footer.css";



function Footer() {
    const curYear = new Date().getFullYear();
    return <div className="Footer">@ 2025 - {curYear} Copyright NetBooking</div>;
}

export default Footer;