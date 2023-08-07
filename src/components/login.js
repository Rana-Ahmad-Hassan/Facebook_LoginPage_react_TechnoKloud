import React from 'react';

export default function Login() {
  function submit() {
    const data = getData();
    dataStoredInLocalStorage(data);
    greetings();
  }

  function getData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let arr = [email, password];
    return arr;
  }

  function dataStoredInLocalStorage(data) {
    localStorage.setItem('Email', data[0]);
    localStorage.setItem('Password', data[1]);
  }

  function greetings() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email !== '' && password !== '') {
      alert('Congrats! Your account is successfully created');
    } else {
      alert('Please enter data in the required fields.');
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-2 pt-3 align-items-center">
        <div className="col-md-6 mt-5 pt-5 px-2">
          <h1 className="display-3 fw-bold text-primary">facebook</h1>
          <p className="display-5 fs-4">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="col-md-4 mt-5 pt-md-5 shadow-lg p-3 col-mx-3" style={{ borderRadius: '20px' }}>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control p-3 fs-6"
                id="email"
                placeholder="Email address or phone number"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Password" className="form-control p-3" id="password" />
            </div>
            <button className="btn btn-primary w-100 p-1 fw-bold fs-4" onClick={submit}>
              Log in
            </button>

            <a href="https://www.example.com" className="nav-link text-center text-primary mt-2 ">
              <p>Forgotten password?</p>
            </a>
            <hr />
            <div className="container d-flex justify-content-center">
              <button className="btn text-white p-2 fs-5 mt-2" style={{ backgroundColor: '#42B72A' }}>
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row ms-auto">
          <p className="mt-5 col-md-6 col-12 ms-md-auto text-center" style={{ textAlign: 'center' }}>
    <a href="" className='nav-link'>Create a Page</a> for a celebrity, brand, or business.</p>
        </div>
      </div>
    </div>
  );
}

