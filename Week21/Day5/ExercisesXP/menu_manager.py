import psycopg2

connection = psycopg2.connect(
    host="trumpet.db.elephantsql.com",
    database="kicsbbhb",
    user="kicsbbhb",
    password="JXcQ78Ffy6s8Ispu_oO85tXznzS803Q8"
)

cursor = connection.cursor()

class MenuManager:
    
    @staticmethod
    def get_by_name(item_name):
        try:
            query = "SELECT * FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query,(item_name,))
            item = cursor.fetchone()
            if item:
                return item
            else:
                return None       
        except Exception as err:
            print("error=>",err)
            connection.rollback()       

    @staticmethod
    def all_items():
        try:
            query = "SELECT * FROM Menu_Items"
            cursor.execute(query)
            items = cursor.fetchall()
            if items:
                return items
            else:
                return None       
        except Exception as err:
            print("error=>",err)
            connection.rollback()  

items = MenuManager.all_items()
item = MenuManager.get_by_name("Burger")
print(items)
print(item)