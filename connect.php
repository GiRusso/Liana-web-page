<?php
$corporateEmail = filter_input(INPUT_POST, 'corporateEmail');

if (!empty($corporateEmail)){
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "mysql";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
  . mysqli_connect_error());
}
else{
  $id = uniqid (rand(), true);
  $sql = "INSERT INTO demo (corporateEmail, ID)
  values ('$corporateEmail', '$id')";
if ($conn->query($sql)){
  echo "Thanks for subscribing!";
  header("refresh:3; url=index.html"); 
}
else{
  echo "Error: ". $sql ."
  ". $conn->error;
}
$conn->close();
}
}
else{
  echo "Email should not be empty";
die();
}

?>