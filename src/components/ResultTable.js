

import React from 'react'
//import { getServerData } from '../helper/helper'

export default function ResultTable() {



    // useEffect(() => {
    //     getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
    //         setData(res)
    //     })
    // })

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attemps</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>


                    <tr className='table-body' >
                        <td>Youtube</td>
                        <td>4</td>
                        <td>45</td>
                        <td>pass</td>
                    </tr>



                </tbody>
            </table>
        </div>
    )
}