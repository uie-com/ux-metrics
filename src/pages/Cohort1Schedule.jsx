import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort1CalendarV2 from "../components/CalendarV2/Cohort1CalendarV2";
import HorizontalModal from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort1Schedule() {
    return (
        <div id="Cohort1-Schedule">
            <Navbar />
            <Header />
            < GreenArticle >
                <h1>October Schedule</h1>
            </GreenArticle >
            < Cohort1CalendarV2 />
            <TestComponent>
                <div className="schedule-paragraphs">
                    <p>You must watch the lecture before that day’s Live Coaching session. However, if you’re the type of person who likes to be super prepared, you can watch the recording on your own time before this session. You’ll have access to all the recordings before the course begins, so you can even binge-watch them.</p>
                    <p>All times listed are in Eastern Time Zone.</p>
                    <p>We welcome folks from other time zones to join us. </p>
                </div>
            </TestComponent>
            <HorizontalModal />
            < Footer />
        </div >


    )


}