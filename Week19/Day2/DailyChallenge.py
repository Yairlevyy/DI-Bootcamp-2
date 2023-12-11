matrix = [
    ["7","i","i"],
    ["T","s","x"],
    ["h","%","?"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]

secret_msg = ""
was_a_symbol = False

for i in range(0,3):
    for item in matrix:
        if item[i].isalpha():
            secret_msg += item[i]
            was_a_symbol = False
        else:
            if not was_a_symbol:
                secret_msg += " "
                was_a_symbol = True

print(secret_msg)
