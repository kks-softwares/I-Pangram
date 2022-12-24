import React from 'react'
import FormComponent from './FormComponent'

const Hello = ({ inputList, setInputList }) => {

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, {
            inputText: "",
            diagnosed: "",
            physical: "",
            mental: "",
            experience: "",
            checking_relevant: {
                Not_Relevant: "",
                lying_down: "",
                when_sitting: "",
                under_sitting: "",
                in_walking: ""
            }
        }]);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div className='container mb-4 p-4 mt-5' style={{ border: '1px solid black' }}>
            <div className='First'>Pain & Functional Description</div>
            <div style={{ margin: '1vw 22vw', fontWeight: '400' }}>The Description of the current situation gives you a optimumum Trainer a picture of and cluesto the underlying causes of your problem</div>
            <hr />
            {inputList.map((data, index) => {
                return (
                    <FormComponent
                        data={data}
                        index={index}
                        inputList={inputList}
                        setInputList={setInputList}
                        handleInputChange={handleInputChange}
                        handleAddClick={handleAddClick}
                        handleRemoveClick={handleRemoveClick}
                    />
                );
            })}
        </div>
    )
}

export default Hello;