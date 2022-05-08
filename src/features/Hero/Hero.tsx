import React from "react";
import { Button } from "../../components/Button/Button";

export const Hero = () => (
  <main className="bg-[linear-gradient(to right bottom, rgba(100, 149, 220, 0.4), rgba(15, 118, 153, 0.4))] h-[80vh] pt-6">
    <div className="m-auto text-center text-white">
      <img alt="Logo Biorezonance Eva Suchanová" />
      <h2 className="m-2">
        • CELOSTNÍ&nbsp;PŘÍSTUP • VYSOKÁ&nbsp;ÚSPĚŠNOST • BEZ&nbsp;LÉKŮ • <br />
        • NEINVAZIVNÍ • EFEKTIVNÍ •
      </h2>
      <Button>CO JE TO BIOREZONANCE</Button>
    </div>
  </main>
);
