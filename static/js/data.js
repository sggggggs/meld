const Data = {};

Data.getMateriaColor = (materia) => {
    return {
        "Spell Speed": "purple",
        "Skill Speed": "purple",
        "Control": "blue",
        "CP": "blue",
        "Craftsmanship": "blue",
        "GP": "green",
        "Perception": "green",
        "Gathering": "green",
        "Tenacity": "yellow",
        "Determination": "red",
        "Critical Hit": "red",
        "Direct Hit": "red",
        "Piety": "yellow",
        "Mind": "cyan",
        "Intelligence": "cyan",
        "Dexterity": "cyan",
        "Vitality": "cyan",
        "Strength": "cyan",
    }[materia.stat];
};

Data.getMateriaIcon = (materia) => {
    return `${Data.getMateriaColor(materia)}_${materia.grade}`
}

Data.getMateriaOptionName = (materia) => {
    return `${materia.stat} +${materia.amount}`;
}

Data.getGradeNumeral = (grade) => {
    return {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
    }[grade];
}

Data.getMateriaName = (materia) => {
    const stats = {
        "Spell Speed": "Quicktongue",
        "Skill Speed": "Quickarm",
        "Control": "Craftsman's Command",
        "CP": "Craftsman's Cunning",
        "Craftsmanship": "Craftsman's Competence",
        "GP": "Gatherer's Grasp",
        "Perception": "Gatherer's Guile",
        "Gathering": "Gatherer's Guerdon",
        "Tenacity": "Battledance",
        "Determination": "Savage Might",
        "Critical Hit": "Savage Aim",
        "Direct Hit": "Heavens' Eye",
        "Piety": "Piety",
        "Mind": "Mind",
        "Intelligence": "Intelligence",
        "Dexterity": "Dexterity",
        "Vitality": "Vitality",
        "Strength": "Strength",
    };
    return `${stats[materia.stat]} Materia ${Data.getGradeNumeral(materia.grade)}`;
}

Data.Slots = ["weapon", "secondary", "head", "body", "hands", "waist", "legs", "feet", "earrings", "necklace", "bracelet", "ring1", "ring2"];

