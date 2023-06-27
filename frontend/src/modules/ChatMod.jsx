import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const CHANGE_FIELD = "chat/CHANGE_FIELD";
const INITIALIZE_FORM = "chat/INITIALIZE_FORM";

export const change_field = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const initialize_form = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  createRoom: {
    title: "",
    max: 2,
    password: "",
  },
};

const ChatMod = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

// const ChatMod = () => {
//   return <div></div>;
// };

export default ChatMod;
