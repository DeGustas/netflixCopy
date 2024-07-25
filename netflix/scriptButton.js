let button = document.getElementsByClassName("listButton");
let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4");
let res5 = document.getElementById("res5");
let res6 = document.getElementById("res6");

function resposta1() {
    res2.style.display = "none";
    res3.style.display = "none";
    res4.style.display = "none";
    res5.style.display = "none";
    res6.style.display = "none";
    if(res1.style.display == "none") {
        res1.style.display = "block";
    } else {
        res1.style.display = "none";
    };
};

function resposta2() {
    res1.style.display = "none";
    res3.style.display = "none";
    res4.style.display = "none";
    res5.style.display = "none";
    res6.style.display = "none";
    if(res2.style.display == "none") {
        res2.style.display = "block";
    } else {
        res2.style.display = "none";
    };
};

function resposta3() {
    res1.style.display = "none";
    res2.style.display = "none";
    res4.style.display = "none";
    res5.style.display = "none";
    res6.style.display = "none";
    if(res3.style.display == "none") {
        res3.style.display = "block";
    } else {
        res3.style.display = "none";
    };
};

function resposta4() {
    res1.style.display = "none";
    res2.style.display = "none";
    res3.style.display = "none";
    res5.style.display = "none";
    res6.style.display = "none";
    if(res4.style.display == "none") {
        res4.style.display = "block";
    } else {
        res4.style.display = "none";
    };
};

function resposta5() {
    res1.style.display = "none";
    res2.style.display = "none";
    res3.style.display = "none";
    res4.style.display = "none";
    res6.style.display = "none";
    if(res5.style.display == "none") {
        res5.style.display = "block";
    } else {
        res5.style.display = "none";
    };
};

function resposta6() {
    res1.style.display = "none";
    res2.style.display = "none";
    res3.style.display = "none";
    res4.style.display = "none";
    res5.style.display = "none";
    if(res6.style.display == "none") {
        res6.style.display = "block";
    } else {
        res6.style.display = "none";
    };
};