Data.Materia = [
    {  "stat": "Spell Speed", "grade": 1, "amount": 2, },
    {  "stat": "Spell Speed", "grade": 2, "amount": 4 },
    {  "stat": "Spell Speed", "grade": 3, "amount": 6 },
    {  "stat": "Spell Speed", "grade": 4, "amount": 9 },
    {  "stat": "Spell Speed", "grade": 5, "amount": 12 },
    {  "stat": "Spell Speed", "grade": 6, "amount": 40 },
    {  "stat": "Skill Speed", "grade": 1, "amount": 2 },
    {  "stat": "Skill Speed", "grade": 2, "amount": 4 },
    {  "stat": "Skill Speed", "grade": 3, "amount": 6 },
    {  "stat": "Skill Speed", "grade": 4, "amount": 9 },
    {  "stat": "Skill Speed", "grade": 5, "amount": 12 },
    {  "stat": "Skill Speed", "grade": 6, "amount": 40 },
    {  "stat": "Control", "grade": 1, "amount": 1 },
    {  "stat": "Control", "grade": 2, "amount": 2 },
    {  "stat": "Control", "grade": 3, "amount": 3 },
    {  "stat": "Control", "grade": 4, "amount": 4 },
    {  "stat": "Control", "grade": 5, "amount": 7 },
    {  "stat": "Control", "grade": 6, "amount": 10 },
    {  "stat": "CP", "grade": 1, "amount": 1 },
    {  "stat": "CP", "grade": 2, "amount": 2 },
    {  "stat": "CP", "grade": 3, "amount": 3 },
    {  "stat": "CP", "grade": 4, "amount": 4 },
    {  "stat": "CP", "grade": 5, "amount": 6 },
    {  "stat": "CP", "grade": 6, "amount": 8 },
    {  "stat": "Craftsmanship", "grade": 1, "amount": 3 },
    {  "stat": "Craftsmanship", "grade": 2, "amount": 4 },
    {  "stat": "Craftsmanship", "grade": 3, "amount": 5 },
    {  "stat": "Craftsmanship", "grade": 4, "amount": 6 },
    {  "stat": "Craftsmanship", "grade": 5, "amount": 11 },
    {  "stat": "Craftsmanship", "grade": 6, "amount": 16 },
    {  "stat": "GP", "grade": 1, "amount": 1 },
    {  "stat": "GP", "grade": 2, "amount": 2 },
    {  "stat": "GP", "grade": 3, "amount": 3 },
    {  "stat": "GP", "grade": 4, "amount": 4 },
    {  "stat": "GP", "grade": 5, "amount": 6 },
    {  "stat": "GP", "grade": 6, "amount": 8 },
    {  "stat": "Perception", "grade": 1, "amount": 3 },
    {  "stat": "Perception", "grade": 2, "amount": 4 },
    {  "stat": "Perception", "grade": 3, "amount": 5 },
    {  "stat": "Perception", "grade": 4, "amount": 6 },
    {  "stat": "Perception", "grade": 5, "amount": 10 },
    {  "stat": "Perception", "grade": 6, "amount": 15 },
    {  "stat": "Gathering", "grade": 1, "amount": 3 },
    {  "stat": "Gathering", "grade": 2, "amount": 4 },
    {  "stat": "Gathering", "grade": 3, "amount": 5 },
    {  "stat": "Gathering", "grade": 4, "amount": 6 },
    {  "stat": "Gathering", "grade": 5, "amount": 10 },
    {  "stat": "Gathering", "grade": 6, "amount": 15 },
    {  "stat": "Tenacity", "grade": 1, "amount": 2 },
    {  "stat": "Tenacity", "grade": 2, "amount": 4 },
    {  "stat": "Tenacity", "grade": 3, "amount": 6 },
    {  "stat": "Tenacity", "grade": 4, "amount": 9 },
    {  "stat": "Tenacity", "grade": 5, "amount": 12 },
    {  "stat": "Tenacity", "grade": 6, "amount": 40 },
    {  "stat": "Determination", "grade": 1, "amount": 2 },
    {  "stat": "Determination", "grade": 2, "amount": 4 },
    {  "stat": "Determination", "grade": 3, "amount": 6 },
    {  "stat": "Determination", "grade": 4, "amount": 9 },
    {  "stat": "Determination", "grade": 5, "amount": 12 },
    {  "stat": "Determination", "grade": 6, "amount": 40 },
    {  "stat": "Critical Hit", "grade": 1, "amount": 2 },
    {  "stat": "Critical Hit", "grade": 2, "amount": 4 },
    {  "stat": "Critical Hit", "grade": 3, "amount": 6 },
    {  "stat": "Critical Hit", "grade": 4, "amount": 9 },
    {  "stat": "Critical Hit", "grade": 5, "amount": 12 },
    {  "stat": "Critical Hit", "grade": 6, "amount": 40 },
    {  "stat": "Direct Hit", "grade": 1, "amount": 2 },
    {  "stat": "Direct Hit", "grade": 2, "amount": 4 },
    {  "stat": "Direct Hit", "grade": 3, "amount": 6 },
    {  "stat": "Direct Hit", "grade": 4, "amount": 9 },
    {  "stat": "Direct Hit", "grade": 5, "amount": 12 },
    {  "stat": "Direct Hit", "grade": 6, "amount": 40 },
    {  "stat": "Piety", "grade": 1, "amount": 2 },
    {  "stat": "Piety", "grade": 2, "amount": 4 },
    {  "stat": "Piety", "grade": 3, "amount": 6 },
    {  "stat": "Piety", "grade": 4, "amount": 9 },
    {  "stat": "Piety", "grade": 5, "amount": 12 },
    {  "stat": "Piety", "grade": 6, "amount": 40 },
    {  "stat": "Mind", "grade": 1, "amount": 1 },
    {  "stat": "Mind", "grade": 2, "amount": 2 },
    {  "stat": "Mind", "grade": 3, "amount": 4 },
    {  "stat": "Mind", "grade": 4, "amount": 7 },
    {  "stat": "Mind", "grade": 5, "amount": 15 },
    {  "stat": "Mind", "grade": 6, "amount": 25 },
    {  "stat": "Intelligence", "grade": 1, "amount": 1 },
    {  "stat": "Intelligence", "grade": 2, "amount": 2 },
    {  "stat": "Intelligence", "grade": 3, "amount": 4 },
    {  "stat": "Intelligence", "grade": 4, "amount": 7 },
    {  "stat": "Intelligence", "grade": 5, "amount": 15 },
    {  "stat": "Intelligence", "grade": 6, "amount": 25 },
    {  "stat": "Dexterity", "grade": 1, "amount": 1 },
    {  "stat": "Dexterity", "grade": 2, "amount": 2 },
    {  "stat": "Dexterity", "grade": 3, "amount": 4 },
    {  "stat": "Dexterity", "grade": 4, "amount": 7 },
    {  "stat": "Dexterity", "grade": 5, "amount": 15 },
    {  "stat": "Dexterity", "grade": 6, "amount": 25 },
    {  "stat": "Vitality", "grade": 1, "amount": 1 },
    {  "stat": "Vitality", "grade": 2, "amount": 2 },
    {  "stat": "Vitality", "grade": 3, "amount": 4 },
    {  "stat": "Vitality", "grade": 4, "amount": 8 },
    {  "stat": "Vitality", "grade": 5, "amount": 15 },
    {  "stat": "Vitality", "grade": 6, "amount": 25 },
    {  "stat": "Strength", "grade": 1, "amount": 1 },
    {  "stat": "Strength", "grade": 2, "amount": 2 },
    {  "stat": "Strength", "grade": 3, "amount": 4 },
    {  "stat": "Strength", "grade": 4, "amount": 7 },
    {  "stat": "Strength", "grade": 5, "amount": 15 },
    {  "stat": "Strength", "grade": 6, "amount": 25 },
].map(materia => {
    let result = Object.assign({}, materia);
    result.name = Data.getMateriaName(materia);
    result.icon = Data.getMateriaIcon(materia);
    return result;
});

