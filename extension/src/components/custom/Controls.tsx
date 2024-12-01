interface ControlsProps {
  stats: {
    temperature: number;
    topK: number;
  };
  onReset: () => void;
  onUpdateSession: (updatedStats: any) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  stats,
  onReset,
  onUpdateSession,
}) => (
  <div className="mt-4 flex items-center gap-4">
    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
    >
      Reset
    </button>
    <div className="flex gap-2">
      <label>Temperature</label>
      <input
        type="range"
        min="0.1"
        max="1.0"
        step="0.1"
        value={stats.temperature}
        onChange={(e) =>
          onUpdateSession({ temperature: Number(e.target.value) })
        }
      />
    </div>
  </div>
);
