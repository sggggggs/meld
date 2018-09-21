import Widget from "./widget.js";
import Template from "./template.js";
import Data from "./data.js";
import Piece from "./piece.js";

export default class Slot extends Widget {
    constructor(slot, job) {
        super();
        this.slot = slot;
        this.job = job;
        this.pieces = Data.JobGear[job].filter(piece => piece.slot === slot).map(piece => new Piece(piece, job));
        this._currentPiece = this.pieces[this.pieces.length - 1];
        this.pieces.forEach(piece => {
            piece.on("changed", (piece) => {
                this.currentPiece = piece;
            });
        });
        this.currentPiece = this.pieces[0];
        this.createNode();
        this.insertNode();
    }

    createNode() {
        const templateSlotHeaderCell = new Template(document.getElementById("template-header-cell"));
        const templateSlotTable = new Template(document.getElementById("template-table"));
        const headers = [this.slot, "Materia"].concat(Data.ValidStats[this.job]);
        this._node = templateSlotTable.node();        
        this._node.querySelector(".slot-header").append(...headers.map(header => templateSlotHeaderCell.replace(/%value%/g, header).node()));
        this._node.querySelector(".slot-table tbody").append(...this.pieces.map(piece => piece.node()));
    }

    set currentPiece(piece) {
        this._currentPiece = piece;
        this.pieces.forEach(p => {
            p.node().classList.toggle("selected", p === this._currentPiece);
        });
        this.raise("changed", this);
    }

    get currentPiece() {
        return this._currentPiece;
    }
}