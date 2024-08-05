function InputBox(props) {
    
    return(
        <label>{props.label}
            <input name={props.name} value={props.value} onChange = {props.onChange}/>
        </label>
        
    )
}

export default InputBox;