/* Core Types */
/*
1. number -> 1, 5.3, -10 -> All numbers, no differentiation between integers or floats
2. string -> 'Hi'. "Hi", `Hi` -> All text values 
3. boolean -> true, false -> Just these two, no "truthy" or "falsy" values
4. object -> {age: 30} -> Any Javascript object, more specific types (type of object) are possible.
5. array -> [1, 2, 3] -> Any Javascript array, type can be flexible or strict (regarding the element types).
6. tuple -> [1, 2] -> Added by Typescript: Fixed-length array.
7. enum -> enum {NEW, OLD} -> Added by TypeScript: Automatically enumerated global constant identifiers.
8. any -> * -> Any kind of value, no specific type assignment

* The key difference is: Javascript uses "dynamic types" (resolved at runtime),
  TypeScript uses "static types" (set during development)
*/
