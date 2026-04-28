import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { VoteType } from "../../types/votes";
import type { Votes } from "../../types/votes";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };
  const handleReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const totalVotes = votes.good + votes.bad + votes.neutral;
  const canReset = totalVotes > 0;
  const positiveRate = Math.round((votes.good / totalVotes) * 100);
  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        canReset={canReset}
        onVote={handleVote}
        onReset={handleReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
