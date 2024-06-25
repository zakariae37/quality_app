import React from "react";
import Image from "next/image";

interface CardProps {
  card: {
    image: string;
    alt: string;
    username: string;
    location: string;
    content: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={card.image}
            alt={card.alt}
            width={50}
            height={50}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <h3 className="font-medium">{card.username}</h3>
            <p>{card.location}</p>
          </div>
        </div>
        <Image
          src="/assets/images/qoutes.png"
          alt="qoutes"
          width={40}
          height={40}
        />
      </div>
      <p className="mt-4 grow">{card.content}</p>
    </div>
  );
};

export default Card;