Data.FindMateria = (stat, grade) => {
    for (let m of Data.Materia) {
        if (m.stat === stat && m.grade === grade) {
            return m;
        }
    }
}

Data.ValidStats = {
    "WHM": ["Mind", "Direct Hit", "Critical Hit", "Determination", "Spell Speed", "Piety", "Vitality"],
    "ALC": ["Craftsmanship", "Control", "CP"]
};

Data.Jobs = ["WHM", "ALC"];

Data.BaseStats = {
    "WHM": {},
    "ALC": { "Craftsmanship": 0, "Control": 0, "CP": 180 }
};

Data.OvermeldChance = {
    0: { 1: 1.00, 2: 1.00, 3: 1.00, 4: 1.00, 5: 1.00, 6: 1.00},
    1: { 1: 0.45, 2: 0.41, 3: 0.35, 4: 0.29, 5: 0.17, 6: 0.17},
    2: { 1: 0.24, 2: 0.22, 3: 0.19, 4: 0.16, 5: 0.10, 6: 0.00},
    3: { 1: 0.14, 2: 0.13, 3: 0.11, 4: 0.10, 5: 0.07, 6: 0.00},
    4: { 1: 0.08, 2: 0.08, 3: 0.07, 4: 0.06, 5: 0.05, 6: 0.00}
};

