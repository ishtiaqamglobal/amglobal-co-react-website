import axios from "axios";

export async function getAllJobCategoriesCall(page, pageSize) {
    let params = {};
    if (page) params.page = page;
    if (pageSize) params.pageSize = pageSize;
    let route = process.env.REACT_APP_URL.concat(
        "jobCategories/get-allCategory",
    );
    console.log(`${route} REQUEST`, params);
    return axios.get(route, {
        params,
        ["axios-retry"]: {
            retries: 0,
        },
    });
}
