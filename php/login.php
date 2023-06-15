<?php

  $host = "localhost:3307"; /* Host name */
  $user = "root"; /* User */
  $password = ""; /* Password */
  $dbname = "form"; /* Database name */

  $con = mysqli_connect($host, $user, $password,$dbname);

  // Check connection
  if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }else{
    //echo "Connected successfully";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $uname = $_POST['uname'];
    $pwd = $_POST['password'];

    $sql = "SELECT * FROM `login` WHERE `username` = '$uname' and `password` = '$pwd'";

    $result = mysqli_query($con, $sql); //query check
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC); //fetch data
    $count = mysqli_num_rows($result); //data count

    if($count == 1) {
      echo json_encode(array("response"=>"success", "data"=>$row));
    }else{
      echo json_encode(array("response"=>"failure", "err_message"=>'Invalid Login'));
    }

  }

?>