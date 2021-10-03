/* Create a new database containing the following tables:
    Class: with the columns: id, name, begins (date), ends (date)
    Student: with the columns: id, name, email, phone, class_id (foreign key) */
CREATE DATABASE school_database;
Use school_database;
CREATE TABLE class (
  `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `begins` DATE,
  `ends` DATE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE student (
  `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone` INT(15) NOT NULL UNIQUE,
  `class_id` INT(10),
  FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/* Create an index on the name column of the student table. */
CREATE UNIQUE INDEX index_student ON student (name);
/* Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations). */
ALTER TABLE
  class
ADD
  status ENUM ("not-started", "ongoing", "finished");