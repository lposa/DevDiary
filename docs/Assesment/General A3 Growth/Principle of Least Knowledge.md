# Principle of The Least Knowledge

The Principle of Least Knowledge, also known as Law of Demeter, proposes that an object should only communicate with its immediate neighbors and should have limited knowledge about complex structures behind those neighbors.

It discourages creating systems where a component directly references or communicates with multiple other components, leading to high coupling. Instead, each component should only need to know about the components that it directly interacts with.

For example, if you have a User object that carries a Profile object. And this Profile object carries an Address object. If you want to get the user's city, instead of doing user.profile.address.city, you should provide a method in User class like getUserCity() that calls appropriate methods in Profile and Address. This reduces coupling of User class with the Address class.
