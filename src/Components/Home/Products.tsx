import React from "react";
import Container from "../Shared/Container";
import ProductCard from "../Cards/ProductCart";
import { TProduct } from "@/Types/product";

const Products =async () => {

  const res = await fetch('https://api.escuelajs.co/api/v1/products')
  const data = await res.json()
  console.log(data)
  const products = data.slice(2,6)
  console.log(products)
    
  return (
    <Container>
      <div className="flex justify-between items-end">
        <h2 className="font-semibold text-2xl md:text-7xl uppercase ">Don’t miss out <br /> new drops</h2>
        <button className="bg-[#4A69E2] text-white  px-7 py-2 rounded-sm">Shop New Drops</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-6">
        {
          products.map((product: TProduct)=> <ProductCard key={product.id} isNew={true} product={product}/>)
        }
      </div>
    </Container>
  );
};

export default Products;
