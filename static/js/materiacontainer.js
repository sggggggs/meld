import Widget from "./widget.js";
import Template from "./template.js";
import MateriaSlot from "./materiaslot.js";

export default class MateriaContainer extends Widget {
    constructor(piece, job) {
        super();
        this.piece = piece
        this.job = job;
        this.createMateriaSlots();
        this.createNode();
        this.insertNode();
    }

    createNode() {            
        const templatePieceRowCellMateria = new Template(document.getElementById("template-row-cell-materia"));
        this._node = templatePieceRowCellMateria.node();
        
        const cell = this._node.querySelector(".piece-row-cell-materia");

        cell.append(...this.materiaSlots.map(slot => slot.node()));
    }

    createMateriaSlots() {
        const slotCount = this.piece.guaranteedslots + this.piece.overmeldslots;
        const materiaSlotData = Array.from({ "length": slotCount }, (_, k) => { 
            return { "slotNum": k + 1, "guaranteed": k < this.piece.guaranteedslots };
        });

        this.materiaSlots = materiaSlotData.map(data => {
            const slot = new MateriaSlot(data.slotNum, data.guaranteed, this.piece, this.job);
            slot.on("changed", () => this.raise("changed", this));
            return slot;
        });
    }
    
    getTotals() {
        return this.materiaSlots.map(slot => slot.materia).reduce((acc, materia) => {
            if (materia) {
                if (!acc[materia.stat]) {
                    acc[materia.stat] = 0;
                }
                acc[materia.stat] += materia.amount;
            }
            return acc;
        }, {});
    }

    getEstimatedValues() {
        return this.materiaSlots.map(slot => slot.getEstimatedValue()).reduce((acc, estimate) => {
            if (estimate) {
                if (!acc[estimate[0]]) {
                    acc[estimate[0]] = 0;
                }
                acc[estimate[0]] += estimate[1];
            }
            return acc;
        }, {});
    }
}