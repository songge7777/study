/*
    线性时间的算法
    从一个有序数组中搜索一个值
			function find(arr,value){
				for(let i=0;i<arr.length;i++){
					if(arr[i] === value){
						return value
					}
				}
				return null
			}
		在最坏的情况下,没有找到值
		第2行:i=0 执行1次;i<arr.length;执行了n+1;i++执行了N次
					所以总共执行了2N+2次
		第3行:比较操作执行l了N次
		第4行:执行了0次
		第7行:执行了1次
		所有算法最坏的情况下,用时:T = 2N+2+N+1 = 3N

		这种最坏的情况下,复杂度和数据规模N相关的算法很常见,我们成为线性时间复杂度
*/