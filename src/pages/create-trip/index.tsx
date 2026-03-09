import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuetsSteps } from "./steps/invite-guets-step";
export function CreateTripPage() {
  const navigate = useNavigate();

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

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault
    navigate('/trips/123');
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="space-y-4">
            <DestinationAndDateStep
              CloseGuessInput={CloseGuessInput}
              OpenGuessInput={OpenGuessInput}
              isOpenGuessInput={isOpenGuessInput}
            />
            
          {isOpenGuessInput && (
            <InviteGuetsSteps
              OpenGuessModal={OpenGuessModal}
              emailToInvite={emailToInvite}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com
          nossos <br />
          <a href="#" className="text-zinc-300 underline">
            termos de uso {""}
          </a>
          e
          <a href="#" className="text-zinc-300 underline">
            {""} politicas de privacidade
          </a>
        </p>
      </div>

      {isOpenModal && (
        <InviteGuestsModal 
          emailToInvite={emailToInvite}
          AddNewEmailToInvite={AddNewEmailToInvite}
          CloseGuessModal={CloseGuessModal}
          removeEmailFromInvited={removeEmailFromInvited}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
