"use strict";
const btnAgregarTarea = document.querySelector(".app__button--add-task");
const formAgregarTarea = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");
const ulTareas = document.querySelector(".app__section-task-list");
const pDescTarea = document.querySelector(".app__section-active-task-description");
const removerConcluidasBtn = document.getElementById("btn-remover-concluidas");
const removerTodasBtn = document.getElementById("btn-remover-todas");
let tareas = JSON.parse(localStorage.getItem("tareas") || '""') || [];
tareas.forEach((tarea) => {
    console.log(tarea.descripcion);
});
//any --> cualquiera
