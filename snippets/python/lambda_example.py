def create_multiplier(n):
  return lambda a : a * n

my_doubler = create_multiplier(2)
my_tripler = create_multiplier(3)

print(my_doubler(11))
print(my_tripler(11))