import './textfield.css';
import Register from './register'
import food from './img/healthy-food-1.jpg'


function Regisiterpage() {
  return (
    <div className='Loginpage'>

    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Register />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={food} alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Regisiterpage;
