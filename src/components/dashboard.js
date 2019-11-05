import React, { Component } from "react";
import "../css/dashboard.css";
import {Link,BrowserRouter} from 'react-router-dom';
import Coursecategories from "./coursecategories";
import Courses from "./courses";
import Instructors from "./instructors";
import Sessions from "./sesions";
import Settings from "./settings";
import Dynamiccomponents from './dynamiccomponents';

class Dashboard extends Component {

  render() {
    return (
      <BrowserRouter>
    <div>
                <div className='main-nav'>
                  <ul className='main-nav-ul'>
                      <li className="dropdown">John Doe&nbsp;&nbsp;&nbsp;<i class="fa fa-sort-desc" aria-hidden="true"></i>
                      <div className='ul-block'>
                      <ul> 
                          <li>My Profile</li>
                            <li>Logout</li>
                        </ul>
                            </div>
                      </li>  
                        <li className="user-photo"><span></span></li>
                    </ul>
                </div>
                <div class="sidenav">
                   <span><Link to='/' ><i class="fa fa-braille" aria-hidden="true"></i>&nbsp; &nbsp;Course Categories</Link></span>
                    <span><Link to='/courses'><i class="fa fa-laptop" aria-hidden="true"></i>&nbsp; &nbsp;Courses</Link></span>
                    <span><Link to='/instructors'><i class="fa fa-users" aria-hidden="true"></i>&nbsp; &nbsp;Instructors</Link></span>
                    <span><Link to='/sessions'><i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp; &nbsp;Sessions</Link></span>
                    <span><Link to='/settings'><i class="fa fa-cog" aria-hidden="true"></i>&nbsp; &nbsp;Settings</Link></span>
                </div>
              <Dynamiccomponents/>
    </div>
    </BrowserRouter>
  
      );
  }
}
export default Dashboard;

