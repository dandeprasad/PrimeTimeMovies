import React from "react";
import axios from 'axios';

export function examoverviewupload (data ){

    return {
        type:"EXAMS_OVERVIEW_UPLOAD",
        payload:data
    };

}
