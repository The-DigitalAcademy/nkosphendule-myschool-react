import React from 'react'
import { Container } from 'reactstrap';
import './header.css'
import 'remixicon/fonts/remixicon.css';

const navLinks = [
    {
        display: 'Home',
        url:'#'
    },
    {
        display: 'About',
        url:'#'
    },
    {
        display: 'Courses',
        url:'#'
    },
    {
        display: 'Page',
        url:'#'
    },
    {
        display: 'Blog',
        url:'#'
    },
]

const Header = () => {
  return <section>
    <Container>
        <div className="navigation d-flex align-items-">
            <div className="logo">
                <h2>
                <i class="ri-pantone-line"></i> Learners.
                </h2>
            </div>

            <div className='nav'>.
                    <div className="nav_menu">
                        <ul className="nav_list">

                        {
                            navLinks.map((item,index)=>(
                                <li kek={index} className="nav_item">
                                <a href={item.url}>{item.display}</a>
                            </li>
                            ))
                        }

                            
                        </ul>
                    </div>

                    <div className='nav_right'>
                    <p><i class="ri-phone-line"></i> +27 887 9089</p>
                    </div>
            </div>
        </div>
    </Container>
  </section>
}

export default Header