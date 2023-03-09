import "./App.css";


export default function App() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
      <Details1/>
      <Details2/>
      <Details3/>
      </div>
    </div>
  );
}
function Details1(props) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <small className="fadetext">FREE</small>
          <h1>$0<small className="month">/month</small></h1>
          <hr width="400px"></hr>
          <ul className="ul" type="none">
          <li ><i className="fas fa-check"></i> Single User</li>
          <li ><i className="fas fa-check"></i> 5GB Storage</li>
          <li ><i className="fas fa-check"></i> Unlimited Public Projects</li>
          <li ><i className="fas fa-check"></i> Community Access</li>
          <li className="faded"><i className="fa-solid fa-xmark"></i> Unlimited Private Projects</li>
          <li className="faded"><i className="fa-solid fa-xmark"></i> Dedicated Phone Support</li>
          <li className="faded"><i className="fa-solid fa-xmark"></i> Free Subdomain</li>
          <li className="faded"><i className="fa-solid fa-xmark"></i> Monthly StatusReports</li>
          </ul>
          <div className="button">
          <a href="#" class="btn btn-primary btn-block">BUTTON</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
function Details2(props) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <small className="fadetext">FREE</small>
          <h1>$9<small className="month">/month</small></h1>
          <hr width="400px"></hr>
            <ul className="ul" type="none">
            <li ><i className="fas fa-check"></i><b> 5 Users</b></li>
            <li ><i className="fas fa-check"></i> 50GB Storage</li>
            <li ><i className="fas fa-check"></i> Unlimited Public Projects</li>
            <li ><i className="fas fa-check"></i> Community Access</li>
            <li ><i className="fas fa-check"></i> Unlimited Private Projects</li>
            <li ><i className="fas fa-check"></i> Dedicated Phone Support</li>
            <li ><i className="fas fa-check"></i> Free Subdomain</li>
            <li className="faded"><i className="fa-solid fa-xmark"></i>Monthly Status Reports</li>
            </ul>
            <div className="button">
            <a href="#" class="btn btn-primary btn-block">BUTTON</a>
            </div>
            </div>
        </div>
      </div>
      );
    }
    function Details3(props) {
      return (
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
          <div className="card-body">
          <small className="fadetext">FREE</small>
          <h1>$49<small className="month">/month</small></h1>
          <hr width="400px"></hr>
              <ul className="ul" type="none">
              <li ><i className="fas fa-check"></i><b> Unlimited Users</b></li>
              <li ><i className="fas fa-check"></i> 150GB Storage</li>
              <li ><i className="fas fa-check"></i> Unlimited Public Projects</li>
              <li ><i className="fas fa-check"></i> Community Access</li>
              <li ><i className="fas fa-check"></i> Unlimited Private Projects</li>
              <li ><i className="fas fa-check"></i> Dedicated Phone Support</li>
              <li ><i className="fas fa-check"></i><b> Unlimited </b>Free Subdomain</li>
              <li className="faded"><i className="fas fa-check"></i>Monthly Status Reports</li>
              </ul>
              <div className="button">
              <a href="#" className="btn btn-primary btn-block">BUTTON</a>
              </div>
            </div>
          </div>
        </div>
        );
      }
