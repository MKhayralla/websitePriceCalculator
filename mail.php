<?php
if(isset($_POST['submit'])) {
$to = "mahmoudkhayralla@gmail.com";
$subject = "web quote";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$company = $_POST['company'];

$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message\n phone:\n $phone\n company:\n $company";

echo "Data has been submitted to $to!";
if(mail($to, $subject, $body)){
  header('Location: index.html');}
else {
  echo"check your server mail settings" ; 
}
} else {
echo "blarg!";
}
?>
