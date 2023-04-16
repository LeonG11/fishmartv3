import React from "react";
import Footer from "./Footer";

export default function FishFish() {
  return (
    <>
      <div className="fishfish">
        <div className="fish__head">FISH FISH</div>
        <div className="fish__container">
          <p>
            Мы «FISH FISH» занимаемся доставкой свежих морепродуктов и рыбы на
            любой вкус. Всегда только свежие продукты в охлажденном состоянии,
            герметичной упаковке. Наши курьеры привозят рыбу и морепродукты в
            переносных холодильных пакетах или камерах. Качество продукции для
            нас превыше всего!
          </p>
          <div className="fishfish__img"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
