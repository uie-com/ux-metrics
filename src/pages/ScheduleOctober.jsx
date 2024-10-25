import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import LeftContent from "../components/LeftContent/LeftContent";
import TestComponent from "../components/TestComponent/TestComponent";
import CalendarOct from "../components/Calendar/CalendarOct";

export default function ScheduleOctober() {
    return (
        <div className="ScheduleOctober">
            <Header />
            < GreenArticle >
                <h1>Join October Cohort</h1>
            </GreenArticle >
            < CalendarOct />
            < Footer />
        </div >


    )


}