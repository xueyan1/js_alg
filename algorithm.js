/**
 * 算法集合
 */


// 选择排序 不稳
function selection () {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32, 13, 34, 231, 43, 1000]         // 不计入算法时间
  //       n           n-1            n
  for (let i = 0; i < list.length - 1; i++) {
    let minPos = i  // n
    //          n           n*n         n*n
    for (let j = i + 1; j < list.length; j++) { // 最消耗时间
      //  (n-1)+(n-2)+....+ 1
      minPos = list[j] < list[minPos] ? j : minPos
    }
    swap(list, i, minPos) // n
  }
  // 总的时间复杂度 O(n²) // 空间复杂度：O(1)
  console.log('结果===>', list)
}
// 查找最大值
function findMaxInList (list, n) {
  for (let j = 0; j < n; j++) {
    if (list[j] > list[j + 1]) {
      swap(list, j, j + 1)
    }
  }
}
// 转换
function swap (list, i, j) {
  let temp = list[i]
  list[i] = list[j]
  list[j] = temp
}
// 执行
// selection()

// 冒泡
function bubble () {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32]
  for (let i = list.length - 1; i > 0; i--) {
    findMaxInList(list, i)
  }
  // 总的时间复杂度 O(n²) // 空间复杂度：O(1)
  console.log('结果===>', list)
}

// bubble()

// 插入排序
function insertion () {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32]
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        swap(list, j, j - 1)
      }
    }
  }
  // 总的时间复杂度 O(n²) // 空间复杂度：O(1)
  console.log('结果===>', list)
}
// insertion()

//希尔排序
function shell (params) {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32]
  let h = 1
  while (h <= list.length) { //使用的是knuth序列
    h = h * 3 + 1
  }
  for (let gap = h; gap > 0; gap = (gap - 1) / 3) {
    for (let i = gap; i < list.length; i++) {
      for (let j = i; j > gap - 1; j -= gap) {
        if (list[j] < list[j - gap]) {
          swap(list, j, j - gap)
        }
      }
    }
  }
  // 总的时间复杂度 O(n^1.3) // 空间复杂度：O(1)
  console.log('结果===>', list)
}
// shell()

// 归并排序
function merge (params) {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32]
  list = [...mergeSort(list, 0, list.length - 1)]
  console.log('结果===>', list)
}
function mergeSort (list, first, last) {
  let temp = []
  if (first < last) {
    let mid = Math.floor((first + last) / 2);
    mergeSort(list, first, mid, temp);    //调用自身处理左边
    mergeSort(list, mid + 1, last, temp);  //调用自身处理右边
    list = tempMerge(list, first, mid, last, temp);
  }
  return list;
}
function tempMerge (list, first, mid, last, temp) {
  let i = first
  let m = mid;
  let j = mid + 1;
  let n = last;
  let k = 0;
  while (i <= m && j <= n) {
    if (list[i] < list[j]) {
      temp[k++] = list[i++];
    } else {
      temp[k++] = list[j++];
    }
  }
  while (i <= m) {
    temp[k++] = list[i++];
  }
  while (j <= n) {
    temp[k++] = list[j++];
  }
  for (let l = 0; l < k; l++) {
    list[first + l] = temp[l];
  }
  return list;
}
// merge()

// 快速排序
function quick () {
  let list = [5, 4, 7, 2, 1, 3, 6, 8, 9, 0, 12, 32]
  let res = quickSort(list, 0, list.length - 1)
  console.log('结果===>', res)
}
function quickSort (list, left, right) {
  let partitionIndex
  if (left < right) {
    partitionIndex = partition(list, left, right)
    quickSort(list, left, partitionIndex - 1)
    quickSort(list, partitionIndex + 1, right)
  }
  return list
}

function partition (list, left, right) {
  let pivot = left,
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (list[i] < list[pivot]) {
      swap(list, i, index);
      index++;
    }
  }
  swap(list, pivot, index - 1);
  return index - 1;
}
// quick()

// 计数排序
function counting (params) {
  let list = [7, 6, 8, 3, 4, 2, 1, 2, 6, 9, 5, 4, 6, 5, 2, 8, 7, 5]
  let res = countingSort(list, 10) // 固定传入一个最大数
  console.log('结果===>', res)
}
function countingSort (list, max) {
  let result = []
  let count = []
  for (let i = 0; i <= max; i++) {
    count[i] = 0
  }
  for (let j = 0; j < list.length; j++) {
    count[list[j]]++
  }
  console.log(count);
  for (let k = 0; k <= max; k++) {
    while (count[k]-- > 0) {
      result.push(k)
    }
  }
  return result
}
// counting()

//基数排序 多关键字排序
function radix () {
  let list = [23, 45, 63, 53, 524, 786, 2, 543, 56, 87, 98, 67, 5, 6, 8]
  let max = 0
  for (let i = 0; i < list.length; i++) {
    max = (list[i] + '').length > max ? (list[i] + '').length : max;
  }
  let res = radixSort(list, max)
  console.log('结果===>', res)
}

function radixSort (list, maxLength) {
  let mod = 10; // 10精制
  let dev = 1; // 位数
  let counter = [];
  for (let i = 0; i < maxLength; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < list.length; j++) {
      let bucket = parseInt((list[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(list[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          list[pos++] = value;
        }
      }
    }
  }
  return list
}
// radix()

// 堆排序

function heap (params) {
  let list = [21, 23, 5, 2, 1, 5, 7, 8, 5, 45, 34, 23, 65, 878];
  heapSort(list)
  console.log('结果===>', list)
}
function heapSort (list) {
  let iParent = Math.floor(list.length / 2) - 1
  for (let i = iParent; i >= 0; i--) {
    maxHeapify(list, i, list.length)
  }
  for (let i = list.length - 1; i >= 0; i--) {
    swap(list, 0, i)
    maxHeapify(list, 0, i)
  }
  return list
}
function maxHeapify (list, index, heapSize) {
  while (true) {
    let iMax = index
    let iLeft = 2 * index + 1
    let iRight = 2 * (index + 1)
    if (iLeft < heapSize && list[iLeft] > list[iMax]) {
      iMax = iLeft
    }
    if (iRight < heapSize && list[iRight] > list[iMax]) {
      iMax = iRight
    }
    if (iMax != index) {
      swap(list, iMax, index)
      index = iMax
    } else {
      break;
    }
  }
}
// heap()

// 桶排序
function bucket () {
  let list = [2,1, 3, 4, 63, 4, 21, 54, 65, 75, 86, 97]
  let len = list.length
  if (len < 2) {
    return
  }
  // 声明一个空桶, 将数据压入桶中
  const bucket = []
  list.forEach((one) => {
    if (bucket[one] !== undefined) {
      bucket[one]++
    } else {
      bucket[one] = 1
    }
  });
  // 声明一个新数组, 当做排序后的数组
  const newArr = []
  bucket.forEach((one, index) => {
    if (one !== undefined) {
      for (let i = 0; i < one; i++) {
        newArr.push(index)
      }
    }
  })
  list  = [...newArr]
  console.log('结果===>', list)
}
bucket()
