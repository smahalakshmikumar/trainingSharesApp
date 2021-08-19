import React, { useEffect,useState } from "react";
import SharesListChild from './SharesListChild';
import * as api from "../../api/api"
import { useParams ,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchSharesList} from "../../redux/actions/shareAction";

/**
 * Displays shares list
 * @returns share list component
 */
 const SharesList=()=>{
    const[data,setData]=useState();
    let history = useHistory();
    let dispatch = useDispatch();
    let { sharesList, isLoading } = useSelector(
      (state) => state?.shares
    );
    /**
     * fetching the SharesList
     * @returns SharesList
     */
    useEffect(async() => {
      try {
        //dispatching api action through thunk,storing in redux and displaying
        dispatch(fetchSharesList());
      } 
      catch (error) {
        console.log(error.message);
      }
     
    }, []);

    /** 
     * on viewMoreClick
     * @param {number} id - passing id in history 
     * @returns pushing to selected share page
     */
     const ViewMore=(id)=>{
      history.push(`/selectedShare/${id}`);
    }

    return (
      <div class="container-fluid">
        <SharesListChild shares={sharesList} viewMore={ViewMore}
        />
      </div>

    );
}
export default React.memo(SharesList);
