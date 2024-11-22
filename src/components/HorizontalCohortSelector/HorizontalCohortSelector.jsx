import React, { useState, useEffect } from 'react';
import "./HorizontalCohortSelector.css"
import { Link } from "react-router-dom"

import { COHORT2_DATE_RANGE } from "../CalendarV2/CalendarDataV2"
import { COHORT3_DATE_RANGE } from "../CalendarV2/CalendarDataV2"
import { COHORT4_DATE_RANGE } from "../CalendarV2/CalendarDataV2"

export default function HorizontalCohortSelector() {
    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        <div className="horizontalCohortSelector">

            <div className="horizontalCohortSelector-container">
            <span><b>{isMobile ? "Next Cohorts" : "Check Out Our Upcoming Cohorts"}:</b></span>
                <div className="cohort-1-container">

                    {/* FIRST COHORT START */}
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT2_DATE_RANGE[0].start} - {COHORT2_DATE_RANGE[0].end}
                            </b></p>
                            <Link to="/cohort2-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort2" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>
                    {/* FIRST COHORT END */}


                    {/* SECOND COHORT START */}
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT3_DATE_RANGE[0].start} - {COHORT3_DATE_RANGE[0].end}
                            </b></p>
                            <Link to="/cohort3-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort3" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>
                    {/* SECOND COHORT END */}


                    {/* THIRD COHORT START */}
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT4_DATE_RANGE[0].start} - {COHORT4_DATE_RANGE[0].end}
                            </b></p>
                            <Link to="/cohort4-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort4" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>
                    {/* THIRD COHORT END */}



                </div>
            </div>
            {/* <Link to="/teams">Explore private team courses</Link> */}
        </div>

    )
}