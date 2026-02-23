import { TProduct } from "@/Types/product";
import Image from "next/image";
import React from "react";


export interface TProps {
  isNew: boolean;
  product: TProduct;
}

const ProductCard = ({ isNew = true, product }: TProps) => {
  return (
    <div className="max-w-[350px] font-sans">
      <div className="relative bg-[#ECEEF0] rounded-[28px] p-2 overflow-hidden aspect-square flex items-center justify-center overflow-hidden">
        {isNew && (
          <div className="absolute top-0 left-0 bg-[#4A69E2] text-white px-5 py-3 rounded-br-[20px] rounded-tl-[20px] font-semibold text-sm">
            New
          </div>
        )}

        <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
          <Image
            src={product?.images[0]}
            alt={product?.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <h3 className="text-2xl md:text-[28px] font-bold text-[#232321] uppercase leading-tight tracking-tight">
          {product.title}
        </h3>

        <button className="w-full bg-[#232321] hover:bg-[#323230] transition-colors text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
          <span className="text-sm uppercase tracking-widest">
            View Product -{" "}
          </span>
          <span className="text-[#FFA52F] text-sm">${product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
