import "./SelectBox.scss";

function SelectBox({options , changeHandler}){

    const optionDom = options.map( (option, index) => {
        return <option value={option.value} key={index}>{option.label}</option>
    })

    function handleChange(event){
        changeHandler(event.target.value);
    }

    return(
        <div className="select-box-container">
            <select onChange={handleChange} >
                {optionDom}
            </select>
        </div>
    )
}

export default SelectBox