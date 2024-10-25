import React from "react";
import { Link, useLocation } from 'react-router-dom';

// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import LeftContent from "../components/LeftContent/LeftContent";
import TestComponent from "../components/TestComponent/TestComponent";

export default function October() {
    return (
        <div className="October">
            <Header />
            < GreenArticle >
                <h1>Join October Cohort</h1>
            </GreenArticle >
            <TestComponent >
                <div>
                    <h2>Develop your own organization’s Outcome-driven UX Metrics.</h2>
                    <p>Join us to complete your journey with metrics that will <b>drive your organization to deliver better-designed products and services.</b></p>
                    <p>You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.</p>
                </div>
                <div className="test-component-content-container">
                    <img src="./images/11.png" alt="Outcome Driven UX Metrics" />
                    <button className="btn btn-shadow test-component-purchase button">PURCHASE THE WORKSHOP</button>
                </div>
            </TestComponent >
            <TestComponent>
                <div> <h2>Choose to sign up as an Individual or a Team Member</h2>
                    <p>You’ll get the most out of your workshop if you come with your team.</p>

                    <p><b>As a team, you’ll develop your Outcome-driven UX Metrics plan together.</b>You’ll start drafting the blueprints for what change will look like across your organization. You’ll come away from the intensive with your own custom approach to UX Vision that your entire team can use.</p>
                    <p><b>Each team member saves $100 on their registration when they sign up as a team member.</b></p>
                    <p>Each team member must purchase their registration separately.</p>
                    <p>Whichever you choose, team or individual, we’ll give you our full support.</p>
                </div>

                <div> <h2>Currently out of work?
                    We’ve got you.</h2>
                    <p><b>We’re offering $199 registrations for our out-of-work colleagues. </b></p>
                    <p>We recognize that there are UX Leaders dedicated to learning and growing who are unfortunately in between jobs right now—we get it. So, if you’re an unemployed, dedicated learner, this special price is for you.  </p>
                    <p>(If you’re fortunate enough to be employed right now, please leave these spots for those who are not currently employed. Don’t be that person. Don’t take the seat of someone who really needs this price.)</p>
                </div>
            </TestComponent >

            {/* <Link to="/octoberschedule">OCTOBER SCHEDULE</Link>
            <Link to="/novemberschedule">NOVEMBER SCHEDULE</Link>
            <Link to="/decemberchedule">DECEMBEr SCHEDULE</Link> */}

            {/* <Calendar />
// Add component with Buttons here
 */}




            < Footer />
        </div >


    )


}