Data.Gear = [
    { "name": "Black Willow Cane",                  "job": "WHM", "slot": "weapon", "ilvl": 350, "guaranteedslots": 2, "overmeldslots": 3, "Mind": 330, "Critical Hit": 298, "Spell Speed": 209, "Vitality": 322, "cap": { "Mind": 0, "Critical Hit": 0, "Spell Speed": 0, "Vitality": 0 } },
    { "name": "True Linen Hat of Healing",          "job": "WHM", "slot": "head", "ilvl": 350, "guaranteedslots": 2, "overmeldslots": 3, "Mind": 180, "Determination": 114, "Spell Speed": 163, "Vitality": 174, "cap": { "Mind": 0, "Critical Hit": 0, "Spell Speed": 0, "Vitality": 0 } },
    { "name": "Nightsteel Alembic",                 "job": "ALC", "slot": "weapon", "ilvl": 345, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 555, "Control": 298, "CP": 0, "cap": { "Craftsmanship": 652, "Control": 350, "CP": 5 } },
    { "name": "Nightsteel Mortar",                  "job": "ALC", "slot": "secondary", "ilvl": 325, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 500, "Control": 268, "CP": 0, "cap": { "Craftsmanship": 589, "Control": 316, "CP": 5 } },
    { "name": "Onishi Kasa",                        "job": "ALC", "slot": "head", "ilvl": 340, "guaranteedslots": 2, "overmeldslots": 3, "Craftsmanship": 0, "Control": 145, "CP": 7, "cap": { "Craftsmanship": 36, "Control": 171, "CP": 8 } },
    { "name": "Onishi Dogi",                        "job": "ALC", "slot": "body", "ilvl": 340, "guaranteedslots": 2, "overmeldslots": 3, "Craftsmanship": 464, "Control": 145, "CP": 4, "cap": { "Craftsmanship": 545, "Control": 171, "CP": 5 } },
    { "name": "Onishi Tekko",                       "job": "ALC", "slot": "hands", "ilvl": 340, "guaranteedslots": 2, "overmeldslots": 3, "Craftsmanship": 0, "Control": 145, "CP": 7, "cap": { "Craftsmanship": 36, "Control": 171, "CP": 8 } },
    { "name": "Onishi Obi",                         "job": "ALC", "slot": "waist", "ilvl": 340, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 0, "Control": 145, "CP": 0, "cap": { "Craftsmanship": 36, "Control": 171, "CP": 8 } },
    { "name": "Onishi Momohiki",                    "job": "ALC", "slot": "legs", "ilvl": 340, "guaranteedslots": 2, "overmeldslots": 3, "Craftsmanship": 22, "Control": 145, "CP": 0, "cap": { "Craftsmanship": 36, "Control": 171, "CP": 8 } },
    { "name": "Onishi Zori",                        "job": "ALC", "slot": "feet", "ilvl": 340, "guaranteedslots": 2, "overmeldslots": 3, "Craftsmanship": 22, "Control": 145, "CP": 0, "cap": { "Craftsmanship": 36, "Control": 171, "CP": 8 } },
    { "name": "Silvergrace Earrings of Crafting",   "job": "ALC", "slot": "earrings", "ilvl": 340, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 9, "Control": 0, "CP": 49, "cap": { "Craftsmanship": 36, "Control": 51, "CP": 64 } },
    { "name": "Black Willow Necklace of Crafting",  "job": "ALC", "slot": "necklace", "ilvl": 340, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 9, "Control": 0, "CP": 49, "cap": { "Craftsmanship": 36, "Control": 51, "CP": 64 } },
    { "name": "Black Willow Armillae of Crafting",  "job": "ALC", "slot": "bracelet", "ilvl": 340, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 9, "Control": 0, "CP": 49, "cap": { "Craftsmanship": 36, "Control": 51, "CP": 64 } },
    { "name": "Black Willow Ring of Crafting",      "job": "ALC", "slot": "ring", "ilvl": 340, "guaranteedslots": 1, "overmeldslots": 4, "Craftsmanship": 0, "Control": 17, "CP": 25, "cap": { "Craftsmanship": 55, "Control": 68, "CP": 33 } },
    { "name": "Test Ring 1",                        "job": "ALC", "slot": "ring", "ilvl": 1, "guaranteedslots": 3, "overmeldslots": 2, "Craftsmanship": 0, "Control": 0, "CP": 0, "cap": { "Craftsmanship": 0, "Control": 0, "CP": 0 } },
    { "name": "Test Ring 2",                        "job": "ALC", "slot": "ring", "ilvl": 1, "guaranteedslots": 2, "overmeldslots": 0, "Craftsmanship": 0, "Control": 0, "CP": 0, "cap": { "Craftsmanship": 0, "Control": 0, "CP": 0 } },
];

Data.Stats = [
    "Craftsmanship",
    "Control",
    "CP"
];

Data.SlotToType = (slot) => {
    switch (slot) {
        case "ring1":
        case "ring2":
            return "ring";
    }
    return slot;
}

Data.JobGear = {};
Data.Jobs.forEach(job => Data.JobGear[job] = Data.Gear.filter(piece => piece.job === job));

export default Data;