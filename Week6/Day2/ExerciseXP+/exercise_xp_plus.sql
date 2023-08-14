create table students (
id serial,
first_name varchar(100),
last_name varchar(100),
birth_date date
)

insert into students (first_name,last_name,birth_date)
values ('Marc','Benichou',TO_DATE('02/11/1998', 'DD/MM/YYYY')),
('Yoan','Cohen',TO_DATE('03/12/2010', 'DD/MM/YYYY')),
('Lea','Benichou',TO_DATE('27/07/1987', 'DD/MM/YYYY')),
('Amelia','Dux',TO_DATE('07/04/1996', 'DD/MM/YYYY')),
('David','Grez',TO_DATE('14/06/2003', 'DD/MM/YYYY')),
('Omer','Simpson',TO_DATE('03/10/1980', 'DD/MM/YYYY'))

insert into students (first_name,last_name,birth_date)
values ('Yair','Levy',TO_DATE('22/05/2003', 'DD/MM/YYYY'))

select * from students

select first_name,last_name from students

select first_name,last_name from students where id=2

select first_name,last_name from students where last_name like 'Benichou' and first_name like 'Marc'

select first_name,last_name from students where last_name like 'Benichou' or first_name like 'Marc'

select first_name,last_name from students where first_name like '%a%'

select first_name,last_name from students where first_name like 'a%'

select first_name,last_name from students where substring(first_name,length(first_name)-1,1) like 'a'

select first_name,last_name from students where id=1 and id=3

select * from students where birth_date >= '2000-01-01'











