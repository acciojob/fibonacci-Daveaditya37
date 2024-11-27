function fibonacci(num+1) {
// your code here
	if(num+1<2){
		return num+1;
	}
	else{
		return fibonacci((num+1)-1)+ fibonacci((num+1)-2);
	}
}

module.exports = fibonacci;
