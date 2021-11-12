// Valor inicial
const defaultValue = {
  products: [],
};

// Action Types  (son los que comparamos en el switch)

const GET_PRODUCTS = "GET_PRODUCTS"
//REDUCER que se exporta por default

export default function ProductReducer(
  state = defaultValue,
  { type, payload }
) {
  switch (type) {
  
    case GET_PRODUCTS:
      return {
          ...state,
          products: payload,
      };
   
    default:
      return state;
  }
}

//Actions

export const ProductAction =
  ({ token }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        "https://back-sandbox.herokuapp.com/api/products?limit=5&offset=6",
        {
          method: "GET",
          headers: {'Authorization': `Bearer ${token}`},
        }
      );
      const {data} = await response.json();
    //   navigate("/products");
      console.log(data)
      dispatch({ type: GET_PRODUCTS, payload: data.data });

    } catch (error) {
      alert(error);
    }
  };
