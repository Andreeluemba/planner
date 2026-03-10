import { ArrowRight, AtSign, User, X, } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "../components/button";

interface ConfirmTripModalProps{
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({closeConfirmTripModal,createTrip}:ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[648px] rounded-xl py-5 px-6 shadow-sm bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar Criação de viagem
                </h2>
                <button onClick={closeConfirmTripModal}><X className="size-5 text-zinc-400"/></button>
                {/* <button
                  onClick={closeConfirmTripModal}
                  className="size-5 bg-zinc-700 border border-zinc-400/50 cursor-pointer hover:bg-zinc-900 rounded-full p-4 flex items-center justify-center text-zinc-400"
                >
                  X
                </button> */}
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem {""}
                <span className="text-zinc-100 font-semibold">
                  Cabinda, Angola {""}
                </span>
                nas datas de
                <span className="text-zinc-100 font-semibold">
                  {""} 05 e 07 de Abril de 2026
                </span>
                {""} preencha seus dados a baixo.
              </p>
            </div>
            <div className="flex flex-wrap gap-2"></div>

            <form onSubmit={createTrip} className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5"/>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="text-zinc-400 size-5"/>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email pessoal"
                  className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
                />
              </div> 

              <Button type="submit" variant="primary" size="full">Confirmar criação da viagem
                <ArrowRight className="size-5"/></Button>
            </form>
          </div>
        </div>
  );
}
