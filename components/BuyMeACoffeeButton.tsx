import Image from "next/image";
import React from "react";

function BuyMeACoffeeButton() {
  return (
    <a href="https://www.buymeacoffee.com/briuor">
      <Image
        width={200}
        height={50}
        alt="Buy Me a Coffee Widget"
        src="/bmc-button.png"
      />
    </a>
  );
}

export default BuyMeACoffeeButton;