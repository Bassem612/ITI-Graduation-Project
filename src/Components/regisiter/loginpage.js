import './textfield.css';
import food from './img/healthy-food-1.jpg'
import Login from './login';

function Loginpage() {
  return (
    <div className='Loginpage'>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={food} alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Loginpage;
