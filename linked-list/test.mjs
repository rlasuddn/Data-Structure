import { Node, LinkedList } from './linked-list-prac.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();
<<<<<<< Updated upstream
console.log('inserAt() 호출');

console.log('=========================1=========================');
list.insertAt(0, 0);
console.log('=========================2=========================');
list.insertAt(1, 1);
console.log('=========================3=========================');
list.insertAt(2, 2);
console.log('=========================4=========================');
list.insertAt(3, 3);
console.log('=========================5=========================');
list.insertAt(4, 4);
console.log('=========================6=========================');
list.insertAt(4, 5);
=======
console.log('==== inserAt() 호출 ====');
list.insertAt(0, 'a');
list.insertAt(1, 'b');
list.insertAt(2, 'c');
list.insertAt(3, 'd');
list.insertAt(4, 'e');
>>>>>>> Stashed changes
list.printAll();

console.log('==== clear() 호출 ====');
list.clear();
list.printAll();

console.log('==== insertLast() 호출 ====');
list.insertLast(3);
list.insertLast(2);
list.insertLast(1);
list.insertLast(4);
list.printAll();

console.log('==== deleteAt() 호출 ====');
list.deleteAt(0);
list.printAll();

console.log('==== deleteLast() 호출 ====');
list.deleteLast();
list.printAll();

console.log('==== getNodeAt() 호출 ====');
const targetNode = list.getNodeAt(1);
console.log(targetNode);
