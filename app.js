// DOM Elemanları
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const successAlert = document.getElementById('success-alert');

// Yeni görev ekleme
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Yeni görev elemanı oluşturma
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.textContent = 'Delete';

    // Görev silme
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    // Görevi listeye ekleme
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // LocalStorage'a ekleme
    localStorage.setItem('tasks', JSON.stringify(getTasks()));

    // Input temizleme
    taskInput.value = '';

    // Başarı mesajı
    successAlert.style.display = 'block';
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 2000);
});

// LocalStorage'dan görevleri getirme
function getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

// Sayfa yüklendiğinde görevleri listele
window.onload = function () {
    const tasks = getTasks();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function () {
            li.remove();
            localStorage.setItem('tasks', JSON.stringify(getTasks()));
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
