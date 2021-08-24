import React, { useState, useEffect } from 'react';
import {Table, Button} from "reactstrap";
import WorkoutCreate from './WorkoutCreate';

const WorkoutTable = (props) => {
    return ( 
        <>
        <h3>Workout History</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>                
            </tbody>
        </Table>
        </>
     );
}
 
export default WorkoutTable;