select * from customer 

select first_name || ' ' || last_name as full_name from customer

select distinct create_date from customer

select * from customer order by first_name desc

select film_id,title,description,release_year,rental_rate from film order by rental_rate asc

select address,phone from address

select * from film where film_id=15 or film_id=150

select film_id,title,description,length,rental_rate from film where lower(title) like '22 jump street'

select film_id,title,description,length,rental_rate from film where title like '22%'

select * from film order by rental_rate limit 10

select * from film order by rental_rate offset 10 limit 10

select customer.first_name,customer.last_name,payment.amount,payment.payment_date
from customer,payment
where customer.customer_id=payment.customer_id
order by customer.customer_id

select * from film
left join inventory
on film.film_id = inventory.film_id
where inventory.film_id is null

select city.city,country.country
from city,country
where city.country_id = country.country_id



