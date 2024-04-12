import { LinkedList } from '../linked-list/linked-list-prac.mjs';

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  //헤드에 삽입
  push(data) {
    this.list.insertAt(0, data);
  }

  //헤드 삭제
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (err) {
      return null;
    }
  }

  //헤드 가져오기
  peek() {
    return this.list.getNodeAt(0);
  }

  //노드 개수가 0인지 확인
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
