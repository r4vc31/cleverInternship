'''
    1. Suma de digitos
'''
def digitsSum(inputInt):
    return sum([int(digit) for digit in str(inputInt)])
# Casos de ejemplo
print(digitsSum("999"))
print(digitsSum("9184501"))
print(digitsSum("12345"))

'''
    2. Palíndromos
'''
def isPalindrome(inputStr):
    return inputStr == inputStr[::-1]
# Casos de ejemplo
print(isPalindrome("aabaa"))
print(isPalindrome("abac"))
print(isPalindrome("salas"))

'''
    3. Producto de elementos adyacentes
'''
def maxAdjacentProd(inputArray):
    max = float('-inf')
    for index in range(len(inputArray)-1):
        adjacentProd = inputArray[index]*inputArray[index+1]
        if adjacentProd > max:
            max = adjacentProd
    return max
# Casos de ejemplo
print(maxAdjacentProd([3, 6, -2, -5, 7, 3]))
print(maxAdjacentProd([5, 1, 2, 3, 1, 4]))
print(maxAdjacentProd([-23, 4, -3, 8, -12]))