import Widget from "./widget.js";
import Data from "./data.js";
import Slot from "./slot.js";

export default class Job extends Widget {
    constructor(job) {
        super();
        this.job = job;
        this.slots = Data.Slots.map(slot => new Slot(slot, job));
        this.createNode();
        this.insertNode();
        this.slots.forEach(slot => {
            slot.on("changed", () => this.onChanged());
        });
        this.onChanged();
    }

    createNode() {            
        const header = document.createElement("h1");
        header.textContent = this.job;

        const results = document.createElement("pre");
        results.classList = "results";

        this._node = document.createElement("div");
        this._node.append(header, ...this.slots.map(slot => slot.node()), results);
    }

    getTotals() {
        return [Data.BaseStats[this.job]].concat(this.slots.map(slot => slot.currentPiece.getTotals())).reduce((acc, pieceTotals) => {
            for (let stat in pieceTotals) {
                if (!acc[stat]) {
                    acc[stat] = 0;
                }
                acc[stat] += pieceTotals[stat];
            }
            return acc;
        }, {});
    }

    getEstimatedMateriaValues() {
        return this.slots.map(slot => slot.currentPiece.getEstimatedMateriaValues()).reduce((acc, estimate) => {
            for (let materia in estimate) {
                if (!acc[materia]) {
                    acc[materia] = 0;
                }
                acc[materia] += estimate[materia];
            }
            return acc;
        }, {});
    }

    onChanged() {
        const totals = this.getTotals();
        const materia = this.getEstimatedMateriaValues();
        this.node().querySelector(".results").textContent = JSON.stringify([totals, materia], null, 2);
    }
}