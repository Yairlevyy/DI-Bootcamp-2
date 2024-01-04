def check_par(str):
    opening = ['(','{','[']
    closing = [')','}',']']
    actual_opening = []
    for char in str:
        if char in opening:
            actual_opening.append(char)
        elif char in closing:
            last_opening = actual_opening[-1]
            idx_one = opening.index(last_opening)
            idx_two = closing.index(char)
            if idx_one == idx_two:
                continue
            else:
                return False
    return True

print(check_par("(1 + 2) [hello)"))