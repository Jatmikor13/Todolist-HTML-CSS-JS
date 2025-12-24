document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const prioritySelect = document.getElementById("prioritySelect");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");
  const dateDisplay = document.getElementById("currentDate");

  // tampilkan tanggal dynamic
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateDisplay.innerText = new Date().toLocaleDateString("id-ID", options);

  //   section input tugas
  const addTask = () => {
    const taskValue = todoInput.value.trim();
    const priority = prioritySelect.value;

    if (taskValue === "") {
      alert("Tugas tidak boleh kosong!");
      return;
    }

    //   buat element list
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = ` <input type="checkbox" class="task-check" />
                    <div class="todo-text">
                        <span>${taskValue}</span>
                        <span class="badge ${priority}">${priority}</span>
                    </div>
                    <button class="delete-btn" style="background: none; color: red; border: none; cursor: pointer">X</button>`;

    // untuk event chekbox
    const chekbox = li.querySelector(".task-check");

    chekbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });

    //   btn delete
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove;
    });

    todoList.appendChild(li);
    todoInput.value = ""; // Reset input
  };

  // Event Klik Button
  addBtn.addEventListener("click", addTask);

  // Event Enter Key
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });
});
