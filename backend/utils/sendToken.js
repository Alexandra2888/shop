export default (user, statusCode, res) => {
    // create JWT token
    const token = user.getJwttoken();

    //options for cookie
    const options = {
        expires: new Date(Date.now() * process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 100),
        httpOnly:true
    };
    res.status(statusCode).cookie("token", token, options).json({
       token, 
    });
    };