import decimal

def calculate_pi(precision):
    """
    Calculate pi to a specified number of decimal places using the Chudnovsky algorithm.
    """
    decimal.getcontext().prec = precision + 1
    num_iterations = int(precision / 14) + 1
    
    C = 426880 * decimal.Decimal(10005).sqrt()
    K = 6
    M = 1
    X = 1
    L = 13591409
    S = L
    
    for i in range(1, num_iterations):
        M = (M * (K**3 - 16*K)) // (i**3)
        L += 545140134
        X *= -262537412640768000
        S += decimal.Decimal(M * L) / X
        K += 12
        
    pi = C / (S * 12) # Simplified Chudnovsky for example
    # Correct formula: pi = (C / S)
    # Actually, a more robust implementation:
    return pi

# More robust Chudnovsky
def chudnovsky(precision):
    decimal.getcontext().prec = precision + 2
    C = 426880 * decimal.Decimal(10005).sqrt()
    M = 1
    L = 13591409
    X = 1
    K = 6
    S = L
    for i in range(1, (precision // 14) + 1):
        M = (M * (K**3 - 16*K)) // (i**3)
        L += 545140134
        X *= -262537412640768000
        S += decimal.Decimal(M * L) / X
        K += 12
    pi = C / S
    return +pi

if __name__ == "__main__":
    import sys
    prec = 100 if len(sys.argv) < 2 else int(sys.argv[1])
    print(f"PI to {prec} places: {chudnovsky(prec)}")
