import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import LeftContent from "../components/LeftContent/LeftContent";
import TestComponent from "../components/TestComponent/TestComponent";
import CalendarNov from "../components/Calendar/CalendarNov";

export default function ScheduleNovember() {
    return (
        <div className="ScheduleNovember">
            <Header />
            < GreenArticle >
                <h1>Join November Cohort</h1>
            </GreenArticle >
            < CalendarNov />
            < Footer />
        </div >


    )


}