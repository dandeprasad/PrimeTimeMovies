const PlacementsReduce = (state =
    {
    placementsdata:[]
}  , action)=>{

    switch (action.type){
      case "PLACEMENTS_CLGS_RESULT":

      state = {
...state,
      placementsdata: [action.payload]

      }
        break;
    }
    return state;
};
export default PlacementsReduce;
