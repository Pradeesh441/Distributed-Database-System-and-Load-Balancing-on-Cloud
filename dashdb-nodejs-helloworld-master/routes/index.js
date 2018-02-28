exports.tourism1 = function(ibmdb,connString) {
    return function(req, res) {

	   	   
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("SELECT * from tourism FETCH FIRST 10 ROWS ONLY", function(err, tables, moreResultSets) {
							
							
				if ( !err ) { 
					res.render('tablelist', {
						"tablelist" : tables,
						"tableName" : "10 rows from the tourism table",
						"message": "Congratulations. Question-1."
						
					 });

					
				} else {
				   res.send("error occurred " + err.message);
				}

				/*
					Close the connection to the database
					param 1: The callback function to execute on completion of close function.
				*/
				conn.close(function(){
					console.log("Connection Closed");
					});
				});
			}
		} );
	   
	}
	}
	
	
	
	exports.tourism2 = function(ibmdb,connString) {
    return function(req, res) {

	   	   
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("SELECT sum(NUMBER_OF_VISITORS) as total_visitors, YEAR(month_year) as year, country FROM TOURISM GROUP BY COUNTRY, YEAR(MONTH_YEAR)", function(err, tables, moreResultSets)

				{
							
							
				if ( !err ) { 
					res.render('tablelist', {
						"tablelist" : tables,
						"tableName" : "Visitorsbycountry",
						"message": "Congratulations. Question-2."
						
					 });

					
				} else {
				   res.send("error occurred " + err.message);
				}

				/*
					Close the connection to the database
					param 1: The callback function to execute on completion of close function.
				*/
				conn.close(function(){
					console.log("Connection Closed");
					});
				});
			}
		} );
	   
	}
	}
	
	exports.tourism3 = function(ibmdb,connString) {
    return function(req, res) {

	   	   
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("SELECT sum(NUMBER_OF_VISITORS) as total_visitors, YEAR(month_year) as year , MODE_OF_ENTRY FROM TOURISM GROUP BY MODE_OF_ENTRY, YEAR(MONTH_YEAR)", function(err, tables, moreResultSets)

				{
							
							
				if ( !err ) { 
					res.render('tablelist', {
						"tablelist" : tables,
						"tableName" : "Visitorsbymode",
						"message": "Congratulations. Question-3."
						
					 });

					
				} else {
				   res.send("error occurred " + err.message);
				}

				/*
					Close the connection to the database
					param 1: The callback function to execute on completion of close function.
				*/
				conn.close(function(){
					console.log("Connection Closed");
					});
				});
			}
		} );
	   
	}
	}
	

	

   