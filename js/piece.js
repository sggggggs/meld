import Widget from "./widget.js";
import Template from "./template.js";
import Data from "./data.js";
import MateriaContainer from "./materiacontainer.js";

export default class Piece extends Widget {
    constructor(piece, job) {
        super();
        this.piece = piece;
        this.job = job;
        this.statCells = new Map();
        this.materiaContainer = new MateriaContainer(piece, job);
        this.materiaContainer.on("changed", () => this.onChanged());
        this.createNode();
        this.insertNode();
        this.updateStats();
        this._node.addEventListener("click", () => this.onChanged());
    }

    createNode() {
        const templatePieceRow = new Template(document.getElementById("template-row"));
        const templatePieceRowCell = new Template(document.getElementById("template-row-cell"));
        const templatePieceRowHeader = new Template(document.getElementById("template-row-header"));
        this._node = templatePieceRow.node();
        const stats = Data.ValidStats[this.job];
        const row = this._node.querySelector(".piece-row");
        row.append(
            templatePieceRowHeader.replace(/%value%/g, this.piece.name).node(),
            this.materiaContainer.node(), 
            ...stats.map(stat => templatePieceRowCell.replace(/%stat%/g, stat).node())
        );
    }

    updateStats() {
        const stats = Data.ValidStats[this.job];
        const materiaTotals = this.materiaContainer.getTotals();

        stats.forEach(stat => {
            const container = this.node().querySelector(`.${stat}`);

            const current = this.piece[stat];
            const add = materiaTotals[stat] ? materiaTotals[stat] : 0;
            const total = current + add;
            const cap = this.piece.cap[stat];

            container.querySelector(".piece-stat").textContent = current;
            container.querySelector(".piece-add").textContent = add;
            container.querySelector(".piece-total").textContent = total;
            container.querySelector(".piece-cap").textContent = cap;

            container.querySelector(".piece-add").classList.toggle("free", add <= 0);
            container.querySelector(".piece-add-div").classList.toggle("free", add <= 0);
            container.querySelector(".piece-total").classList.toggle("overcap", total > cap);
        });
    }

    onChanged() {
        this.updateStats();
        this.raise("changed", this);
    }

    getTotals() {
        const totals = {};
        const materiaTotals = this.materiaContainer.getTotals();
        const stats = Data.ValidStats[this.job];

        stats.forEach(stat => {
            const p = this.piece[stat] ? this.piece[stat] : 0;
            const m = materiaTotals[stat] ? materiaTotals[stat] : 0;
            const c = this.piece.cap[stat];
            totals[stat] = Math.min(c, p + m);
        });

        return totals;
    }

    getEstimatedMateriaValues() {
        return this.materiaContainer.getEstimatedValues();
    }

    set(materiaList) {
        this.materiaContainer.set(materiaList);
    }

    save() {
        return [this.piece.name, this.materiaContainer.save()];
    }
}