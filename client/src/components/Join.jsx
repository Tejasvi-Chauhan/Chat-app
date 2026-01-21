
const Join=()=>{
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text"/></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text"/></div>
                <button className={"button mt-20"} type="submit">Sign In</button>
            </div>
        </div>
    )
}
export default Join