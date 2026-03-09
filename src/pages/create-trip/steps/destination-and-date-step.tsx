import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps{
  isOpenGuessInput: boolean
  CloseGuessInput: () => void
  OpenGuessInput: () => void
}

export function DestinationAndDateStep({CloseGuessInput, isOpenGuessInput, OpenGuessInput}:DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-sm gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isOpenGuessInput}
          placeholder="Para onde você vai ?"
          className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isOpenGuessInput}
          placeholder="Quando ?"
          className="bg-transparent text-lg outline-none placeholder-zinc-400 w-40"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isOpenGuessInput ? (
        <button
          onClick={CloseGuessInput}
          className="bg-zinc-800 text-zinc-200 cursor-pointer flex items-center gap-2 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700"
        >
          Alterar local/Data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={OpenGuessInput}
          className="bg-lime-300 text-lime-950 cursor-pointer flex items-center gap-2 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
