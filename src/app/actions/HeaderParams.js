export function paramsToHeader (data ){

    return {
        type:"HEADER_PARAMS",
        payload:data
    };

}
export function hideEvents (data ){

    return {
        type:"EVENTS_HIDE_INFO",
        payload:data
    };

}
export function hideCutoffsFiltrContent (data ){

    return {
        type:"CUTOFFS_HIDE_INFO",
        payload:data
    };

}

export function hideExams (data ){

    return {
        type:"EXAMS_HIDE_INFO",
        payload:data
    };

}
