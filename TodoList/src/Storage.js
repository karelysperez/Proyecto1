export function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}