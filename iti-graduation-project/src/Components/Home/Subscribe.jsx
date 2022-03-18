import "./Home.css";

const Subscribe = () => {
    return ( 
        <div className="subscribe-section text-center">
            <h2 className="text-white mb-4">Subscribe with us for more healthy tips!</h2>
            <form>
                <input className="form-control" placeholder="Please enter your email" type='email'/>
                <button className="btn btn-primary btn-lg text-center mt-3" type="button">Subscribe</button>
            </form>
        </div>
     );
}
 
export default Subscribe;