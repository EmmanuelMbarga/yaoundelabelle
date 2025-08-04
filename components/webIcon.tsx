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