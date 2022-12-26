import Image from "next/image";
import React from "react";
import BMCIcon from '../public/bmc-button.png';

function BuyMeACoffeeButton() {
  return (
    <a href="https://www.buymeacoffee.com/briuor">
      <Image
        width={200}
        height={50}
        alt="Buy Me a Coffee Widget"
        src={BMCIcon}
      />
    </a>
  );
}

export default BuyMeACoffeeButton;