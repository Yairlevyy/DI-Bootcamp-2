import math

class Pagination:
    def __init__(self,items=[],pageSize=10):
        self.content = items
        self.pageSize = pageSize
        self.actualPage = 0

    def getVisibleItems(self):
        startIndex = 0 + self.pageSize * self.actualPage
        if not self.actualPage == 0:
            endIndex = 0 + self.pageSize * (self.actualPage + 1)
        else:
            endIndex = self.pageSize
        print(self.content[startIndex:endIndex])

    def prevPage(self):
        self.actualPage -= 1

    def nextPage(self):
        self.actualPage += 1

    def firstPage(self):
        self.actualPage = 0

    def lastPage(self):
        last_page = math.ceil(len(self.content) / self.pageSize)
        self.actualPage = last_page - 1

    def goToPage(self,page_num):
        self.actualPage = page_num - 1

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems()

p.nextPage()

p.getVisibleItems()

p.lastPage()

p.getVisibleItems()

