const Logger = (state) => (next) => (action) => {
  console.log("Current State =>", state.getState());
  console.log("Action =>", action);
  next(action);
  console.log("Next state =>", state.getState());
};

export default Logger;
