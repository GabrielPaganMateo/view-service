

function handleValueChange(event, values, setValues) {
    setValues({
        ...values, [event.target.name]:event.target.value,
    });
}

export default handleValueChange;