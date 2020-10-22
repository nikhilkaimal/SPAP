import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      redirectToLogin: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== "admin") this.setState({ redirectToLogin: true });
  }
  render() {
    const { redirectToLogin } = this.state;

    if (redirectToLogin) return <Redirect to="/" />;

    return (
      <div className="container">
        <form
          className="mt-5"
          style={{
            width: "52%",
            border: "1px solid black",
            margin: "0 auto",
            padding: "1%",
          }}
        >
          <div className="row mt-2">
            <div class="col">
              <label>Gender</label>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="male"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="female"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div class="col">
              <label>Age</label>
            </div>
            <div class="col">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div className="row mt-2">
            <div class="col">
              <label>Location</label>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="urban"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Urban
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="rural"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Rural
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div class="col">
              <label>Family Size</label>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="<3"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Less than 3
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value=">3"
                />
                <label class="form-check-label" for="inlineRadio2">
                  More than 3
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div class="col">
              <label>Parents Co-habitation Status</label>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="together"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Living Together
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="apart"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Living Apart
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div class="col">
              <label>Mother's Education</label>
            </div>
            <div class="col">
              <input type="number" class="form-control" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
