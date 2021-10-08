SET
  NAMES utf8mb4;
CREATE database meal_share;
use meal_share;
CREATE Table meal(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(250) NOT NULL,
    description TEXT,
    location VARCHAR(250),
    when DATETIME,
    max_reservations INT,
    price DECIMAL(10.2),
    created_date DATE
)   ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE Table reservation(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    contact_phonenumber VARCHAR(250),
    contact_name VARCHAR(250),
    contact_email VARCHAR(250),
    FOREIGN KEY (meal_id) REFERENCES meal (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE review(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(300),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY(meal_id) REFERENCES meal (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Ramen","fresh noodles in steaming broth, topped with meats or vegetables","Vesterbro","2021-06-11 15:41:00",14,"150","2021-06-14 13:00:00");
INSERT INTO meal(title, description, location, when, max_reservations, price, created_date)VALUES ("Firecracker chicken","a fiery mix of chicken,red and green peppers","Frederiksberg", "2021-12-23 11:36:00", 10,"120","2021-12-25 19:30:00");
INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Durum shawarma","Shawarma in durum wrap with vegetables","Nørrebro", "2021-11-12 18:21:00",15,"40","2021-11-12 12:00:00");
INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Chicken raisukaree","a mild, coconut and citrus curry, with chicken", "Amager","2021-05-05 15:11:00", 12,"110","2021-05-09 19:00:00");
INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Katsu curry","vegetables in crispy panko breadcrumbs and covered in curry sauce", "Sydhavn","2021-11-21 11:33:00",12,"160","2021-11-25 12:10:00");
INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Hot vegatsu","seitan coated in crispy panko breadcrumbs and covered in spicy sauce", "Nordvest","2020-04-30 16:22:00",10,"115","2020-05-02 12:30:00");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(2,1,"2021-10-02","26576655","User One","user1@hotmail.com");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(3,3,"2021-10-04","26576644","User Two","user2@hotmail.com");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(4,2,"2021-10-04","26576633","User Three","user3@hotmail.com");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(5,5,"2021-10-05","26576622","User Four","user4@hotmail.com");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(6,4,"2021-10-03","26576611","User Five","user5@hotmail.com");
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(3,2,"2021-10-03","26576688","User Six","user6@hotmail.com");

INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Terrible", "The food sucked AF", 3, 2, "2021-11-12");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Excellent","It was really tasty",1, 5, "2021-12-22");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Good","Mmmmm, nom nom", 2, 4, "2021-06-30");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Horrible","Made me wanna throw up", 4, 1, "2021-08-13");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Delicious","Great meal, perfect service", 5, 5, "2021-09-22");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Average","Nothing special", 6, 3, "2021-04-21");
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Good","Loved it. Great service", 6, 2, "2021-02-11");


/* Get all meals */
SELECT * from meal;

/* Add a new meal */
INSERT INTO meal (title, description, location, when, max_reservations, price, created_date)VALUES("Pommes frites","Fresh cut potatoes cooked sunflower oil", "Vesterbro","2021-10-11 13:02:00", 12, "35", "2021-10-10 13:00:00");

/* Get a meal with any id, fx 1 */
SELECT * from meal WHERE id = 2;
/* Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE meal SET title = "Firecracker Chicken", description = "fiery mix of chicken, red and green peppers", price = 165 WHERE id = 2;
/* Delete a meal with any id, fx 1 */
DELETE FROM meal WHERE id = 7;

/* Get all reservations */
SELECT * from reservation;
/* Add a new reservation */
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES(5, 4, "2021-12-01", "26576622", "User Four", "user4@hotmail.com");
/* Get a reservation with any id, fx 1 */
SELECT * FROM reservation WHERE id = 2;
/* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE reservation set number_of_guests = 4, meal_id = 2 WHERE id = 3;
/* Delete a reservation with any id, fx 1 */
DELETE FROM reservation WHERE id = 6;

/* Get all reviews */
SELECT * FROM review;
/* Add a new review */
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES("Terrible", "Vomit alert!", 2, 1,"2021-12-02");
/* Get a review with any id, fx 1 */
SELECT * from review WHERE id = 5;
/* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE review set title = "Excellent", description = "Never had a better meal", stars = 5 WHERE id = 3;
/* Delete a review with any id, fx 1 */
DELETE FROM review WHERE id = 8;


/* Get meals that has a price smaller than a specific price fx 90 */
SELECT * from meal WHERE price < 180;
/* Get meals that still has available reservations */
SELECT * FROM meal WHERE max_reservations > (SELECT SUM(number_of_guests) FROM reservation WHERE meal_id = meal.id);

