export default class Request{
    name = "";
    request = {
        path: [],
        method: "",
        header: [],
        body: {
            mode: "",
        },
        url: {
            raw: "",
        },
        query: [
            {key: "", value:""}
        ]
    };
    response = [];
    constructor(){

    }
}