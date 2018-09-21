import Data from "./data.js";
import Job from "./job.js";

const Saver = {};

Saver.Decode = (encoded) => {
    return atob(encoded);
}

Saver.Load = (data) => {
    return Job.load(JSON.parse(data));
}

Saver.Generate = (job) => {
    return JSON.stringify(job.save());
}

Saver.Encode = (data) => {
    return btoa(data);
}

export default Saver;