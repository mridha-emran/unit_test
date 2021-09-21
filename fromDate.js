const formatDate=(dateTest)=> {
    var date_regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if (!(date_regex.test(dateTest))) {
        return null;}

    else{
	let date = new Date(dateTest)
	let year = date.getFullYear()
	let month = date.getMonth()
	let day = date.getDate()
    
    return (day + "/" + (month + 1) + "/" + year)}
}

formatDate("2019-1-02")


module.exports= formatDate
