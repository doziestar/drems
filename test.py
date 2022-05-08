"""
Fasten Your Python classes with slot
The special attribute __slots__ allows you to explicitly state which instance attributes you expect your object instances to have, with the expected results:
faster attribute access.
space savings in memory.

The space savings is from
Storing value references in slots instead of __dict__.
Denying __dict__ and __weakref__ creation if parent classes deny them and you declare __slots__.

When we create an object from a class, the attributes of the object will be stored in a dictionary called __dict__. We use this dictionary to get and set attributes. It allows us to dynamically create new attributes after the creation of the object.
Let's create a simple class Person that initially has 2 attributes first_name and last_name. If we print out __dict__ of the object, we will get the key and value of each attribute. Meanwhile, we also print __dict__ of the class which will be needed later. After that, a new attribute reviewer is added to the object, and we can see it in the updated __dict__.
class Person:
     def __init__(self, first_name: str, last_name: str):
         self.first_name = first_name
         self.last_name = last_name
if __name__ == "__main__":
     person = Person("Chidozie", "Okafor")
     print(person.__dict__)
  {'first_name': 'Chidozie', 'last_name': 'Okafor'}
    print(Person.__dict__)
{'__module__': '__main__', '__doc__': None, '__init__': <function __init__ at 0x10e9cd140>}
The issues with dictionary is memory consumption and also access dictionary involves hashing, Dictionary is in fact a hash map. The worst case of the time complexity of get/set in a hash map is O(n).

slots provide a special mechanism to reduce the size of objects.It is a concept of memory optimisation on objects.
As every object in Python contains a dynamic dictionary that allows adding attributes. For every instance object, we will have an instance of a dictionary that consumes more space and wastes a lot of RAM. In Python, there is no default functionality to allocate a static amount of memory while creating the object to store all its attributes.
Usage of __slots__ reduce the wastage of space and speed up the program by allocating space for a fixed amount of attribute
To create a slot, all we need to do is to add __slots__ field or slots=True if we are using dataclass.
class PersonSlot:
     __slots__ = ["first_name", "last_name"]
     def __init__(self, first_name: str, last_name: str):
         self.first_name = first_name
         self.last_name = last_name
if __name__ == "__main__":
     person = Person("Chidozie", "Okafor")
     print(person.__dict__)
  {'first_name': 'Chidozie', 'last_name': 'Okafor'}
    print(Person.__dict__)
{'__module__': '__main__', '__slots__': ['first_name', 'last_name'], '__init__': <function __init__ at 0x10432b140>, '__doc__': None}

To avoid repetition of variable names, we can use dataclasses to create a class that will automatically create slots for us.

from dataclasses import dataclass

@dataclass(slots=True)
class PersonSlot:
    first_name: str
    last_name: str

if __name__ == "__main__":
    person = PersonSlot("Chidozie", "Okafor")
    print(person.__dict__)
    print(PersonSlot.__dict__)

Advantages of using slots:
1. Slots are faster than __dict__.
2. Slots are more memory efficient.
3. Slots are more secure.
4. Slots are more convenient.
5. Slots are more readable.
6. Slots are more efficient.

Disadvantages of using slots:
1. Slots are not compatible with Multiple inheritance.
2. Slots are not compatible with metaclasses.
3. Slots are not compatible with ABCs.
4. Slots are not compatible with pickling.
5. Slots are not compatible with copy.
6. Slots are not compatible with deepcopy.


compare with __dict__:

from dataclasses import dataclass
from functool import partial


@dataclass(slots=False)
class Person:
    first_name : str
    last_name: str


@dataclass(slots=True)
class PersonSlot:
    first_name : str
    last_name : str


def get_percentage_of_performance():
    person = Person("Chidozie", "Okafor")
    person_slot = PersonSlot("Chidozie", "Okafor")

    # timeit and repeat the process for number of time and return the average time
    n = 100
    timeit_func = partial(timeit.timeit, number=n, globals=globals())
    timeit_func("person.first_name", number=n)
    timeit_func("person_slot.first_name", number=n)
    timeit_func("person.last_name", number=n)
    timeit_func("person_slot.last_name", number=n)


"""

import timeit
from dataclasses import dataclass
from functools import partial


@dataclass(slots=False)
class Person:
    first_name : str
    last_name: str


@dataclass(slots=True)
class PersonSlot:
    first_name : str
    last_name : str


def get_set_delete(person: Person | PersonSlot):
      person.first_name = "Raphael"
      _ = person.first_name
      del person.first_name

def get_percentage_of_performance():
    person = Person("Chidozie", "Okafor")
    person_slot = PersonSlot("Chidozie", "Okafor")

    # timeit and repeat the process for number of time and return the average time
    no_slots = min(timeit.repeat(partial(get_set_delete, person), number=100, repeat=3))
    slots = min(timeit.repeat(partial(get_set_delete, person_slot), number=100, repeat=3))
    print(f"No Slots: {no_slots}")
    print(f"Slots: {slots}")
    print(f"Percentage of performance: {(slots / no_slots) * 100}")


if __name__ == "__main__":
    get_percentage_of_performance()
