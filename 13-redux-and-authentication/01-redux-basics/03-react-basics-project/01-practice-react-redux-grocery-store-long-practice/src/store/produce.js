import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

const LIKE = "produce/LIKE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const likeProduce = (produceId) => {
  return {
    type: LIKE,
    produceId,
  };
};

export const getAllProduce = (state) => Object.values(state.produce);

const initialState = {};

const produceReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    case LIKE: {
      const produce = { ...state[action.produceId] };
      produce.liked = !produce.liked;
      return { ...state, [action.produceId]: produce };
    }
    default:
      return state;
  }
};

export default produceReducer;
