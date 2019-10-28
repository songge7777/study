

// 将数组随机打乱 这个比较合适
function fisher_yates_shuffle(arr){
	for(let i=0;i<arr.length -1;i++){
		// 从 [i,arr.length-1] 取索引
		// const j = i + Math.floor(Math.random() * (arr.length - i));
		const j = Math.floor(Math.random() * (arr.length - 2*i)+i);
		
		// 在通过数组位子调换 值
		[ arr[i], arr[j] ] = [ arr[j], arr[i]]
				console.log('j',j,arr[j])
	}
	return arr
}
let rs = shuffle_simple(['1','2','3','4','5'])

console.log('rs',rs)
// console.log(['1','2s','3s','4s','5s'][0])
// 这种简单 但是计算时间长
function shuffle_simple(arr){
	return	arr.sort(()=>Math.random()-.5)
}
// // 随机打乱100W条数据

// ger(100)
// function gen(w){
// 	const arr = []
// 	for(let i=0;i<w*10000;i++){
// 		arr[i] = i+1
// 	}
// }
 