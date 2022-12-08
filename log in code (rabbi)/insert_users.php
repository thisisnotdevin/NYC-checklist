<?php



$servername = "localhost";
$database = "signup_page";
$Username = "FazleRabbi";
$Password = "Rabbi1994";







// Create connection

$conn = mysqli_connect($servername, $Username, $Password, $database);

// Check connection

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

	$conn=mysqli_connect($servername,$Username,$Password,$database);
	  if(!$conn){
		  die('Could not Connect MySql Server:' .mysql_error());
		}







?>



<?php

session_start();  


if(isset($_POST['form__button']))
{   


$Confirm=$_POST['Confirm_password'];
 $username=$_POST['Username'];
 $email=$_POST['Email_Address'];
 $pass= $_POST['Password'];



if($Confirm != $pass){
	
	 $_SESSION['success_message'] = "Confirm your password again";
		
		 header("Location: ../sign_up.html");
}else{
	
	
	
	
	

	 $username = mysqli_real_escape_string($conn, $username);  

    

        $sql = "select * from user where email = '$email'";  
    


$result = mysqli_query($conn, $sql) or die( mysqli_error($conn));
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC); 

		

        $count = mysqli_num_rows($result);  

         

        if($count != 0){ 
		 $_SESSION['success_message'] = "This email address is already being used.";
		
	 header("Location: ../index.html");
		 
		}else if($count == 0){
			
			
			
     $sql = "INSERT INTO user ( 
	 `user_name`,
	 `password`,
	 `email`
	 

	 
	 )
     VALUES ('$username','$pass','$email')";
    
	
	
     if (mysqli_query($conn, $sql)) {
 header("Location: ../index.html");
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
			
	
	
}
 
   
}

		
		
		
	
		
 
 ?>