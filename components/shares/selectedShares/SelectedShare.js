import React,{ useEffect, useState } from 'react';
import SelectedShareChild from './SelectedShareChild';
import { useParams ,useHistory} from "react-router-dom";
import * as api from "../../api/api"
import {fetchSelectedDoctor} from "../../redux/actions/shareAction";
import { useDispatch, useSelector } from "react-redux";


/**
 * Displays selected share
 * @returns selected share component
 */
 const SelectedShare=()=>{
    const params = useParams();
    let paramID = params.id;
    const[data,setData]=useState();
    let history=useHistory();
    let dispatch = useDispatch();
    let { selectedShare, isLoading } = useSelector(
      (state) => state?.shares
    );
    /**
     * fetching the selected share
     * @returns selected share
     */
    useEffect(async() => {
      try {
        //dispatching api action through thunk,storing in redux and displaying
        dispatch(fetchSelectedDoctor(paramID))
      } 
      catch (error) {
        console.log(error.message);
      }
     
    }, [params.id]);

    
    return (
        <div class="container-fluid">
          <SelectedShareChild selectedShare={selectedShare} dispatch={dispatch}
          history={history}
          />
        </div>
  
      );
}
export default React.memo(SelectedShare);