const btnAgregarTarea = document.querySelector(".app__button--add-task") as HTMLButtonElement
const formAgregarTarea = document.querySelector(".app__form-add-task") as HTMLFormElement
const textarea = document.querySelector(".app__form-textarea") as HTMLTextAreaElement
const ulTareas = document.querySelector(".app__section-task-list") as HTMLUListElement
const pDescTarea = document.querySelector(".app__section-active-task-description") as HTMLParagraphElement
const removerConcluidasBtn = document.getElementById("btn-remover-concluidas") as HTMLButtonElement
const removerTodasBtn = document.getElementById("btn-remover-todas") as HTMLButtonElement

//interface  --> interfaz

interface Tarea {
    descripcion: string
    complete?: boolean
}

let tareas: Tarea[] = JSON.parse(localStorage.getItem("tareas") || '""') || []

tareas.forEach((tarea) => {
    console.log(tarea.descripcion)
})

//any --> cualquiera