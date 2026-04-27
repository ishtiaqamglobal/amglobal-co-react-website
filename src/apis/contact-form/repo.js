import axios from "axios";

export async function submitContactFormCall(data) {
    let route = process.env.REACT_APP_URL.concat(
        "contactForm/submitForm",
    );
    console.log(`${route} REQUEST`);
    return axios.post(route, data, {
        ["axios-retry"]: {
            retries: 0,
        },
    });
}
