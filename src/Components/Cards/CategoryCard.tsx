import Image from "next/image";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string; 
  updatedAt: string; 
}

const CategoryCard = ({ cate }:{cate:Category}) => {
  return (
    <div className="flex  justify-center  ">
      <div className="relative">
        <Image
          src={cate?.image}
          alt={cate?.name}
          width={400}
          height={150}
    
        ></Image>
        <div className="absolute px-5 py-1 text-black font-semibold text-2xl uppercase bottom-0 w-full flex  justify-between">
          <h2>{cate.name}</h2>
          <div className="bg-black p-1 rounded-sm">
            <RxArrowTopRight color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
