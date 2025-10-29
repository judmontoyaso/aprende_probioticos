'use client';

import { FC } from 'react';
import OptimizedImage from './OptimizedImage';

const AlimentosImageWithModal: FC = () => {
  return (
    <div className="text-center my-8">
      <div className="inline-block">
        <OptimizedImage
          src="/images/alimentos-probioticos.png"
          alt="Alimentos ricos en probióticos"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Alimentos naturales ricos en probióticos
      </p>
    </div>
  );
};

export default AlimentosImageWithModal;
