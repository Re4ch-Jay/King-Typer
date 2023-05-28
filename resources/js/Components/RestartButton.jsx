import { useRef } from "react";
import { MdRefresh } from "react-icons/md";
import useShiftEnterKey from "@/hooks/useShiftEnterKey";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  useShiftEnterKey(handleClick)

  return (
    <button
      tabIndex={-1}
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50  ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
