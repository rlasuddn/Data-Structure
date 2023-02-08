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
    //연결리스트의 크기를 벗어나거나, 음수위치에 삽입 예외처리
    if (index > this.count || index < 0) {
      throw new Error('범위를 넘어갔습니다.');
    }
    //새로운 node 생성
    let newNode = new Node(data);

    //가장 앞부분에 생성할 경우와 그밖에 인덱스에서 생성할 경우를 분리
    if (index === 0) {
      //새로 생성한 노드의 next가 head를 가리키게 하고
      newNode.next = this.head;
      //새로 생성한 노드를 head로 변경
      this.head = newNode;
    } else {
      let currentNode = this.head;
      //목표 인덱스 바로 전까지 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }
}

export { Node, LinkedList };
