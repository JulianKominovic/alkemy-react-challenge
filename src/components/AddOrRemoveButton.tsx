import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHeroesList } from "../hooks/useHeroesList";

interface ButtonProps {
  hero: any;
}

const AddOrRemoveButton = ({ hero }: ButtonProps): JSX.Element => {
  const { addHeroToList, isHeroOnTeam, removeHeroById } = useHeroesList();

  const [addedMessage, setAddedMessage] = useState<string>("");
  const resetAddedMessage = () => setAddedMessage("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      resetAddedMessage();
    }, 4000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [addedMessage]);

  return (
    <>
      {isHeroOnTeam(hero.id) ? (
        <Button
          onClick={() => {
            removeHeroById(hero.id);
            setAddedMessage("Hero removed!");
          }}
          variant="danger"
        >
          Remove from team
        </Button>
      ) : (
        <Button
          onClick={() => {
            setAddedMessage(addHeroToList(hero));
          }}
          variant={
            addedMessage === "Hero added!"
              ? "success"
              : addedMessage === ""
              ? "primary"
              : "danger"
          }
        >
          {addedMessage === "" ? "Choose a hero" : addedMessage}
        </Button>
      )}
    </>
  );
};

export default AddOrRemoveButton;
