import psycopg2

connection = psycopg2.connect(
    host="trumpet.db.elephantsql.com",
    database="kicsbbhb",
    user="kicsbbhb",
    password="JXcQ78Ffy6s8Ispu_oO85tXznzS803Q8"
)

cursor = connection.cursor()

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.save()

    def save(self):
        try:
            data_to_insert = (self.name, self.price)
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(query, data_to_insert)
            connection.commit()
        except Exception as err:
            print("error=>", err)
            connection.rollback()

    def delete(self):
        try:
            query = "DELETE FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (self.name,))
            connection.commit()
        except Exception as err:
            print("error=>", err)
            connection.rollback()

    def update(self, name=None, price=None):
        try:
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
            cursor.execute(query, (name, price, self.name))
            connection.commit()
            self.name = name
        except Exception as err:
            print("error=>", err)
            connection.rollback()

item = MenuItem('Burger', 35)
item = MenuItem('Pizza', 25)
item = MenuItem('Salad', 20)
item = MenuItem('Dessert', 10)

# item.update(name='Veggie Burger', price=37)
# item.delete()

# cursor.close()
# connection.close()
