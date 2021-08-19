import React from 'react'
import { Button } from "react-bootstrap";
import NavigationBar from '../../ui/NavigationBar';
import Paper from '@material-ui/core/Paper';


/**
 * Displays shares list
 * @returns share list component
 * @param {array} shares List- to populate list of available shares

 */
const SharesListChild = ({ shares,viewMore }) => {
     /** 
     * on viewMoreClick
     * @param {number} id - passing id to parent viewMore 
     * @returns calling parent viewMore
     */
    const viewMoreClick=(id)=>{
        viewMore(id)
    }
    return (
        <div class="container-fluid">
            <NavigationBar />
            {/* {isLoading ? <CircularProgress color="secondary" /> : null} */}
            <h3 style={{ margin: "10px" }}>List of Shares</h3>

            <div class="card-columns">
                {shares?.map((data) => (
                    <Paper elevation={3}  style={{width:"22rem",margin:"10px"}}>
                        <img class="card-body" />
                        <div class="card-title">{data.shareName}</div>
                        <div class="card-subtitle mb-2 text-muted">Rs.{data.sharePrice}</div>
                        <p class="card-text"></p>
                        <div class="card-footer">
                            <Button id="viewMoreButton" onClick={()=>viewMoreClick(data.id)}
                            >
                                View More
                            </Button>
                        </div>
                    </Paper>

                ))}
            </div>
       
        </div>

    );
}
export default React.memo(SharesListChild);
