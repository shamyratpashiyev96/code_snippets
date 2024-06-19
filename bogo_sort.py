import random

# It keeps randomly reorganizing a list until it is sorted. 
# It is impossible to identify its time complexity exactly but 
# in best case it is O(n), in average case it is O(n!) and in worst case it is O(infinity sign)
    
def bogo_sort(values_list):
    attempts = 0
    while not is_sorted(values_list):
        print(attempts)
        random.shuffle(values_list)
        attempts += 1

    return values_list


def is_sorted(values_list):
    for i in range(len(values_list) - 1 ):
        if(values_list[i] > values_list[i + 1]):
            return False
    return True

my_arr = [7,2,65,12,63,2]

print(bogo_sort(my_arr))