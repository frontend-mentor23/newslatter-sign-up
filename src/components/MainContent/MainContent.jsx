import { useState } from "react";
import Benefits from "./Benefits";
import Confirmed from "./Confirmed/Confirmed";
import Email from "./Email";

const MainContent = () => {
  const [email, setEmail] = useState({
    address: '',
    isConfirmed: false
  });

  return (
    <section className="main">
      <h1 className="title">Stay updated!</h1>
      <Benefits />
      <Email setEmail={setEmail} />
      {email.isConfirmed && <Confirmed email={email} setEmail={setEmail} />}
    </section>
  )
}

export default MainContent;