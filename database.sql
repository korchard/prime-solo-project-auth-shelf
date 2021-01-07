-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "comment" TEXT DEFAULT 'No comment added.'
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
); 

SELECT * from item;

INSERT INTO "item" ("description", "comment", "image_url", "user_id") VALUES 
('Orange Cat','Comment1' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft4oqHlvJCS7pPRiIcMBk2yybQSsdqc4aGaNVn7tpQ8YOLeXqsZa8GvZaQJF1Moco7CSl-vk&usqp=CAc', 1), 
('Blue Cat', 'Comment2' ,'https://i.pinimg.com/originals/69/7e/90/697e90130279d34c18afa75317d6a363.jpg', 1),
('Green Dog', 'Comment3' , 'https://barkpost.com/wp-content/uploads/2016/04/Hulk-Retriever.jpg', 2),
('Brown Dog', 'Comment4' , 'https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2017/09/brown-dog-names-1.jpg', 2),
('Yellow Elephant', 'Comment5' ,'https://pixy.org/src/79/795388.jpeg', 3),
('Grey Elephant', 'Comment6' , 'https://images-na.ssl-images-amazon.com/images/I/71NUs1xrwIL._AC_SX425_.jpg', 3); 