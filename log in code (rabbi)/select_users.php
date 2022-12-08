<?php



$servername = "localhost";
$database = "signup_page";
$Username = "FazleRabbi";
$Password = "Rabbi1994";







// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

	$conn=mysqli_connect($servername,$username,$password,$database);
	  if(!$conn){
		  die('Could not Connect MySql Server:' .mysql_error());
		}





?>


<?php

 session_start();       
  
	
	
	
	
	if(isset($_POST['form__button']))
{
	
	$username = $_POST['user_name'];  
    $password = $_POST['password']; 
	

        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($conn, $username);  
        $password = mysqli_real_escape_string($conn, $password);  
		

     
        $sql = "select * from user where password = '$password' AND (email = '$username' or user_name = '$username')";  
        $result = mysqli_query($conn, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC); 
		
        $count = mysqli_num_rows($result);  
         
		
		
        if($count !=0){ 

	
        header("Location: ../welcome_page.php");
			 
        }else if($count ==0){
			 $_SESSION['success_message'] = "Invalid user name or password";
			header("Location: ../index.html");
			
		}
 	
		

	}
	
	
	
	
	
	
	
	
	
    
		
		
		
?>  