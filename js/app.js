 // 获取DOM元素
 const taskInput = document.getElementById('taskInput');
 const addBtn = document.getElementById('addBtn');
 const taskList = document.getElementById('taskList');

 // 添加任务函数
 function addTask() {
     const taskText = taskInput.value.trim();
     
     if (taskText === '') {
         alert('请输入任务内容！');
         return;
     }
     
     // 创建列表项
     const li = document.createElement('li');
     li.innerHTML = `
         <span>${taskText}</span>
         <button class="delete-btn" onclick="deleteTask(this)">删除</button>
     `;
     
     taskList.appendChild(li);
     taskInput.value = '';
 }

 // 删除任务函数
 function deleteTask(btn) {
     btn.parentElement.remove();
 }

 // 添加事件监听
 addBtn.addEventListener('click', addTask);
 taskInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         addTask();
     }
 });