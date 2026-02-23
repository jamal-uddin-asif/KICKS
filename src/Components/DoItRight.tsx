import Image from "next/image";
import React from "react";
import Container from "./Shared/Container";


const DoItRight = () => {
  return (
    <Container>
      <div className="uppercase w-full text-[230px] flex py-20 justify-center font-bold">
        <Image src={'https://i.ibb.co.com/RG9yQP4g/Do-it-right.png'} width={1500} height={100} alt=''/>
      </div>
    </Container>
  );
};

export default DoItRight;
