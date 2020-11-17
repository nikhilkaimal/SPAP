import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Profile.css";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      schoolname: "",
      male: "",
      female: "",
      yes: "",
      no: "",
      other: "",
      email: "",
      password: "",
      redirectToDashboard: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "", open: false });
    this.setState({ [name]: event.target.value });
  };

  login = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", "admin");

      this.setState({ redirectToDashboard: true });
    } else alert("Work On Progress");
  };

  render() {
    const { schoolname,male,female,yes,no,other,email, password, redirectToDashboard } = this.state;

    if (redirectToDashboard) return <Redirect to="/dashboard" />;

    return (
     
      <div className="card center">
        <div className="card-body">
          <form>
            <div className="form-group">
              <h1>Student Data</h1>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputschool1"> School</label>
              <input
                type="name"
                placeholder="Student's School"
                className="form-control"
                id="exampleInputschool1"
                aria-describedby="Student's School"
                onChange={this.handleChange("schoolname")}
                value={schoolname}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputschool1"> Sex    </label>
              <br></br>
                <div class="custom-control-inline">
          
              <label for="idmale" className="radio-inline ">
              <input
                type="radio"
               
                name="gender"
                id="idmale"
                aria-describedby="male"
                onChange={this.handleChange("male")}
                value={male}
              />
              Male 
              </label>
              </div>
                <div class="custom-radio custom-control-inline">
             
              <label for="idfemale" className="radio-inline">
                <input
                type="radio"
               
                name="gender"
                id="idfemale"
                aria-describedby="female"
                onChange={this.handleChange("female")}
                value={female}
              />
                 Female
                </label>
                </div>
                <div class="custom-radio custom-control-inline">
            
              <label for="idother" className="radio-inline">
               <input
                type="radio"
               
                name="gender"
                id="idother"
                aria-describedby="other"
                onChange={this.handleChange("other")}
                value={other}
              />
              Other
              </label>
              </div>
              </div>
           

            <div className="form-group">
              <label htmlFor="exampleInputschool1"> Age</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="15">15</option>
                 <option value="16">16</option>
                 <option value="17">17</option>
                 <option value="18">18</option>
                 <option value="19">19</option>
                 <option value="20">20</option>
                 <option value="21">21</option>
                 <option value="22">22</option>
   
                </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleaddress"> Address</label>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="U">Urban</option>
                   <option value="R">Rural</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplefamilysize"> Family Size</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="LE3">LE3</option>
                   <option value="GT3">GT3</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">P status</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="T">T</option>
                   <option value="A">A</option>
                </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="examplemedu">Mother's Education</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplemedu">Father's Education</label>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplemjob">Mother's Job</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Teacher</option>
                 <option value="1">Health Care</option>
                 <option value="2">Civil Services</option>
                 <option value="3">"@_Home"</option>
                 <option value="4">Other</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplemjob">Father's Job</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Teacher</option>
                 <option value="1">Health Care</option>
                 <option value="2">Civil Services</option>
                 <option value="3">"@_Home"</option>
                 <option value="4">Other</option>
                </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="examplemedu">Joining Reason</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Close to 'home'</option>
                 <option value="1">School Reputation</option>
                 <option value="2">Course Preference</option>
                 <option value="3">Other</option>
                
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplemedu">Guardian</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Mother</option>
                 <option value="1">Father</option>
                 <option value="2">Other</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplemedu">Travel time</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Less than 15 min</option>
                 <option value="1">15 - 30 min</option>
                 <option value="2">30 min - 1 hr</option>
                 <option value="3">greater than 1 hr</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplemedu">Study Time</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">Less than 2 hr</option>
                 <option value="1">2 - 5 hr</option>
                 <option value="2">5 - 10 hr</option>
                 <option value="3">greater than 10 hr</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplemedu">Failures</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">0</option>
                 <option value="1">1 </option>
                 <option value="2">2</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputschool1"> Schoolsup    </label>
              <br></br>
                <div class="custom-control-inline">
                  <label for="idmale" className="radio-inline ">
                    <input
                     type="radio"
                     name="ssup"
                     id="idmale"
                     aria-describedby="male"
                     onChange={this.handleChange("male")}
                     value={male}
                    />
                    Yes 
                  </label>
              </div>
                <div class="custom-radio custom-control-inline">
             
                  <label for="idfemale" className="radio-inline">
                   <input
                   type="radio"
                     name="ssup"
                     id="idfemale"
                     aria-describedby="female"
                     onChange={this.handleChange("female")}
                     value={female}
                     />
                      No
                   </label>
                 </div>
                </div>

              <div className="form-group">
               <label htmlFor="examplefamsup1"> Famsup    </label>
              <br></br>
                <div class="custom-control-inline">
                  <label for="idmale" className="radio-inline ">
                    <input type="radio" name="famsup" id="idfsyes" aria-describedby="male" 
                    onChange={this.handleChange("male")}  value={male}/>
                    Yes 
                  </label>
              </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idfemale" className="radio-inline">
                   <input type="radio" name="famsup" id="idfsno" aria-describedby="female"
                    onChange={this.handleChange("female")} value={female}
                    />
                    No
                   </label>
                 </div>
                </div>
           
              <div className="form-group">
               <label htmlFor="examplefamsup1"> Paid    </label>
              <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="paid" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={male}/>
                    Yes 
                  </label>
              </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="paid" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={female}
                    />
                    No
                   </label>
                 </div>
                </div>

              
              <div className="form-group">
               <label htmlFor="examplefamsup1"> Activites    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="activities" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="activities" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>

              <div className="form-group">
               <label htmlFor="examplefamsup1"> Nursery    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="nursery" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="nursery" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>

               <div className="form-group">
               <label htmlFor="examplefamsup1"> Higher    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="higer" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="higher" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>
           
               <div className="form-group">
               <label htmlFor="examplefamsup1"> Higher    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="higher" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="higher" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>

                <div className="form-group">
               <label htmlFor="examplefamsup1"> Internet    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="internet" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="internet" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>

                <div className="form-group">
               <label htmlFor="examplefamsup1"> Romantic    </label>
                <br></br>
                <div class="custom-control-inline">
                  <label for="idpaidyes" className="radio-inline ">
                    <input type="radio" name="romantic" id="idpaidyes" aria-describedby="yes" 
                    onChange={this.handleChange("yes")}  value={yes}/>
                    Yes 
                  </label>
               </div>
                <div class="custom-radio custom-control-inline">
                  <label for="idpaidno" className="radio-inline">
                   <input type="radio" name="romantic" id="idpaidno" aria-describedby="no"
                    onChange={this.handleChange("no")} value={no}
                    />
                    No
                   </label>
                 </div>
                </div>

                
            <div className="form-group">
              <label htmlFor="examplepstatus">Fam Rel</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very Bad</option>
                 <option value="2">Bad</option>
                 <option value="3">Average</option>
                 <option value="4">Good</option>
                 <option value="5">Excellent</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="examplepstatus">Free Time</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very low</option>
                 <option value="2">low</option>
                 <option value="3">Average</option>
                 <option value="4">high</option>
                 <option value="5">very high</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">Go Out</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very low</option>
                 <option value="2">low</option>
                 <option value="3">Average</option>
                 <option value="4">high</option>
                 <option value="5">very high</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">D Alc</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very low</option>
                 <option value="2">low</option>
                 <option value="3">Average</option>
                 <option value="4">high</option>
                 <option value="5">very high</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">W Alc</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very low</option>
                 <option value="2">low</option>
                 <option value="3">Average</option>
                 <option value="4">high</option>
                 <option value="5">very high</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">Health</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="1">Very Bad</option>
                 <option value="2">Bad</option>
                 <option value="3">Average</option>
                 <option value="4">Good</option>
                 <option value="5">Excellent</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="examplepstatus">Absences</label>
              <br></br>
              <select class="custom-select" required>
              <option selected="true" disabled="disabled"> Select</option>    
                 <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option>
                </select>
            </div>
            
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.login}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  
    );
  }
}
