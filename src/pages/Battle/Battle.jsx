import React from "react";
import FormsWrap from "../../components/FormsWrap/FormsWrap";
import BattleButton from "../../components/BattleButton/BattleButton";
import Restart from "../../components/Restart/Restart";
export default function Battle() {
  return (
    <>
      <FormsWrap />
      <BattleButton />
      <Restart />
    </>
  );
}
