import { useContext } from "react";
import { Context } from "../context/context";
export default function Header() {
  const { info } = useContext(Context);
  return (
    <div>
      is header
      <p>{info}</p>
    </div>
  );
}
