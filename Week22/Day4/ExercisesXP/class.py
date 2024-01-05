# Exercise 1

from collections import deque

# class Scheduler:
#     def __init__(self):
#         self.tasks = deque()

#     def add_task(self,value,priority):
#         task = (value,priority)
#         self.tasks.append(task)

#     def next_task(self):
#         sorted_tasks = deque(sorted(self.tasks, key=lambda x: x[1]))
#         self.tasks = sorted_tasks
#         task = self.tasks.popleft()
#         print(f"You have to : {task}")
    
#     def show_tasks(self):
#         for task,p in self.tasks:
#             print(f"Task: {task} Priority: {p}")
    
# new_scheduler = Scheduler()
# new_scheduler.add_task("Do HomeWork",2)
# new_scheduler.add_task("Study for exams", 1)
# new_scheduler.add_task("Go for a run", 3)
# new_scheduler.add_task("Read a book", 5)
# new_scheduler.show_tasks()
# new_scheduler.next_task()
# new_scheduler.next_task()
# new_scheduler.show_tasks()

# Exercise 2

# def check_palindrome(str):
#     str = str.lower()
#     str = str.replace(" ","")
#     str_queue = deque(str)
#     length = len(str)
#     if not length % 2 == 0:
#         length -= 1
#     for i in range(int(length/2)):
#         char_one = str_queue.pop()
#         char_two = str_queue.popleft()
#         if not char_one == char_two:
#             return False
#     return True

# print(check_palindrome("ababa"))

# Exercise 3

class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            curr_node = self.head
            while curr_node.next is not None:
                curr_node = curr_node.next
            curr_node.next = new_node

#This part was made with chatGPT, then i went through it to understand each step.
def merge_sorted_linked_lists(list1, list2):
    dummy = Node(None)
    current = dummy

    pointer1, pointer2 = list1.head, list2.head

    while pointer1 is not None and pointer2 is not None:
        if pointer1.value <= pointer2.value:
            current.next_node = Node(pointer1.value)
            pointer1 = pointer1.next_node
        else:
            current.next_node = Node(pointer2.value)
            pointer2 = pointer2.next_node
        current = current.next_node

    if pointer1 is not None:
        current.next_node = pointer1
    elif pointer2 is not None:
        current.next_node = pointer2


