import React from "react"
import "./VerticalCohortSelector.css"
import { Link } from "react-router-dom"

import { COHORT2_DATE_RANGE } from "../CalendarV2/CalendarDataV2"
import { COHORT3_DATE_RANGE } from "../CalendarV2/CalendarDataV2"
import { COHORT4_DATE_RANGE } from "../CalendarV2/CalendarDataV2"

export default function VerticalCohortSelector() {
    return (

        <div className="verticalCohortSelector">
            <img src="./images/11.png" alt="Outcome-Driven UX Metrics" className="cohortSelector-image" />
            <span>Next Cohorts:</span>
            <div>

                {/* FIRST COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p><b>{COHORT2_DATE_RANGE[0].start} - {COHORT2_DATE_RANGE[0].end}</b></p>
                        <Link to="/cohort2-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort2" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* FIRST COHORT END */}


                {/* SECOND COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{COHORT3_DATE_RANGE[0].start} - {COHORT3_DATE_RANGE[0].end}</b></p>
                        <Link to="/cohort3-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort3" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* SECOND COHORT END */}


                {/* THIRD COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{COHORT4_DATE_RANGE[0].start} - {COHORT4_DATE_RANGE[0].end}</b></p>
                        <Link to="/cohort4-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort4" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* THIRD COHORT END */}




            </div>
            <span className="mt-2">8 or more team members?</span>
            <br />
            <Link to="/teams">Explore private team courses</Link>
        </div>

    )
}