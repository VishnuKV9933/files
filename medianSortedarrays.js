var findMedianSortedArrays = function(nums1, nums2) {
    function mergeSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  return merged;
}
    const mergedArray = mergeSortedArrays(nums1, nums2);
  const n = mergedArray.length;
  const midIndex = Math.floor(n / 2);

  if (n % 2 === 0) {
    // Even number of elements, take the average of the two middle elements
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    // Odd number of elements, return the middle element
    return mergedArray[midIndex];
  }
};


console.log(findMedianSortedArrays([1,2,4,6],[3,5,7]));

function containerWaterHeight(heightArray){

let j=0
let right
let left = heightArray[0]

for(let i =1;i<heightArray.length;i++)
{
    if(heightArray[i]>right){

    }
    let width =i-j;
    let height =Math.min(heightArray[j],heightArray[i])
    let area=width*heightArray;


}
}