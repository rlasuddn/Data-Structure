/**
 * 연결리스트의 추상자료형
 * 모든 데이터 출력     printAll()
 * 모든 데이터 제거     clear()
 * 인덱스 삽입         inserAt(index,data)
 * 마지막 삽입         insertLast(data)
 * 인덱스 삭제         deleteAt(index)
 * 마지막 데이터 제거   deleteLast()
 * 인덱스 읽기          getNodeAt(index)
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //노드의 시작 부분
    this.head = null;
    this.count = 0;
  }
  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ', ';
      }
    }
    text += ']';
    console.log(text);
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error('범위내로 노드를 생성해주세요');
    }
<<<<<<< Updated upstream
    let newNode = new Node(data);

    if (index === 0) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      //같은 값 참조
      let currentNode = this.head;
=======

    const newNode = new Node(data);

    //index가 0인 경우 해당 노드를 시작 노드로 지정
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    //index가 0 이상인 경우: 현재 head에 새로생성된 0이상의 노드를 다음 노드로 연결
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        //현재 생성된 노드까지 이동
        currentNode = currentNode.next;
      }
      //새로운 노드에 기존 노드에 다음 데이터 할당
      newNode.next = currentNode.next;
      //기존 노드에 다음 데이터에 새로운 노드 할당
      currentNode.next = newNode;
    }

    this.count++;
  }
  clear() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('제거할 수 없습니다.');
    }

    let currentNode = this.head;

    if (index === 0) {
      const deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
>>>>>>> Stashed changes
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      const deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
<<<<<<< Updated upstream

    this.count++;
=======
  }

  deleteLast() {
    this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('범위 밖입니다.');
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
>>>>>>> Stashed changes
  }
}
/**
 * let currentNode = this.head; => currentNode 와 this.head는 같은 노트들 참조 => Node(1,null)
 * currentNode = currentNode.next => currentNode에 currentNode.next값을 참조 => Node(2,null) , currentNode 와 this.head의 참조 값은 변경된다.
 * newNode.next = currentNode.next => 새로운 노드의 다음 연결할 노드를 currentNode의 다음 노드로 참조
 * currentNode.next = newNode; => current.next의 newNode를 연결
 */

export { Node, LinkedList };
