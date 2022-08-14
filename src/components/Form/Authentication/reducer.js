const reducer = (state, action) => {
    switch(action.type) {
          case  "HANDLE INPUT":
              return {...state , [action.name] : action.payload};
          case  "CLEAR INPUT":
              return {...state , [action.name] : action.payload = " "};
          default :
          return state;
               
    }
}
export default reducer;