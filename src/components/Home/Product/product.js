import "./product.css";

function Product() {
  return (
    <div className="card">
      <img
        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_640,f_auto"
        alt="..."></img>
      <hr />
      <div className="card-body">
        <h5 className="card-title">iPhone 14</h5>
        <p className="card-text">&#8377; 95000</p>
        <p className="card-text">Created By Apple.</p>
        <a href="#" className="btn btn-success flex-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-plus"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          &nbsp;Cart
        </a>
      </div>
    </div>
  );
}

export default Product;