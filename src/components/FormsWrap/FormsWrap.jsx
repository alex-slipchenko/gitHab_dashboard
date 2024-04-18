import React from "react";
import Form from "../Form/Form";
import Title from "../Title/Title";
import { useSelector, useDispatch } from "react-redux";
import {
  addValue1,
  addValue2,
  resset1,
  resset2,
} from "../../store/BattleSlice/slice";
import thunks from "../../store/BattleSlice/thunks";
import "./style.css";
export default function FormsWrap() {
  const dispatch = useDispatch();
  const { firstUser, secondUser } = useSelector((state) => state.battle);

  const setFirstValue = (payload) => {
    dispatch(addValue1(payload));
  };
  const setSecondValue = (payload) => {
    dispatch(addValue2(payload));
  };

  const listDispatch1 = {
    data: (payload) => dispatch(thunks.getUser1(payload)),
    resset: () => dispatch(resset1()),
  };
  const listDispatch2 = {
    data: (payload) => dispatch(thunks.getUser2(payload)),
    resset: () => dispatch(resset2()),
  };

  return (
    <div className="form_wrapper">
      <Title />

      <div>
        <Form
          user={firstUser}
          setValue={setFirstValue}
          getUser={listDispatch1}
        />
        <Form
          user={secondUser}
          setValue={setSecondValue}
          getUser={listDispatch2}
        />
      </div>
    </div>
  );
}
