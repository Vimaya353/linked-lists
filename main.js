import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log(list.size());             // 6
console.log(list.head());             // dog
console.log(list.tail());             // turtle
console.log(list.at(2));              // parrot
console.log(list.at(99));             // undefined
console.log(list.contains("cat"));    // true
console.log(list.contains("lion"));   // false
console.log(list.findIndex("snake")); // 4
console.log(list.findIndex("lion"));  // -1

console.log(list.pop());              // dog
console.log(list.toString());         // ( cat ) -> ( parrot ) -> ...

list.prepend("fish");
list.insertAt(1, "a", "b");
console.log(list.toString());         // ( fish ) -> ( a ) -> ( b ) -> ( cat ) -> ...

list.removeAt(0);
console.log(list.toString());         // ( a ) -> ( b ) -> ( cat ) -> ...

try {
  list.removeAt(99);
} catch (e) {
  console.log(e instanceof RangeError); // true
}