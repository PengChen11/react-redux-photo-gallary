const initialState = {
  dayMode: true,

};

export default function reducer ( state=initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'SETTINGS/MODE':
      return {...state, dayMode: !state.dayMode};
    default:
      return state;
  }
}

export const changeMode = () => {
  return {
    type: 'SETTINGS/MODE',
  };
};
