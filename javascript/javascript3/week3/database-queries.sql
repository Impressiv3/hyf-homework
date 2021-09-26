#Find out how many tasks are in the task table
SELECT COUNT(*) AS Total_tasks FROM task;

#Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) FROM task WHERE due_date IS NULL;

#Find all the tasks that are marked as done
SELECT task.title, status.name AS Task_Done FROM task, status WHERE status.name LIKE "%Done%" AND task.status_id=status.id;

#Find all the tasks that are not marked as done
SELECT task.title, status.name AS Not_Done FROM task, status WHERE status.name NOT LIKE "%Done%" AND task.status_id=status.id;

#Get all the tasks, sorted with the most recently created first
SELECT title, description, created FROM task ORDER BY created DESC;

#Get the single most recently created task
SELECT title, description, created AS Latest_created FROM task ORDER BY created DESC LIMIT 1;

#Get the title and due date of all tasks WHERE the title or description contains database
SELECT title, due_date FROM task WHERE title LIKE "%database%" OR description LIKE "%database%";

#Get the title and status (as text) of all tasks
SELECT task.title, status.name AS Status FROM task, status WHERE task.status_id=status.id;

#Get the name of each status, along with a count of how many tasks have that status
select  status.name, count(status.name) as Total_tasks FROM task, status WHERE task.status_id = status.id GROUP BY status.name;

#Get the names of all statuses, sorted by the status with most tasks first
SELECT  status.name, count(status.name) as Total_tasks FROM task, status WHERE task.status_id = status.id GROUP BY status.name 
ORDER BY COUNT(status.name) DESC;
