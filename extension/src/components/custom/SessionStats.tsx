interface SessionStatsProps {
  stats: {
    maxTokens: number;
    temperature: number;
    tokensLeft: number;
    tokensSoFar: number;
    topK: number;
  };
}

export const SessionStats: React.FC<SessionStatsProps> = ({ stats }) => (
  <div className="mt-4 p-4 bg-gray-800 rounded">
    <h2 className="text-lg font-semibold">Session Stats</h2>
    <ul className="mt-2 space-y-1">
      <li>Max Tokens: {stats.maxTokens}</li>
      <li>Temperature: {stats.temperature}</li>
      <li>Tokens Left: {stats.tokensLeft}</li>
      <li>Tokens So Far: {stats.tokensSoFar}</li>
      <li>Top K: {stats.topK}</li>
    </ul>
  </div>
);
