module.exports = function longestConsecutiveLength(array) {
  let longest=0;
  const arr=new Set(array);
  for (let num of arr) {
		if (arr.has(num)) {
			let currentNum=num;
			let currentSteak=1;
				while (arr.has(currentNum+1)){
					currentNum++;
					currentSteak++;}
		longest=Math.max(longest,currentSteak);
		}
  }
  return longest;			
}
