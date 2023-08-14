create table items (
product_id serial,
product_name varchar(100) not null,
product_price integer not null
)

insert into items (product_name,product_price)
values('Small Desk',100),
('Large Desk','300'),
('Fan',80)

create table customers (
customer_id serial,
first_name varchar(100),
last_name varchar(100)
)

insert into customers (first_name,last_name)
values ('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson')

select product_id,product_name,product_price from items

select product_id,product_name,product_price from items where product_price>80

select product_id,product_name,product_price from items where product_price<=300

select customer_id,first_name,last_name from customers where last_name like 'Smith'
-- Outcome is an empty table

select customer_id,first_name,last_name from customers where last_name like 'Jones'

select customer_id,first_name,last_name from customers where first_name not like 'Scott'

