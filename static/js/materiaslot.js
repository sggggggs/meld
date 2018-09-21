
import Widget from "./widget.js";
import Template from "./template.js";
import MateriaModal from "./materiamodal.js";
import Data from "./data.js";
    
export default class MateriaSlot extends Widget {
    constructor(slotNum, guaranteed, piece, job) {
        super();
        this.slotNum = slotNum;
        this.guaranteed = guaranteed;
        this.piece = piece
        this.job = job;
        this.createNode();
        this.insertNode();

        this._node.addEventListener("click", (event) => {
            const rect = this._node.getBoundingClientRect();
            event.stopPropagation();
            MateriaModal.Instance.open(this, rect.left, rect.bottom);
        });
        
        this._node.classList.toggle("guaranteed", this.guaranteed);
    }

    createNode() {
        const templateMateriaSlot = new Template(document.getElementById("template-materia-slot"));
        this._node = templateMateriaSlot.node();
    }

    get materia() {
        return this._materia;
    }

    set materia(materia) {
        this._materia = materia;
        if (this.materia) {
            this._node.textContent = Data.getGradeNumeral(this.materia.grade);
        } else {
            this._node.textContent = "\xa0";
        }

        this.raise("changed", this);
    }

    getEstimatedValue() {
        if (!this.materia) {
            return null;
        }

        const overmeldsDeep = Math.max(0, this.slotNum - this.piece.guaranteedslots);
        const grade = this.materia.grade;
        const expected = 1.0 / Data.OvermeldChance[overmeldsDeep][grade];

        return [Data.getMateriaOptionName(this.materia), expected];
    }
}