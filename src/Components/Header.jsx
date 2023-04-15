import React from "react";
import LogoSvg from "./LogoSvg";
import LinkHeader from "./LinkHeader";
import Dot from "./Dot";
import IconSvg from "./IconSvg";
import { ReactComponent as UserSvg } from "./img/user.svg";
import { ReactComponent as BasketSvg } from "./img/basket.svg";

export default function Header() {
  return (
    <header className="header">
      <LogoSvg />
      <div className="middle">
        <LinkHeader path="/fishfish" text="FISH FISH" />
        <Dot />
        <LinkHeader path="/menu" text="АССОРТИМЕНТ" />
        <Dot />
        <LinkHeader path="/about" text="КОНТАКТЫ" />
      </div>
      <div className="last">
        <IconSvg path="/login" svg={<UserSvg />} />
        <IconSvg path="/basket" svg={<BasketSvg />} />
      </div>
    </header>
  );
}
