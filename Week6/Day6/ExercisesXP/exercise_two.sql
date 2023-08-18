select * from film

update film
set language_id=2
where film_id=133

update film
set language_id=
	case 
		when film_id=8 then 3
		when film_id=384 then 4
		else language_id
	end;
	
-- These are the foreign keys in the customer table : store_id,address_id
-- We have to check that we insert values that exist in these tables, and we can't insert random values in these colums

drop table customer_review

-- No since we are not calling his primary key in another table.

select count(*) from rental where return_date is null
-- 183.

select inventory.film_id
from inventory,rental
where inventory.inventory_id=rental.inventory_id
and rental.return_date is null

select * from film where film_id in(
select inventory.film_id
from inventory,rental
where inventory.inventory_id=rental.inventory_id
and rental.return_date is null
) 
order by replacement_cost desc
limit 30

select film_actor.film_id 
from film_actor,actor
where film_actor.actor_id=actor.actor_id
and actor.first_name = 'Penelope'
and actor.last_name = 'Monroe'

select title from film 
where lower(description) like '%sumo%' 
and lower(description) like '%wrestler%'
and film_id in (
select film_actor.film_id 
from film_actor,actor
where film_actor.actor_id=actor.actor_id
and actor.first_name = 'Penelope'
and actor.last_name = 'Monroe'
)

-- the movie is Park Citizen

select title from film 
where length < 60 
and rating='R'
and lower(description) like '%documentary%'

-- The documentary is Crossing Divoce

select title from film
where rental_rate > 4
and film_id in (select inventory.film_id from
inventory
inner join rental
on inventory.inventory_id=rental.inventory_id
inner join customer
on rental.customer_id=customer.customer_id
where rental.return_date between '2005-07-28' 
and '2005-08-01'
and customer.first_name = 'Matthew'
and customer.last_name = 'Mahan')

-- The film is Sugar Wonka

select title from film
where lower(title) like '%boat%' or lower(description) like '%boat%'
and film_id in (
select inventory.film_id from
inventory
inner join rental
on inventory.inventory_id=rental.inventory_id
inner join customer
on rental.customer_id=customer.customer_id
where customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
)
order by replacement_cost desc limit 1

-- The movie is Stone Fire
