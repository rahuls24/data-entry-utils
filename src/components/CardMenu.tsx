'use client'
import React from 'react';
import Link from 'next/link';

interface CardMenuProps {
  title: string;
  description: string;
  to: string; // New prop for the destination route
}

const CardMenu: React.FC<CardMenuProps> = ({ title, description, to }) => {
  return (
    <Link href={to}>
       <div className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden m-4 md:m-2 cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
    </Link>
  );
};

export default CardMenu;
