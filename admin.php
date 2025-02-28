<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <title>Admin Page</title>

    
</head>
<body>
<?php
$conn=new mysqli("localhost","root","","hospital");
if($conn->connect_errno){
echo "failed to connect the db".$conn->connect_error;

}
else{
    echo '<p id="adhi"> Connected to DataBase</p>';
}

echo '<p class="data">Hospital DataBase</p>';

$res=mysqli_query($conn,"SELECT * FROM patient");
if(mysqli_num_rows($res)>0){
    
    $html='<div id="table"><table  style="width:100%">';
    $html.='<tr><th width="200">Name</th><th width="130">Gender</th><th width="180">Contact No</th><th width="180">DOB</th><th width="280">Address</th><th width="230">Email</th><th width="160">Treatment</th><th width="160">Appointment</th><th width="150">Attended</th></tr>';
    while($rows=mysqli_fetch_assoc($res)){
        $html.='<tr><td>'.$rows['name'].'</td><td>'.$rows['gender'].'</td><td>'.$rows['contact'].'</td><td>'.$rows['dob'].'</td><td>'.$rows['street'].'<br>'.$rows['city'].'<br>'.$rows['state'].'<br>'.$rows['zipcode'].'</td><td >'.$rows['email'].'</td ><td >'.$rows['services'].'</td><td>'.$rows['date_time'].'</td><td >'.$rows['attended'].'</td><td>';

    }



    $html.='</table></div>';
    echo $html;

}
else{
    echo '<p id="nodata" >No Data Found</p>';
}

?>
</body>
</html>