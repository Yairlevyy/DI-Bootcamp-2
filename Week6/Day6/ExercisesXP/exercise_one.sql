select name from language

select film.title,film.description,language.name
from film 
inner join language
on film.language_id=language.language_id

select film.title,film.description,language.name
from film 
right join language
on film.language_id=language.language_id

create table new_film (
id serial,
name varchar(100)
)

alter table new_film 
add primary key (id)

insert into new_film (name)
values('The first film'),
('The second film'),
('The third film')

select * from new_film

create table customer_review (
review_id serial primary key not null,
film_id int references new_film(id) on delete cascade,
language_id int references language(language_id),
title varchar(100),
score integer,
review_text text,
last_update date
)

select * from film

insert into customer_review (film_id,language_id,title,score,review_text,last_update)
values(1,1,'Good Film',7,'A captivating masterpiece that weaves emotion and intrigue, leaving an indelible mark.','2023-08-18'),
(2,1,'Very surprising end',8,'An enchanting cinematic experience that bursts with charm and delightful surprises.','2023-08-18'),
(3,1,'Amazing drama!',9,'A visually striking film that mesmerizes with its unique blend of creativity and intensity.','2023-08-18')

delete from new_film where id=2

select * from customer_review
-- The review was also deleted automatically.


