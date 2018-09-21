import Widget from "./widget.js";
import Template from "./template.js";
import Data from "./data.js";

export default class MateriaModal extends Widget {
    constructor() {
        super();
        this.createNode();
        this.insertNode();

        this.documentClickListener = (event) => {
            if (!event.path.includes(this._node)) {
                this.close();
            }
        };
    }

    createNode() {
        const templateMateriaModal = new Template(document.getElementById("template-materia-modal"));
        this._node = templateMateriaModal.node();
    }

    open(materiaSlot, x, y) {
        this._currentSlot = materiaSlot;
        this._node.style.display = "block";
        this._node.style.left = `${x}px`;
        this._node.style.top = `${y}px`;
        this._node.querySelector("#materia-modal-header").textContent = `${this._currentSlot.piece.name} - Slot ${this._currentSlot.slotNum}`;
        this.populateDropdown();
        document.addEventListener("click", this.documentClickListener);
    }

    close() {
        this._currentSlot = null;
        this._node.style.display = "none";
        document.removeEventListener("click", this.documentClickListener);
    }

    populateDropdown() {
        const dropdown = this._node.querySelector("#materia-modal-dropdown");

        // get all materia addable to this slot
        const validStats = Data.ValidStats[this._currentSlot.job];
        const materiaList = validStats.map(stat => Data.Materia
            .filter(materia => materia.stat === stat)
            .sort((m1, m2) => m1.grade < m2.grade)
        ).reduce((acc, val) => acc.concat(val), []);

        // remove previous entries
        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
        }

        // add entries
        [{ "text": "None", "value": null }]
            .concat(materiaList.map(materia => { 
                return { 
                    "text": Data.getMateriaOptionName(materia), 
                    "value": JSON.stringify(materia), 
                    "disabled": materia.grade === 6 && this._currentSlot.slotNum - this._currentSlot.piece.guaranteedslots > 1
                };
            }))
            .forEach(optionData => {
                const option = document.createElement("option");
                option.textContent = optionData.text;
                option.value = optionData.value;
                option.disabled = optionData.disabled;
                dropdown.appendChild(option);
            });

        // update previously selected
        const selectedMateria = this._currentSlot.materia;
        if (selectedMateria) {
            const selectedMateriaName = Data.getMateriaOptionName(selectedMateria);
            for (let option of dropdown.options) {
                if (selectedMateriaName === option.textContent) {
                    option.selected = true;
                    break;
                }
            }
        }
        
        // add selection event
        dropdown.onchange = (event) => {
            const value = event.target.value;
            if (value) {
                const materia = JSON.parse(value);
                this._currentSlot.materia = materia;
            }
            this.close();
        };
    }
}

MateriaModal.Instance = new MateriaModal();