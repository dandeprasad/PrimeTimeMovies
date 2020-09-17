const CutoffsReduce = (state =
    {
    clgs:[],
    clgnames:[],
    selectedclg:[],
    iit_iiit_data:[],
  ap_cutoff:{
    inst_code:[],
    inst_name:[],
    inst_others:[],
    main_result:[],
    ap_state_maintaince:{
      AP_INST_CODE_CB:false,
      AP_INST_NAME_CB:false,
      AP_INST_TYPE_CB:false,
      AP_INST_REG_CB:false,
      AP_INST_DIST_CB:false,
      AP_INST_PLACE_CB:false,
      AP_INST_AFFLI_CB:false,
      AP_INST_ESTYEAR_CB:false,
      AP_INST_BRNCHCODE_CB:false,
      AP_INST_CUTYEAR_CB:false,
      AP_INST_CODE:'Select',
      AP_INST_NAME:'Select',
        AP_INST_REG:'Select',
          AP_INST_TYPE:'Select',
            AP_INST_DIST:'Select',
              AP_INST_PLACE:'Select',
                AP_INST_AFFLI:'Select',
                  AP_INST_ESTYEAR:'Select',
                    AP_INST_BRNCHCODE:'Select',
                      AP_INST_CUTYEAR:'Select'

    }
  }



}  , action)=>{

    switch (action.type){
      case "CUTOFFS_CLGS_RESULT":

      state = {
...state,
      clgs: [...state.clgs,action.payload]

      }
        break;

        case "CUTOFFS_CLGS_NAMES_RESULT":

        state = {
  ...state,
        clgnames: [action.payload]

        }
          break;

          case "CUTOFFS_AP_INSTCODE_RESULT":

          state = {
    ...state,
          ap_cutoff:{...state.ap_cutoff,inst_code: [action.payload]}

          }

            break;
            case "CUTOFFS_AP_INST_OTHERS_RESULT":

            state = {
      ...state,
            ap_cutoff:{...state.ap_cutoff,inst_others: [action.payload]}

            }

              break;

            case "CUTOFFS_AP_INSTNAME_RESULT":

            state = {
      ...state,
            ap_cutoff:{...state.ap_cutoff,inst_name: [action.payload]}

            }
              break;
              case "AP_CUTOFFS_MAIN_RESULT":

              state = {
        ...state,
              ap_cutoff:{...state.ap_cutoff,main_result: [action.payload]}

              }
                break;


          case "CUTOFFS_IITS_IIITS_RESULT":

          state = {
    ...state,
          iit_iiit_data: [action.payload]

          }
            break;
            case "CUTOFFS_STATE_MAINTAINCE":

            state = {
      ...state,
            selectedclg: [action.payload]

            }
              break;
              case "AP_EAMCET_CUTOFFS_STATE_MAINTAINCE":
              const va =Object.keys(action.payload)[0];
              const val = Object.values(action.payload)[0];
state.ap_cutoff.ap_state_maintaince[va] = val;
                break;


    }
    return state;
};
export default CutoffsReduce;
