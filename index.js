document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("input-task");
    const frequencyInput = document.getElementById("input-frequency");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
    const themeToggle = document.getElementById("theme-toggle");
  
    // Tema ayarını localStorage'dan çek
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", mode);
    });
  
    addBtn.addEventListener("click", () => {
      const task = taskInput.value.trim();
      const frequency = frequencyInput.value.trim();
  
      if (task === "" || frequency === "") {
        alert("Lütfen yapılacak iş ve sıklık bilgisini girin.");
        return;
      }
  
      const row = document.createElement("tr");
  
      const taskCell = document.createElement("td");
      taskCell.textContent = task;
  
      const freqCell = document.createElement("td");
      freqCell.textContent = frequency;
  
      const actionsCell = document.createElement("td");
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Tamamla";
      completeBtn.classList.add("complete-btn");
      completeBtn.addEventListener("click", () => {
        taskCell.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Sil";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        row.remove();
      });
  
      actionsCell.appendChild(completeBtn);
      actionsCell.appendChild(deleteBtn);
  
      row.appendChild(taskCell);
      row.appendChild(freqCell);
      row.appendChild(actionsCell);
  
      taskList.appendChild(row);
  
      taskInput.value = "";
      frequencyInput.value = "";
    });
  });
  