import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

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
        <Button onClick={CloseGuessInput} variant="secondary">Alterar local/Data<Settings2 className="size-5" /></Button>
      ) : (

        <Button onClick={OpenGuessInput} variant="primary">Continuar<ArrowRight className="size-5" /></Button>
      )}
    </div>
  );
}
