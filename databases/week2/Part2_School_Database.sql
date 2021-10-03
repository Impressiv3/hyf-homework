/* Create a new database containing the following tables:
    Class: with the columns: id, name, begins (date), ends (date)
    Student: with the columns: id, name, email, phone, class_id (foreign key) */ 


CREATE DATABASE school_database;
Use school_database;
CREATE TABLE class (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  begins DATETIME NOT NULL,
  ends DATETIME NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE student (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(40) NOT NULL,
  phone varchar(20) NULL,
  class_id int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE CASCADE
);
/* Create an index on the name column of the student table. */
CREATE UNIQUE INDEX index_student
ON student (name);

/* Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations). */
ALTER TABLE class ADD status ENUM ("not-started", "ongoing", "finished");

/* Get all the tasks assigned to users whose email ends in @spotify.com */
