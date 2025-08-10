

function ResponseMessage({response}) {

    if (response !== undefined) {
        return (
            <>
                <label className="form-label" htmlFor="form-container">{response.message}</label><br/><br/>
            </>
        )
    }

}

export default ResponseMessage;