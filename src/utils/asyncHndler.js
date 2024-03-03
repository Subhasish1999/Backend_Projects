//promises
const asyncHandler = (requestHandeler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler = () => {} step-1
// const asyncHandler = (func) => () => {} step-2
// const asyncHandler = (func) => async() => {} step-3


//try-catch
/*const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: true,
            message: error.message
        })
    }
}*/