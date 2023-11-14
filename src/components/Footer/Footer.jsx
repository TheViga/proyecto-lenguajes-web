import React from 'react';
import './Footer.css';
import Logo from '../../../public/images/logopan.png';
import { HeartIcon, ChatAltIcon, GlobeAltIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white p-8'>
      <div className='flex justify-between items-center'>
        <div className='w-1/3'>
          <img src={Logo} alt="Logo" className="h-4 w-4 mr-2" />
          <p>El mejor pan de tu ciudad.</p>
        </div>

        <div className='w-1/3'>
          <ul>
            <li className='mb-2'>
              <HeartIcon className='h-1 w-1 text-gray-300 inline-block icons-footer' />
              <p className='text-sm inline-block ml-2'>#320202020</p>
            </li>
            <li className='mb-2'>
              <ChatAltIcon className='h-1 w-1 text-gray-300 inline-block icons-footer' />
              <p className='text-sm inline-block ml-2'>breadcrymbs@gmail.com</p>
            </li>
            <li className='mb-2'>
              <GlobeAltIcon className='h-1 w-1 text-gray-300 inline-block icons-footer' />
              <p className='text-sm inline-block ml-2'>Calle 13 # 4-12 Altico</p>
            </li>
          </ul>
        </div>

        <div className='w-1/3'>
          <ul>
            <li className='mb-2'>
              <a href='#' className='flex items-center text-gray-300'>
                <FontAwesomeIcon icon={faFacebook} className='mr-2' />
                <span>Facebook</span>
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='flex items-center text-gray-300'>
                <FontAwesomeIcon icon={faInstagram} className='mr-2' />
                <span>Instagram</span>
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='flex items-center text-gray-300'>
                <FontAwesomeIcon icon={faYoutube} className='mr-2' />
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
