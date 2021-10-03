/* Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES("Do something", "Description of how to do something", "2021-10-03 12:00:00", "2021-10-03 12:30:00", "2021-10-03 13:00:00", 2, 1);

/* Change the title of a task */
UPDATE task SET title="JavaScript learning" WHERE id=10;

/* Change a task due date */
UPDATE task SET due_date = now() WHERE id = 10;

/* Change a task status */
UPDATE task SET status_id = 3 WHERE id = 10;

/* Mark a task as complete */
UPDATE task SET status_id=3 WHERE id=12;

/* Delete a task */
DELETE FROM task WHERE id = 12;