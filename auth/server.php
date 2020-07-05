<?php
session_start();
// connection
$con = mysqli_connect('localhost','root','','beyond-me');
// initialize variables
$username = "";
$name = "";
$email = "";
$errors = array();
//register new user
if (isset($_POST['reg_user'])){
	//receive inputs from the form
	$name = mysqli_real_escape_string($con, $_POST['name']);
	$username = mysqli_real_escape_string($con, $_POST['username']);
	$email = mysqli_real_escape_string($con, $_POST['email']);
	$password_1 = mysqli_real_escape_string($con, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($con, $_POST['password_2']);
	//ensure everything is correctly filled.
	if(empty($name)){array_push($errors, "Name is required");}
	if(empty($username)){array_push($errors, "Username is required");}
	if(empty($email)){array_push($errors, "Email is required");}
	if(empty($password_1)){array_push($errors, "Password is required");}
	if($password_1 != $password_2){
		array_push($errors, "Passwords don't match");
	}
	//check if username or email exists
	$user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
	$result = mysqli_query($con, $user_check_query);

	if($user){
		if ($user['username'] === $username){
			array_push($errors, "username already exists");
		}
		if ($user['email'] === $email){
			array_push($errors, "email already exists");
		}
	}
	//if there are no errors, register user
	if(count($errors) == 0){
		$password = md5($password_1); //encrypts password
		$query = "INSERT INTO users(name, username, email, password) 
					VALUES('$name','$username','$email','$password_1')";
		mysqli_query($db,$query);
		$_SESSION['username'] = $username;
		$_SESSION['success'] = "You are now logged in";
		header('location: ../index.html');
	}
}
?>