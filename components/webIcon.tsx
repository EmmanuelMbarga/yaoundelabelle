import Image from "next/image";
import Link from "next/link";
import React from "react";

interface webIconProps {
  link: string;
  icon: string;
}

export default function WebIcon({ link, icon }: webIconProps) {
  return (
    <div className="w-10 h-10">
      <Link href={link}>
        <Image
          src={icon}
          alt="Yaounde la belle social media"
          width={400}
          height={400}
          className="w-10 h-10 object-cover"
        />
      </Link>
    </div>
  );
}

// <a href="https://facebook.com" className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition">
//   <i className="ri-facebook-fill text-white text-sm sm:text-base"></i>
// </a>
// <a href="https://instagram.com" className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition">
//   <i className="ri-instagram-line text-white text-sm sm:text-base"></i>
// </a>
// <a href="tel:+237699372160" className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition">
//   <i className="ri-phone-fill text-white text-sm sm:text-base"></i>
// </a>
// <a href="https://wa.me/237699372160" className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition">
//   <i className="ri-whatsapp-fill text-white text-sm sm:text-base"></i>
// </a>
