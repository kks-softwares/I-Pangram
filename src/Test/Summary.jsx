import React from 'react'
import { useNavigate } from 'react-router-dom';

const Summary = ({ inputList }) => {
    const navigate = useNavigate();

    const handleObject = (object) => {
        var array = []
        for (const key in object) {

            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                array.push(<span>{element + " , "}</span>)
            }
        }
        return array;
    }

    return (
        <div className='container-fluid' style={{ marginTop: '3vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2vw' }}>
                <h1>SUMMARY TABLE</h1>
            </div>
            {/* <span>Table {index + 1}</span> */}
            <div>
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">If You have have a problem with pain/aches, stifness, weekness or functional problem</th>
                            <th scope="col">Have You Diagnosed with this problem ?</th>
                            <th scope="col">Did Your Problem start after a physical trauma ?</th>
                            <th scope="col">Did Your Problem start after a mental trauma ?</th>
                            <th scope="col">How often do you experience the problem ?</th>
                            <th scope="col">How do you experience the problem ?</th>
                        </tr>
                    </thead>
                    {inputList[0].inputText ? (
                        inputList?.map((data, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{data?.inputText}</td>
                                        <td>{data?.diagnosed}</td>
                                        <td>{data?.physical}</td>
                                        <td>{data?.mental}</td>
                                        <td>{data?.experience}</td>
                                        <td>{handleObject(data?.checking_relevant)}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    ) : (<span className='no_data_sum'><h6>NO DATA IN SUMMARY</h6></span>)}
                </table>
            </div>
            <div className='next_page'>
                <button type="button" class="btn btn-primary btn-lg NextButton" onClick={() => navigate(-1)}>BACK</button>
            </div>
        </div>
    )
}

export default Summary;