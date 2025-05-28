import React from 'react';
import { NavLink } from 'react-router';
import NotFoundImage from '@/assets/imgs/404-asset.png';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen white-background">
      <div className="flex flex-col items-center justify-center p-4" style={{ minHeight: 'calc(100vh - 96px)' }}>
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <img 
              src={NotFoundImage} 
              alt="Página não encontrada" 
              className="w-[600px] max-w-full"
            />
          </div>
          <h1 className="text-5xl font-bold text-center mb-4 text-dark-blue">OOPS!</h1>
          <p className="text-center text-dark-blue text-lg mb-6">
            Não conseguimos encontrar a página que você estava procurando.
            <br />
            Verifique o endereço digitado ou{' '}
            <NavLink to="/" className="font-bold text-grayish-blue underline hover:text-blue">
              volte ao início
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
