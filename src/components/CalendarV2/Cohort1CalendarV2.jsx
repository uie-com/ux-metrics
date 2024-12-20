import React, { useState, useEffect } from 'react';
import { fetchOctober } from './CalendarDataV2.jsx';
import ReactMarkdown from 'react-markdown';

import './CalendarV2.css';
import { useLocation } from 'react-router-dom';
import { COHORT_DATE_RANGE_OCTOBER } from './CalendarDataV2.jsx'
import playButton1 from './playButton1.png'
import playButton2 from './playButton2.png'

export default function CalendarV2() {
    const [expandedSections, setExpandedSections] = useState({});
    const location = useLocation();
    const toggleDetails = (index) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Conditionally add the class 'inactive' when on the home page ("/")
    const containerClass = location.pathname !== '/' ? 'calendar-container' : '';

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
          const fetchedData = await fetchOctober();
      
          // Sort events by week number in ascending order
          const sortedEvents = fetchedData.sort((a, b) => a.week - b.week);
      
          setEvents(sortedEvents);
        };
      
        loadEvents();
      }, []);

    return (
        // containerClass here is a CSS class that toggles off on the home page.
        <div className={containerClass}>
            <div className='calendarV2'>
                <h2>Cohort: {COHORT_DATE_RANGE_OCTOBER[0].start} - {COHORT_DATE_RANGE_OCTOBER[0].end}</h2>
                <h3>UPDATE New Start Date For Cohort Previously Starting Oct 29.</h3>
                {events.map((event, index) => {
                    return (
                        <div className='test123' key={index}>
                            <div id='scheduleCard'>
                                <div id='WeekNUM'>
                                    <div className='weekInfo'>Week {event.week} of 4</div>

                                    {/* Odd Numbered Topic */}
                                    <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index)}>
                                        <div className='mobile-row'>
                                            <img src={playButton1} className={`scheduleIconImg ${expandedSections[index] ? 'rotated' : ''}`} alt='playButton1' />
                                            <div className='classTitle'>{event.name1}</div>
                                        </div>
                                        <div>
                                            <div className='clickDetails'>Topic Details</div>
                                        </div>
                                    </div>

                                    {expandedSections[index] && (
                                        <>
                                            <div className='topicDetails'>
                                                <ReactMarkdown>{event.rich1}</ReactMarkdown>
                                            </div>
                                        </>
                                    )}

                                    <div id='optionalTitle' className='subTitle'>
                                        <div className='optionTime'>{event.timeLecture1}</div>
                                        <div className='optionTitle'>Watch the Lecture*</div>
                                    </div>
                                    <div id='liveTopicTitle' className='subTitle'>
                                        <div className='optionTime'>{event.timeCoaching2}</div>
                                        <div className='optionTitle'>Live Coaching with Jared</div>
                                    </div>
                                    {/* END Odd Numbered Topic */}





                                    {/* START Even Numbered Topic */}
                                    <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index + 0.1)}>
                                        <div className='mobile-row'>
                                            <img src={playButton2} className={`scheduleIconImg ${expandedSections[index + 0.1] ? 'rotated' : ''}`} alt='playButton2' />
                                            <div className='classTitle'>{event.name2}</div>
                                        </div>
                                        <div>
                                            <div className='clickDetails'>Topic Details</div>
                                        </div>
                                    </div>

                                    {expandedSections[index + 0.1] && (
                                        <>
                                            <div className='topicDetails'>
                                                <ReactMarkdown>{event.rich2}</ReactMarkdown>
                                            </div>
                                        </>
                                    )}

                                    <div id='optionalTitle' className='subTitle'>
                                        <div className='optionTime'>{event.timeLecture2}</div>
                                        <div className='optionTitle'>Watch the Lecture*</div>
                                    </div>
                                    <div id='liveTopicTitle' className='subTitle'>
                                        <div className='optionTime'>{event.timeCoaching2}</div>
                                        <div className='optionTitle'>Live Coaching with Jared</div>
                                    </div>
                                    {/* END Even Numbered Topic */}

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}