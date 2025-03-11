import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/footer-logo.png';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { RiMapPin2Line, RiPhoneLine, RiMailLine } from "react-icons/ri";

const quick__links = [
  {
    path: '/home',
    display: 'Hogar'
  },
  {
    path: '/about',
    display: 'Acerca de'
  },
  {
    path: '/events',
    display: 'Eventos'
  }

]

const quick__links2 = [
  {
    path: '/about',
    display: 'Galería'
  },
  {
    path: '/about',
    display: 'Acceso'
  },
  {
    path: '/about',
    display: 'Registro'
  },
  {
    path: '/about',
    display: 'Equipo'
  }

]

const contact_detail = [
  {
    title: "Address",
    icon: <RiMapPin2Line/>,
    info:"Calle Falsa 123, 28001 Madrid, España"
  },
  {
    title: "Phone",
    icon: <RiPhoneLine/>,
    info:"+34 000 000 000"
  },
  {
    title: "Email",
    icon: <RiMailLine/>,
    info:"admin@freelancerclientsdemo.website"
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer' style={{background: '#2A2A35',}}>
      <div className="footer-grid">
          <div className="footer__logo-section">

            <img src={logo} alt="" />
            <p style={{color: 'white', fontSize: 18, fontStyle: 'italic'}}>
            Experimente el mundo, un evento a la vez...</p>

            <div className="social-links">
              <span>
                <Link to='#'><i><FaTwitter/></i></Link>
              </span>
              <span>
                <Link to='#'><i><FaFacebookF/></i></Link>
              </span>
              <span>
                <Link to='#'><i><FaLinkedinIn/></i></Link>
              </span>
              <span>
                <Link to='#'><i><FaInstagram/></i></Link>
              </span>
            </div>

          </div>

        <div className='footer__discover-section'>
          <h3 className="footer__link-title">Descubrir</h3>

          <div className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))
            }
          </div>
        </div>

        <div className='footer__quicklinks-section'>
          <h3 className="footer__link-title">Enlaces rápidos
          </h3>

          <div className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))
            }
          </div>
        </div>


        <div className='footer__contact-section'>
          <h5 className="footer__link-title">Contacto
          </h5>

          <div className='footer__quick-links'>     
              {
              contact_detail.map((item, index) => (
                <li className='contact-detail' key={index}>
                  <h6
    style={{
      display: "flex",
      alignItems: "center",
      gap: "5px", // Adds spacing between the icon and title text
      margin: "0", // Removes default margin from <h6>
    }}
  >
    <span
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <i style={{ fontSize: "20px" }}>{item.icon}</i>
    </span>
    {item.title}:
  </h6>
                  <p>{item.info}</p>
                </li>
              ))
              }
          </div>

        </div>
      </div>
      <div className='footer__copyright'>
              <p className="copyright">Copyright {year}, diseño y desarrollo de Melila. Reservados todos los derechos</p>
      </div>  
    </footer>
  )
}

export default Footer
