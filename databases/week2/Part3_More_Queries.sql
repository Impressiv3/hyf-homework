/* Get all the tasks assigned to users whose email ends in @spotify.com */

SELECT user.id,task.title,user.email FROM user, user_task, task 
WHERE user.id = user_task.user_id AND user_task.task_id = task.id 
AND user.email LIKE "%@spotify.com";

/* Get all the tasks for 'Donald Duck' with status 'Not started' */
SELECT * FROM task JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user.id = user_task.user_id WHERE user.name = "Donald Duck" 
AND task.status_id = 1;

/* Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number) */
SELECT  task.* FROM task JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user.id = user_task.user_id WHERE user.name = "Maryrose Meadows" 
AND month(created) = 9;

/* Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by) */
SELECT month(created) as Month, count(*) as Tasks_count FROM task
GROUP BY month(created);