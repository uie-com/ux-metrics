import axios from 'axios';

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appcgw78ivd84I8iC/tblIp6K3y5WInuAoR/viwISFvh98JdPpjo9?blocks=hide

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;

//// EXAMPLE ////

/// COHORT # START ///
/// COHORT # START ///
/// COHORT # START ///

// const TABLE_ID_COHORT# = process.env.REACT_APP_TABLE_ID_COHORT4;

// export const fetchCohort# = async () => {    <------ UPDATE
//   const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT#}`; <----- UPDATE
//   const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data.records.map(record => ({
//       week: record.fields.Week,

//       name1: record.fields.Name1,
//       timeLecture1: record.fields.TimeLecture1,
//       timeCoaching1: record.fields.TimeCoaching1,
//       rich1: record.fields.RichText1,

//       name2: record.fields.Name2,
//       timeLecture2: record.fields.TimeLecture2,
//       timeCoaching2: record.fields.TimeCoaching2,
//       rich2: record.fields.RichText2,
      
//     }));
//   } catch (error) {
//     console.error('Error fetching data from Airtable', error);
//     return [];
//   }
// };


/// COHORT # END ///
/// COHORT # END ///
/// COHORT # END ///














/// COHORT 4 START ///
/// COHORT 4 START ///
/// COHORT 4 START ///

const TABLE_ID_COHORT4 = process.env.REACT_APP_TABLE_ID_COHORT4;

export const COHORT4_DATE_RANGE = [
  {
    start: `Jan 13`,
    end: `Feb 5`,
  }
]

export const fetchCohort4 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT4}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      timeLecture1: record.fields.TimeLecture1,
      timeCoaching1: record.fields.TimeCoaching1,
      rich1: record.fields.RichText1,

      name2: record.fields.Name2,
      timeLecture2: record.fields.TimeLecture2,
      timeCoaching2: record.fields.TimeCoaching2,
      rich2: record.fields.RichText2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 4 END ///
/// COHORT 4 END ///
/// COHORT 4 END ///








/// COHORT 3 START ///
/// COHORT 3 START ///
/// COHORT 3 START ///

const TABLE_ID_COHORT3 = process.env.REACT_APP_TABLE_ID_COHORT3;

export const COHORT3_DATE_RANGE = [
  {
    start: `Dec 10`,
    end: `Jan 17`,
  }
]

export const fetchCohort3 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT3}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      timeLecture1: record.fields.TimeLecture1,
      timeCoaching1: record.fields.TimeCoaching1,
      rich1: record.fields.RichText1,

      name2: record.fields.Name2,
      timeLecture2: record.fields.TimeLecture2,
      timeCoaching2: record.fields.TimeCoaching2,
      rich2: record.fields.RichText2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 3 END ///
/// COHORT 3 END ///
/// COHORT 3 END ///








/// COHORT 2 START ///
/// COHORT 2 START ///
/// COHORT 2 START ///

const TABLE_ID_COHORT2 = process.env.REACT_APP_TABLE_ID_COHORT2;

export const COHORT2_DATE_RANGE = [
  {
    start: `Nov 18`,
    end: `Dec 19`,
  }
]

export const fetchCohort2 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT2}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      timeLecture1: record.fields.TimeLecture1,
      timeCoaching1: record.fields.TimeCoaching1,
      rich1: record.fields.RichText1,

      name2: record.fields.Name2,
      timeLecture2: record.fields.TimeLecture2,
      timeCoaching2: record.fields.TimeCoaching2,
      rich2: record.fields.RichText2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 2 END ///
/// COHORT 2 END ///
/// COHORT 2 END ///







/// COHORT 1 START ///
/// COHORT 1 START ///
/// COHORT 1 START ///

const TABLE_ID_OCTOBER = process.env.REACT_APP_TABLE_ID_OCTOBER;

export const COHORT_DATE_RANGE_OCTOBER = [
  {
    start: `Nov 5`,
    end: `Dec 3`,
  }
]

export const fetchOctober = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_OCTOBER}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      timeLecture1: record.fields.TimeLecture1,
      timeCoaching1: record.fields.TimeCoaching1,
      rich1: record.fields.RichText1,

      name2: record.fields.Name2,
      timeLecture2: record.fields.TimeLecture2,
      timeCoaching2: record.fields.TimeCoaching2,
      rich2: record.fields.RichText2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 1 END ///
/// COHORT 1 END ///
/// COHORT 1 END ///