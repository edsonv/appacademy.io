const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
const INCREMENT_ITEM = "cart/INCREMENT_ITEM";
const DECREMENT_ITEM = "cart/DECREMENT_ITEM";
const UPDATE_COUNT = "cart/UPDATE_COUNT";
const PURCHASE = "cart/PURCHASE";
const TOGGLE_CART = "cart/TOGGLE_CART";

export const addToCart = (produceId) => {
  return {
    type: ADD_TO_CART,
    produceId,
  };
};

export const removeFromCart = (produceId) => {
  return {
    type: REMOVE_FROM_CART,
    produceId,
  };
};

export const incrementItem = (produceId) => {
  return {
    type: INCREMENT_ITEM,
    produceId,
  };
};

export const decrementItem = (produceId) => {
  return {
    type: DECREMENT_ITEM,
    produceId,
  };
};

export const updateCount = (produceId, count) => {
  return { type: UPDATE_COUNT, produceId, count: Number(count) };
};

export const purchase = () => {
  return { type: PURCHASE };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const extractCartItems = (state) => {
  const { byId, order } = state.cart;
  const produce = state.produce;

  return order.map((id) => ({ ...byId[id], ...(produce[id] ?? {}) }));
};

const initialState = { byId: {}, order: [], showCart: false };

const incrementItemCount = (state, produceId, delta = 1) => {
  const { byId } = state;
  const item = byId[produceId];
  if (!item) return state;

  const newItem = { ...item, count: item.count + delta };
  return { ...state, byId: { ...byId, [produceId]: newItem }, showCart: true };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { byId, order } = state;
      if (Object.hasOwn(byId, action.produceId)) {
        return incrementItemCount(state, action.produceId);
      }
      const newItem = { id: action.produceId, count: 1 };
      return {
        byId: { ...byId, [action.produceId]: newItem },
        order: [...order, action.produceId],
        showCart: true,
      };
    }
    case REMOVE_FROM_CART: {
      const { [action.produceId]: _, ...newById } = state.byId;
      const newOrder = state.order.filter((id) => id !== action.produceId);
      return {
        byId: newById,
        order: newOrder,
      };
    }
    case INCREMENT_ITEM: {
      return incrementItemCount(state, action.produceId);
    }
    case DECREMENT_ITEM: {
      const { byId } = state;
      const item = byId[action.produceId];
      if (!item) return state;
      const newCount = item.count - 1;
      if (newCount === 0) {
        const { [action.produceId]: _, ...newById } = byId;
        return {
          byId: newById,
          order: state.order.filter((id) => id !== action.produceId),
        };
      }
      return {
        ...state,
        byId: {
          ...byId,
          [action.produceId]: { ...item, count: newCount },
        },
      };
    }
    case UPDATE_COUNT: {
      const { byId } = state;
      const item = byId[action.produceId];
      if (!item) return state;
      if (action.count < 0) {
        const { [action.produceId]: _, ...newById } = byId;
        return {
          byId: newById,
          order: state.order.filter((id) => id !== action.produceId),
        };
      }
      const newItem = { ...item, count: action.count };
      return { ...state, byId: { ...byId, [action.produceId]: newItem } };
    }
    case PURCHASE: {
      return initialState;
    }
    case TOGGLE_CART:
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};

export default cartReducer;
