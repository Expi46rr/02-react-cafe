// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import css from "./App.module.css";

// import { useState } from "react";
// import { Votes } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function App() {
  // const [votes, setVotes] = useState<Votes>({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  return (
    <div className={css.app}>
      <CafeInfo />
      <Notification />
      <VoteOptions />
      <VoteStats />
    </div>
  );
}

export default App;
