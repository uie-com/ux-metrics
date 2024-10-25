import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import LeftContent from "../components/LeftContent/LeftContent";
import TestComponent from "../components/TestComponent/TestComponent";
import CalendarDec from "../components/Calendar/CalendarDec";

export default function ScheduleDecember() {
    return (
        <div className="ScheduleDecember">
            <Header />
            < GreenArticle >
                <h1>Join December Cohort</h1>
            </GreenArticle >
            < CalendarDec />
            < Footer />
        </div >


    )


}