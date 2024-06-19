# It works by finding the minimum value in the list and moving it to the sorted list
# It does comparison on each element in the list when moving the minimum value to the sorted list
# so it has O(n^2) time complexity all the time

def selection_sort(values_list):
    sorted_list = []
    # print("%-25s %-25s" % (values_list, sorted_list))

    for i in range(0, len(values_list)):
        min_index = get_min_index(values_list)
        sorted_list.append(values_list.pop(min_index))
        # print("%-25s %-25s" % (values_list, sorted_list))

    return sorted_list

def get_min_index(values_list):
    current_minimum_index = 0
    for i in range(1, len(values_list)):
        if(values_list[i] < values_list[current_minimum_index]):
            current_minimum_index = i
    return current_minimum_index

my_array = [5,2,1,8,5,9,7,6]

print(selection_sort(my_array))