import { useState, type FormEvent } from "react";

//import { MapPin, Calender, ArrowRight, UserRoundPlus, Setting2, X, AtSign } from 'lucide-react'
export function CreatTripPage() {
  const [isOpenGuessInput, setisOpenGuessInput] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [isConfirmTripModalOpen, setisConfirmTripModalOpen] = useState(false);
  const [emailToInvite, setemailToInvite] = useState([
    "andresavio@gmail.com",
    "andresavio@gmail.com",
  ]);

  function OpenGuessInput() {
    setisOpenGuessInput(true);
  }

  function CloseGuessInput() {
    setisOpenGuessInput(false);
  }

  function OpenGuessModal() {
    setisOpenModal(true);
  }

  function CloseGuessModal() {
    setisOpenModal(false);
  }

  function openConfirmTripModal() {
    setisConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setisConfirmTripModalOpen(false);
  }

  function AddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailToInvite.includes(email)) {
      return alert("Não pode cadastrar um email duas vezes");
    }

    setemailToInvite([...emailToInvite, email]);

    event.currentTarget.reset();
  }
  function removeEmailFromInvited(emailToRemove: String) {
    const newEmailList = emailToInvite.filter(
      (email) => email !== emailToRemove,
    );

    setemailToInvite(newEmailList);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-sm gap-3">
            <div className="flex items-center gap-2 flex-1">
              {/*<MapPin className="size-5 text-zinc-400"/>*/}
              <input
                type="text"
                disabled={isOpenGuessInput}
                placeholder="Para onde você vai ?"
                className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              {/*<Calender className="size-5 text-zinc-400"/>*/}
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
                {/* <Settings2 className="size-5"/> */}
              </button>
            ) : (
              <button
                onClick={OpenGuessInput}
                className="bg-lime-300 text-lime-950 cursor-pointer flex items-center gap-2 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
              >
                Continuar
                {/*<ArrowRight className="size-5"/>*/}
              </button>
            )}
          </div>
          {isOpenGuessInput && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-sm gap-3">
              <button
                type="button"
                onClick={OpenGuessModal}
                className="flex items-center gap-2 flex-1 text-left"
              >
                {/*<UserRoundPlus className="size-5 text-zinc-400"/>*/}
                {emailToInvite.length > 0 ? (
                  <span className="text-zinc-100 text-lg flex-1">
                    {emailToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1">
                    Quem estara na viagem ?
                  </span>
                )}
              </button>
              <div className="w-px h-6 bg-zinc-800" />

              <button
                onClick={openConfirmTripModal}
                className="bg-lime-300 text-lime-950 flex items-center gap-2 rounded-lg px-5 py-2 font-medium cursor-pointer hover:bg-lime-400"
              >
                Confirmar viagem
                {/*<ArrowRight className="size-5"/>*/}
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com
          nossos <br />
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>
          e
          <a href="#" className="text-zinc-300 underline">
            politicas de privacidade
          </a>
        </p>
      </div>

      {isOpenModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[648px] rounded-xl py-5 px-6 shadow-sm bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                {/* <button><X className="size-5 text-zinc-400"/></button> */}
                <button
                  onClick={CloseGuessModal}
                  className="size-5 bg-zinc-700 border border-zinc-400/50 cursor-pointer hover:bg-zinc-900 rounded-full p-4 flex items-center justify-center text-zinc-400"
                >
                  X
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados vão receber e-mail para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailToInvite.map((email) => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      onClick={() => {
                        removeEmailFromInvited(email);
                      }}
                      type="button"
                    >
                      {/* <X className="size-4 text-zinc-400"/> */}
                      <p className="size-4 text-zinc-400 cursor-pointer">x</p>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form
              onSubmit={AddNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
            >
              <div className="px-2 flex items-center gap-2 flex-1">
                {/* <Atsign className="text-zinc-400 size-5"/> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
                />
              </div>

              <button
                type="submit"
                className="bg-lime-300 text-lime-950 flex items-center gap-2 rounded-lg px-5 py-2 font-medium cursor-pointer hover:bg-lime-400"
              >
                Convidar
                {/*<ArrowRight className="size-5"/>*/}
              </button>
            </form>
          </div>
        </div>
      )}

      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[648px] rounded-xl py-5 px-6 shadow-sm bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar Criação de viagem
                </h2>
                {/* <button><X className="size-5 text-zinc-400"/></button> */}
                <button
                  onClick={closeConfirmTripModal}
                  className="size-5 bg-zinc-700 border border-zinc-400/50 cursor-pointer hover:bg-zinc-900 rounded-full p-4 flex items-center justify-center text-zinc-400"
                >
                  X
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem{" "}
                <span className="text-zinc-100 font-semibold">
                  Cabinda, Angola
                </span>{" "}
                nas datas de{" "}
                <span className="text-zinc-100 font-semibold">
                  {" "}
                  05 e 07 de Abril de 2026{" "}
                </span>{" "}
                preencha seus dados a baixo.
              </p>
            </div>
            <div className="flex flex-wrap gap-2"></div>

            <form onSubmit={AddNewEmailToInvite} className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                {/* <User className="text-zinc-400 size-5"/> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                {/* <User className="text-zinc-400 size-5"/> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email pessoal"
                  className="bg-transparent text-lg outline-none placeholder-zinc-400 flex-1"
                />
              </div>

              <button
                type="submit"
                className="bg-lime-300 w-full justify-center text-lime-950 flex items-center gap-2 rounded-lg px-5 h-11 font-medium cursor-pointer hover:bg-lime-400"
              >
                Confirmar criação da viagem
                {/*<ArrowRight className="size-5"/>*/}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
