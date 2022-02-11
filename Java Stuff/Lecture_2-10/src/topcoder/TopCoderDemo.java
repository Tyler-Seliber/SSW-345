package topcoder;


//STEP 1. Import required packages
import java.sql.*;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;



public class TopCoderDemo {
	
	
	// JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
	static final String DB_URL = "jdbc:mysql://162.243.235.211/db345";

	//  Database credentials
	// Read only account/password
	static final String USER = "user345";
	static final String PASS = "Password1@";  

  public static void main(String[] args) {
	   Connection conn = null;
	   Statement stmt = null;
	   long startTime = System.currentTimeMillis();
	   SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
	   Scanner myObj = new Scanner(System.in);  // Create a Scanner object
	   ArrayList<Challenge> activeTasks = new ArrayList<Challenge>();
	   
	   try{
	      //STEP 2: Register JDBC driver
	      Class.forName(JDBC_DRIVER);

	      //STEP 3: Open a connection
	      System.out.println("Connecting to database...");
	      conn = DriverManager.getConnection(DB_URL,USER,PASS);

	      //STEP 4: Execute a query
	      System.out.println("Creating statement...");
	      stmt = conn.createStatement();
	      String sql;
	      //sql = "SELECT handle, country, memberSince, reliability_rating FROM Handle";
	      //Select active tasks in the month of April 2014
	      
	      sql = "SELECT * FROM challenge";
	      //sql = "SELECT * FROM relation_c_r";
	      ResultSet rs = stmt.executeQuery(sql);

	      //STEP 5: Extract data from result set
	      while(rs.next()){
	         //Retrieve by column name
	         //String id  = rs.getString("handle");
	         //String country = rs.getString("country");
	         //Date memberSince = rs.getDate("memberSince");
	         //float rely = rs.getFloat("reliability_rating");

	    	 int id = rs.getInt("challengeId"); 
	    	 String name = rs.getString("challengeName");
	    	 Date regStart = rs.getDate("registrationStartDate");
	    	 Date d1 = sdformat.parse("2015-04-01");
	    	 Date d2 = sdformat.parse("2015-05-01");
	    	 
	    	 //Get and list all active task in April 2015
	    	 //if ((regStart.compareTo(d1)<0) && (regStart.compareTo(d2)>0)) {
	    		//Display values
		         System.out.print("Task ID: " + id);
		         System.out.print(", name: " + name);
		         System.out.println(", start date: " + regStart);
		         Challenge task = new Challenge(id);
	    		 activeTasks.add(task);
	    	 //} 
	      } 
	    
	      rs.close();
	      
	      long endTime = System.currentTimeMillis();
		  System.out.println("That took " + (endTime - startTime) + " milliseconds");
	    	 
		  
		  //for (Challenge t: activeTasks) {
			// 
			  //sql = "SELECT * FROM relation_c_r";
		    
		    System.out.println("Enter challengeId: ");

		    String taskId = myObj.nextLine();  // Read user input
		    System.out.println("Challenge id is: " + taskId);  // Output user input	  
		  
		    sql = "SELECT * FROM relation_c_r WHERE challengeId = " + taskId;
		  ResultSet rs1 = stmt.executeQuery(sql);
			  
			  int countWorker = 0; 
			  while(rs1.next()){
			  String handle = rs1.getString("handle");
			  //Date regD = rs1.getDate("registrationDate");
			  //Date subD = rs1.getDate("submissionDate");
	    		//Display values
		         
			  System.out.println("; Worker ID: " + handle);
			  countWorker ++; 
		        // System.out.print(", registration date: " + regD);
		        // System.out.println(", submission date: " + subD);
		         // task = new Challenge(id);
	    		 //activeTasks.add(task);
			  }
			  System.out.println("; total Workers: " + countWorker);
		        
		  
		  
	      //STEP 6: Clean-up environment
	      
	      
	      
	      stmt.close();
	      conn.close();
	   }catch(SQLException se){
	      //Handle errors for JDBC
	      se.printStackTrace();
	   }catch(Exception e){
	      //Handle errors for Class.forName
	      e.printStackTrace();
	   }finally{
	      //finally block used to close resources
	      try{
	         if(stmt!=null)
	            stmt.close();
	      }catch(SQLException se2){
	      }// nothing we can do
	      try{
	         if(conn!=null)
	            conn.close();
	      }catch(SQLException se){
	         se.printStackTrace();
	      }//end finally try
	   }//end try
	   System.out.println("Goodbye!");
	   
	  

	   long endTime = System.currentTimeMillis();

	   System.out.println("That took " + (endTime - startTime) + " milliseconds");
	}//end main

}
