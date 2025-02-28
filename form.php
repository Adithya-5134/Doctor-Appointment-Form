<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Verification</title>
    
    <style>
        .adi{
    font-size: 45px;
    color: red;
    text-align: center;

}

button{
    color: black;
    background-color: rgb(238, 197, 156);
    width:120px;
    height:40px;
    text-transform: uppercase;
    list-style: none;
    cursor: pointer;
    border-radius: 4px;
}


.hd1{
    text-align: center;

}
    </style>
</head>
<body>
<?php

$a=$_POST['name'];
$b=$_POST['gender'];
$c=$_POST['contact'];
$d=$_POST['dob'];
$e=$_POST['street'];
$f=$_POST['city'];
$g=$_POST['state'];
$h=$_POST['zipcode'];
$i=$_POST['email'];
$j=$_POST['services'];
$k=$_POST['date_time'];
$l=$_POST['attended'];

$conn=mysqli_connect("localhost","root","","hospital");
$sql="INSERT INTO patient(name,gender,contact,dob,street,city,state,zipcode,email,services,date_time,attended) VALUES('$a','$b','$c','$d','$e','$f','$g','$h','$i','$j','$k','$l')";
$ss=mysqli_query($conn,$sql);
if($ss)
{
    echo'<h1 class="adi">Form Submitted</h1>';
}
else{
    echo"form not submitted";
}
mysqli_close($conn);
?>
<br>

<div class="hd1"><a href="index.html"><button class="but1">Go to home</button></a><br></div>





</body>
</html>

