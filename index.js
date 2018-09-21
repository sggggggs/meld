import Job from "./js/job.js";
import MateriaModal from "./js/materiamodal.js";
import Data from "./js/data.js";
import Saver from "./js/saver.js";

let jobPicker = null;
let container = null;
let generateSaveButton = null;
let loadSaveButton = null;
let generateOutputField = null;
let loadInputField = null;

let currentJob = null;

const setJob = (job) => {
    currentJob = job;
    jobPicker.value = job.job;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(currentJob.node());
}

const loadJob = (encoded) => {
    try {
        setJob(Saver.Load(Saver.Decode(loadInputField.value)));
    } catch(err) {
        console.error(err);
    }
}

const onload = () => {
    jobPicker = document.getElementById("job-picker");
    container = document.getElementById("container");
    generateSaveButton = document.getElementById("generate-save");
    loadSaveButton = document.getElementById("load-save");
    generateOutputField = document.getElementById("generate-output");
    loadInputField = document.getElementById("load-input");

    document.body.appendChild(MateriaModal.Instance.node());
    jobPicker.append(
        document.createElement("option"),
        ...Data.Jobs.map(job => {
            const option = document.createElement("option");
            option.textContent = job;
            option.value = job;
            return option;
        })
    );
    jobPicker.addEventListener("change", event => {
        const job = event.target.value;
        if (job) {
            setJob(new Job(job));
        }
    });
    generateSaveButton.addEventListener("click", () => {
        if (currentJob) {
            generateOutputField.value = Saver.Encode(Saver.Generate(currentJob));
        }
    });
    loadSaveButton.addEventListener("click", () => {
        loadJob(loadInputField.value);
    });

    const loadParam = new URL(window.location).searchParams.get("load");
    if (loadParam) {
        loadJob(loadParam);
    }
};

window.onload = onload;