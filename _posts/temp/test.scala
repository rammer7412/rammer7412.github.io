val list: List[Int] = 3 :: 1 :: 2 :: 4 :: Nil
def getSecond(list: List[Int]): Int = list match {
  case _ :: x :: _ => x
  case _ => 0
}

getSecond(list) // list의 앞에서부터 2번 째 원소를 꺼내는 함수
