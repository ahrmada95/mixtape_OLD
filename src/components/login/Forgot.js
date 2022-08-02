const Forgot = () => {
    const sucks = () => {
        alert("Wow, that sucks.")
    }
    return (
        <button onClick={sucks} className="forgot-btn">Forgot username or password?</button>
    )
}

export default Forgot;