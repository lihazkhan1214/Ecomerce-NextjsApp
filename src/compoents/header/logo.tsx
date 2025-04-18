import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <>
      <Image src="/logo.png" alt="not found logo" width={120} height={50} />
    </>
  );
}

export default Logo;
