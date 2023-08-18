create table customer (
customer_id serial primary key,
first_name varchar(100) not null,
last_name varchar(100) not null
)

create table customer_profile(
profile_id serial primary key,
isLoggedIn boolean default false,
customer_id int unique references customer(customer_id)
)

insert into customer (first_name,last_name)
values('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive')

select * from customer

insert into customer_profile (isLoggedIn,customer_id)
values (true,1),
(false,2)

select a.first_name
from customer a
inner join 
customer_profile b
on a.customer_id=b.customer_id
where b.isLoggedIn=true

select a.first_name,b.isLoggedIn
from customer a
full join customer_profile b
on a.customer_id=b.customer_id

select count(*) from customer_profile
where isLoggedIn is false

-- Part 2

create table book (
book_id serial primary key,
title varchar(100) not null,
author varchar(100) not null
)

insert into book (title,author)
values('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee')

create table student (
student_id serial primary key,
name varchar(100) not null unique,
age int check(age<=15)
)

insert into student (name,age)
values ('John',12),
('Lera',11),
('Patrick',10),
('Bob',14)

create table library (
book_fk_id int,
student_id int,
borrowed_date date,
foreign key (book_fk_id) references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
foreign key (student_id) references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)


INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
), 
(
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
)

select * from library

SELECT s.name AS student_name, b.title AS borrowed_book_title
FROM student s
JOIN library l ON s.student_id = l.student_id
JOIN book b ON l.book_fk_id = b.book_id;

select avg(age) from student where 
student_id in (select student_id from library where
book_fk_id=1)

DELETE FROM student
WHERE student_id = 2;

select * from library
--The rows that was containing this id was deleted.








