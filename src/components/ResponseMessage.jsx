

function ResponseMessage({response}) {

    if (response !== undefined) {
        return (
            <>
                <div>
                    <label className="form-label" htmlFor="form-container">{response.message}</label>
                </div>
            </>
        )
    }

}

export default ResponseMessage;