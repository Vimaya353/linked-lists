import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// A few extra checks
list.prepend("fish");
console.log(list.size());          // 7
console.log(list.head());          // fish
console.log(list.tail());          // turtle
console.log(list.at(2));           // cat
console.log(list.at(99));          // undefined
console.log(list.contains("cat")); // true
console.log(list.findIndex("snake")); // 5
console.log(list.pop());           // fish

list.insertAt(1, "ant", "bee");
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());