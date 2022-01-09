def find_index(arr, n, k):
    start = 0
    end = n-1
    while start<= end:
 
        mid =(start + end)//2
 
        if arr[mid] == K:
            return mid
 
        elif arr[mid] < K:
            start = mid + 1
        else:
            end = mid-1
    return "This is not present in array."
arr = [1,3,5,6,10,12,13,14,18,20,34,40]
n = len(arr)
K = int(input("enter the number "))
print(find_index(arr, n, K))
    

