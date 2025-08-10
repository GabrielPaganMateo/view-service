

function ResponseMessage({response}) {

    if (response !== undefined) {
        return (
            <>
                <label className="form-label" htmlFor="form-container">{response.message}</label>
            </>
        )
    }

}

export default ResponseMessage;