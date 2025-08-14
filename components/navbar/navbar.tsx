import React from "react";
import Container from "../global/container";
import Logo from "./logo";
import Translate from "./translate";
import Dropdown from "./dropdown";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <div>
          <Translate />
          <Dropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
