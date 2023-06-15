import React, { useState } from "react";
import Nav from "./Nav";
import { BurgerMenuBtn } from "./BurgerMenuBtn";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerMenuBtn open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenuBtn>
      <Nav open={open} />
    </>
  );
};
export default Menu;
