# It uses divide & conquer principle just like mergeSort algorithm
# It just simply takes the first element of the list as a pivot value and 
# breaks elements into two lists: less_than_pivot and greater_than_pivot
# and then it breaks less_than_pivot and greater_than_pivot tables again and again until it has only one element left
# and then it merges them together like: quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)
# It's time complexity in the best case is O(n log n) and in the worst case is O(n^2)
# Achieving the best case depends on picking the right pivot. In this case we just pick the first value (usually pivot is picked randomly)
# Taking into account our function below, if we passed a list of reversely ordered list, it would be the worst case for our algorithm
# because with every iteration we wouldn't be able to split the list in half (would decrease its length only by one)
# so picking pivot value randomly would help our function some way

def quicksort(values_list):
    if len(values_list) <= 1:
        return values_list

    greater_than_pivot = []
    less_than_pivot = []
    pivot = values_list[0]
    
    for value in values_list[1:]:
        if value <= pivot:
            less_than_pivot.append(value)
        else:
            greater_than_pivot.append(value)

    return quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)

print(quicksort([83,6,3,2,853,24,53,11]))
