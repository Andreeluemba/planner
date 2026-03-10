import { Link2, Plus } from "lucide-react";
import { Button } from "../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4 justify-between">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">
                    Reserva AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com/rooms
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">
                    Reserva AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com/rooms
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
            </div>
            <Button variant="secondary">Cadastrar novo link<Plus className="size-5"/></Button>
          </div>
  )
}