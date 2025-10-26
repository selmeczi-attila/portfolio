interface AvailableProps {
  isAvailable: boolean;
}

export default function Available({ isAvailable }: AvailableProps) {
  return (
    <>
      {isAvailable && (
        <span className="inline-flex items-center gap-2 mt-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-white">Looking for job opportunities</span>
        </span>
      )}
    </>
  );
}
