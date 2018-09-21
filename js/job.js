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
        const results = document.createElement("pre");
        results.classList = "results";

        this._node = document.createElement("div");
        this._node.append(...this.slots.map(slot => slot.node()), results);
    }

    getSlot(slot) {
        for (let s of this.slots) {
            if (s.slot === slot) {
                return s;
            }
        }
        return null;
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

    save() {
        const obj = {
            "job": this.job,
            "slots": {}
        }

        this.slots.forEach(slot => {
            obj.slots[slot.slot] = slot.save();
        });

        return obj;
    }

    static load(obj) {
        const job = new Job(obj.job);
        for (let s in obj.slots) {
            const slot = job.getSlot(s);
            const pieceName = obj.slots[s][0];
            const materiaList = obj.slots[s][1];
            slot.set(pieceName, materiaList);
        }
        return job;
    }
}