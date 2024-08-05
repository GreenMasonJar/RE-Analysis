function SubmitButton(props) {
    return(
        <div>
            <button value={props.value} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}

export default SubmitButton;