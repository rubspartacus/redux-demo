import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
const App = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <>
      <div>
        <p>{count} writing from git hub</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
    </>
  );
};

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     count: state.count ,

//   };

// }

// function mapDispatchToProps(dispatch) {
//   return {

//      increment: () => dispatch({type: 'INCREMENT'}),

//    };

//   }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
