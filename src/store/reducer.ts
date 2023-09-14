const initialState = {
  url: {},
  genres: {},
};

export const getApiConfiguration = (state, action) => {
  console.log("---getApi", state);
  if (action.type === "getApiConfiguration") {
    return (initialState.url = action.payload);
  }
  return null;
  //   initialState.url = action.payload;
  //   return initialState.url;
  //   return (state.url = action.payload);
};
export const getGenres = (state, action) => {
  //   return (state.url = action.payload);
  return 112;
};
