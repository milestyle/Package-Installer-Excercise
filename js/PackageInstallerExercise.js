function getInstallOrder(){
	var str = document.getElementById("packagesInput").value;
	console.log(str);
	document.getElementById("result").innerHTML = getPackageOrder(JSON.parse(str));
}

function getPackageOrder(packageList){
	try{
		var sortedPackages = insertionSort(packageList);
		if (checkForLoop(sortedPackages))
			return "Error: Input must not contain a cycle";
		var resultString = "";
		for (var i = 0; i < sortedPackages.length; i++){
			resultString += getPackageName(sortedPackages[i]);
			if (i < sortedPackages.length - 1) resultString += ", ";
		}
		console.log(resultString);
		return resultString;
	}
	catch(error){
		console.log(error)
		return error.message;
	}
}

function insertionSort(items) {
    var len     = items.length,value,i,j;
    for (i=0; i < len; i++) {
        value = items[i];
        for (j=i-1; j > -1 && !isDependent(items[j], value); j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;
    }
    return items;
}

function isDependent(item1, item2){
	return (item1.split(": ")[0] == item2.split(": ")[1]);
}

function getPackageName(item){
	return item.split(": ")[0];
}

function checkForLoop(sortedPackages){
	for (var i = 0; i < sortedPackages.length; i++){
		for (var j = 0; j < i; j++){
			if (isDependent(sortedPackages[i], sortedPackages[j]))
				return true;
		}
	}
	return false;
}