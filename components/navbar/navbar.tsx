import React from "react";
import Container from "../global/container";
import Logo from "./logo";
import Translate from "./translate";
import Dropdown from "./dropdown";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col items-center justify-center py-8">
        {/* Language flags at the top */}
        <div className="flex items-center justify-center mb-6">
          <Translate />
          <div className="ml-4">
            <Dropdown />
          </div>
        </div>

        {/* Logo centered below */}
        <div className="flex justify-center">
          <Logo />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
