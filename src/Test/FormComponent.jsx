import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormComponent = ({
    data, index, inputList, setInputList, handleAddClick, handleRemoveClick
}) => {

    const navigate = useNavigate();

    const handleInputChange = (e, index) => {
        const { name, value, alt, type, isChecked, checked } = e.target;
        console.log(isChecked, checked, "dfj")
        const list = [...inputList];
        if (type === "radio") {
            list[index][alt] = value;
        }
        else if (type === "checkbox" && checked) {
            list[index]["checking_relevant"][name] = value;
        }
        else if (type === "checkbox" && !checked) {
            list[index]["checking_relevant"][name] = "";
        }
        else
            list[index][name] = value;
        setInputList(list);
        console.log(list, value);
    };

    const navigatetoOneOne = () => {
        navigate('/SummaryPage');
    };

    return (
        <div className='form_div'>
            <div className='p-3 m-0 border-0'>
                <h4 className='mb-3'>Summary {index + 1}</h4>
                <label for="exampleDataList" className="form-label form_title">If You have have a problem with pain/aches, stifness,
                    weekness or functional problem descrive this/these below. (List the symtoms in descending order with the most trouble first)</label>
                {/* <input class="form-control"
                    onChange={e => handleInputChange(e, index)} value={data.inputText} name="inputText" type="text"
                    placeholder="Type to search..." /> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={e => handleInputChange(e, index)} value={data.inputText} name="inputText" type="text"
                    placeholder="Type to search..."></textarea>
            </div>
            <div className="row p-1 m-0 border-0 mt-4">
                <div class="col-md-5" style={{ fontWeight: '500' }}>
                    Have You Diagnosed with this problem ?
                </div>
                <div class="col-md-7 ">
                    <div className='row'>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Not Relevent" checked={data.diagnosed === "Not Relevent" ? true : false} alt="diagnosed" name={"diagnosed" + index} />
                            <label for="notr" className='diag_prob'>Not Relevent</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Yes" checked={data.diagnosed === "Yes" ? true : false} alt="diagnosed" name={"diagnosed" + index} />
                            <label for="yes" className='diag_prob'>Yes</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="No" checked={data.diagnosed === "No" ? true : false} alt="diagnosed" name={"diagnosed" + index} />
                            <label for="no" className='diag_prob'>No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-1 m-0 border-0 mt-4">
                <div class="col-sm-5" style={{ fontWeight: '500' }}>
                    Did Your Problem start after a physical trauma ?
                </div>
                <div class="col-sm-7">
                    <div className='row'>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Not Relevent" alt="physical" checked={data.physical === "Not Relevent" ? true : false} name={"physical" + index}
                            />
                            <label for="notr_2" className='diag_prob'>Not Relevent</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Yes" alt="physical" checked={data.physical === "Yes" ? true : false} name={"physical" + index} />
                            <label for="yes_2" className='diag_prob'>Yes</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="No" alt="physical" checked={data.physical === "No" ? true : false} name={"physical" + index} />
                            <label for="no_2" className='diag_prob'>No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-1 m-0 border-0 mt-4">
                <div class="col-sm-5" style={{ fontWeight: '500' }}>
                    Did Your Problem start after a mental trauma ?
                </div>
                <div class="col-sm-7">
                    <div className='row'>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Not Relevent" alt="mental" checked={data.mental === "Not Relevent" ? true : false} name={"mental" + index} />
                            <label for="notr_3" className='diag_prob'>Not Relevent</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="Yes" alt="mental" checked={data.mental === "Yes" ? true : false} name={"mental" + index} />
                            <label for="yes_3" className='diag_prob'>Yes</label>
                        </div>
                        <div className='col-sm-4'>
                            <input type="radio"
                                onChange={e => handleInputChange(e, index)} value="No" alt="mental" checked={data.mental === "No" ? true : false} name={"mental" + index} />
                            <label for="no_3" className='diag_prob'>No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-1 m-0 border-0 mt-4">
                <div className='form_title'>
                    How often do you experience the problem ?
                </div>
                <div className="row p-1 m-0 border-0">
                    <div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <input type="radio"
                                    onChange={e => handleInputChange(e, index)} value="Not Relevent" alt="experience" checked={data.experience === "Not Relevent" ? true : false} name={"experience" + index} />
                                <label for="notr_4" className='diag_prob'>Not Relevent</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="radio"
                                    onChange={e => handleInputChange(e, index)} value="Daily" alt="experience" checked={data.experience === "Daily" ? true : false} name={"experience" + index} />
                                <label for="yes_4" className='diag_prob'>Daily</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="radio"
                                    onChange={e => handleInputChange(e, index)} value="Several Times/Week" alt="experience" checked={data.experience === "Several Times/Week" ? true : false} name={"experience" + index} />
                                <label for="no_4" className='diag_prob'>Several Times/Week</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="radio"
                                    onChange={e => handleInputChange(e, index)} value="A few times/Month" alt="experience" checked={data.experience === "A few times/Month" ? true : false} name={"experience" + index} />
                                <label for="few" className='diag_prob'>A few times/Month</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="radio"
                                    onChange={e => handleInputChange(e, index)} value="A few times/Years" alt="experience" checked={data.experience === "A few times/Years" ? true : false} name={"experience" + index} />
                                <label for="year" className='diag_prob'>A few times/Years</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-1 m-0 border-0 mt-4">
                <div class="col-sm-5" className='form_title'>
                    How do you experience the problem ?
                </div>
                <div className="row p-1 m-0 border-0">
                    <div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <input type="checkbox"
                                    onChange={e => handleInputChange(e, index)} value="Not Relevant" name="Not_Relevant" checked={data.checking_relevant.Not_Relevant ? true : false} />
                                <label for="checking_relevant_1" className='diag_prob'>Not Relevent</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="checkbox"
                                    onChange={e => handleInputChange(e, index)} value="When lying down" checked={data.checking_relevant.lying_down ? true : false} name="lying_down" />
                                <label for="checking_relevant_2" className='diag_prob'>When lying down</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="checkbox"
                                    onChange={e => handleInputChange(e, index)} value="When sitting" checked={data.checking_relevant.when_sitting ? true : false} name="when_sitting" />
                                <label for="checking_relevant_3" className='diag_prob'>When sitting</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="checkbox"
                                    onChange={e => handleInputChange(e, index)} value="Under Standing" checked={data.checking_relevant.under_sitting ? true : false} name="under_sitting" />
                                <label for="checking_relevant_4" className='diag_prob'>Under Standing</label>
                            </div>
                            <div className='col-sm-4'>
                                <input type="checkbox"
                                    onChange={e => handleInputChange(e, index)} value="In Walking" checked={data.checking_relevant.in_walking ? true : false} name="in_walking" />
                                <label for="In Walking" className='diag_prob'>In Walking</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='Button_add mt-4 mb-3'>
                {inputList.length - 1 === index && <button class="button button5"
                    onClick={handleAddClick}> <span className='plus_btn'>+</span></button>}
            </div>
            <div className='next_page'>
                {inputList.length !== 1 && <>
                    <button type="button" class="btn btn-primary btn-lg next_btn" onClick={() => handleRemoveClick(index)}>BACK</button>
                </>}
                {inputList.length - 1 === index && <>
                    <button type="button" className="btn btn-primary btn-lg next_btn" onClick={navigatetoOneOne}>NEXT</button>
                </>
                }
            </div>
        </div>
    );
}

export default FormComponent