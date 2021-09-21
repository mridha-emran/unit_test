const formatDate=(dateTest)=> {

	dateTest = new Date(dateTest)
	year = dateTest.getFullYear()
	month = dateTest.getMonth()
	day = dateTest.getDate()
    return (day + "/" + (month + 1) + "/" + year)
    

}

// console.log(formatDate("2019-1-02"))


module.exports= formatDate
