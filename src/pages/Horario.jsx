import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Navigation } from '../components';
import './Horario.css';

import Mapa from '../../public/images/mapa-usco.png';

const Horario = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Contenido */}
      <div className="flex-1 flex justify-center items-center">
        {/* Mitad izquierda con título y mapa */}
        <div className="w-1/2 p-4 mr-4">
          <h2 className="text-2xl font-bold mb-4 text-center">¿Dónde encontrarnos?</h2>
          <img
            className='mapa-usco'
            src={Mapa}
            alt='Mapa usco'
          />
        </div>

        {/* Mitad derecha con dos títulos y párrafos */}
        <div className="w-1/2 p-4 right-half ml-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-center">Horario</h3>
            <p className='text-center'>Lunes a Viernes de 6 am - 8 pm</p>
            <p className='text-center'>Sábados 7am - 10pm</p>
            <p className='text-center'>Domingo y festivos 8 am - 6 pm</p>
          </div>
          <div className='texto-2'>
            <h3 className="text-lg font-bold text-center">Dirección</h3>
            <p className='text-center'>Nos encontramos dentro de la universidad surcolombiana. Frente al bloque de educación en la zona de comidas de la hermosa alma mater. Calle 9 # 14-03</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Horario;
