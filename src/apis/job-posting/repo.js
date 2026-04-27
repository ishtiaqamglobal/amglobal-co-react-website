import axios from "axios";

export async function getAllJobsCall(keywords, job_title, address, start_date, end_date, min_salary, max_salary, page, pageSize) {
    let params = {};
    if (keywords) params.keywords = keywords;
    if (job_title) params.job_title = job_title;
    if (address) params.address = address;
    if (start_date) params.start_date = start_date;
    if (end_date) params.end_date = end_date;
    if (min_salary) params.min_salary = min_salary;
    if (max_salary) params.max_salary = max_salary;
    if (page) params.page = page;
    if (pageSize) params.pageSize = pageSize;
    let route = process.env.REACT_APP_URL.concat(
        "jobPosting/get-allPosting",
    );
    console.log(`${route} REQUEST`, params);
    return axios.get(route, {
        params,
        ["axios-retry"]: {
            retries: 0,
        },
    });
}

export async function getJobPostByIdCall(_id) {
    let params = {};
    if (_id) params._id = _id;
    let route = process.env.REACT_APP_URL.concat(
        "jobPosting/get-jobPost",
    );
    console.log(`${route} REQUEST`, params);
    return axios.get(route, {
        params,
        ["axios-retry"]: {
            retries: 0,
        },
    });
}

export async function applyForJobCall(data) {
    let route = process.env.REACT_APP_URL.concat(
        "userCv/upload",
    );
    console.log(`${route} REQUEST`);
    return axios.post(route, data, {
        ["axios-retry"]: {
            retries: 0,
        },
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}