import { useState } from "react";
import Benefits from "./Benefits";
import Confirmed from "./Confirmed/Confirmed";
import Email from "./Email";

const MainContent = () => {
  const [isConfirmed, setConfirmed] = useState(false);

  return (
    <section className="main">
      <h1 className="title">Stay updated!</h1>
      <Benefits />
      <Email setConfirmed={setConfirmed} />
      {isConfirmed && <Confirmed setConfirmed={setConfirmed} />}
    </section>
  )
}

export default MainContent;