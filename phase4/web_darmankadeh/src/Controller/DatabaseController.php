<?php 
 /**
 * @category   Web-darmankadeh
 * @author   Hosein_Beheshti
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use mysqli;
use Thread;

/** 
* DatabaseController is a class that include 
* connect() and report() functions
* for connect to database and work with it
*/

class 
DatabaseController extends Controller
{
		private $servername = "localhost:3306";
		private $username = "root";
		private $password = "";
		private $databaseName = "db_darmankadeh";

	//a constructor for DatabaseControll$r class
	//that create a database and a table if there is not exist
	public function __construct(){
		//Our database specifications

		// Create connection
		$conn = new mysqli($this->servername, $this->username, $this->password);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 
		//Create database
		$sql = "CREATE DATABASE db_darmankadeh CHARACTER SET utf8 COLLATE utf8_general_ci";
		if ($conn->query($sql) === TRUE) {
		    // //echo "database created successfully";
		    $conn->close();

		} else {
		    // //echo "Error creating database: " . $conn->error;
		    $conn->close();
		}
		// Create connection
		$conn = new mysqli($this->servername, $this->username, $this->password, $this->databaseName);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 
		//*************************************************************************CREATE TABLES
		// Create table patient
		$sql = 
		"CREATE table patient (
		patient_id bigint(10) PRIMARY KEY AUTO_INCREMENT,
		username varchar(255) NOT NULL,
		password varchar(255) NOT NULL,
		phoneNumber bigint(20) NOT NULL
		)";

		if ($conn->query($sql) === TRUE) {
		     //echo "Table patient created successfully";
		} else {
		   //echo "Error creating patient table: " . $conn->error;
		}

		// Create table ‌Doctor
		$sql = 
		"CREATE table doctor (
		doctor_id bigint(10) PRIMARY KEY AUTO_INCREMENT,
		username varchar(255) NOT NULL,
		password varchar(255) NOT NULL,
		phoneNumber bigint(20) NOT NULL,
		name varchar(255) NOT NULL,
		spec int(2) NOT NULL,
		drNumber bigint(20) NOT NULL,
		onlinePay varchar(255) NOT NULL,
		experienceYears int(3) NOT NULL,
		address varchar(255) NOT NULL,
		saturday varchar(255) NOT NULL,
		sunday varchar(255) NOT NULL,
		monday varchar(255) NOT NULL,
		tuesday varchar(255) NOT NULL,
		wednesday varchar(255) NOT NULL,
		thursday varchar(255) NOT NULL,
		friday varchar(255) NOT NULL,
		image longblob NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;";

		if ($conn->query($sql) === TRUE) {
		     //echo "Table doctor created successfully";
		} else {
		   //echo "Error creating doctor table: " . $conn->error;
		}

		// Create table comment
		$sql = 
		"CREATE table comment(
		comment_id bigint(10) PRIMARY KEY AUTO_INCREMENT,
		patient_username varchar(255) ,
		doctor_username varchar(255) ,
		commentText varchar(255) NOT NULL
		)";

		if ($conn->query($sql) === TRUE) {
		     // echo "Table comment created successfully";
		} else {
		   // echo "Error creating comment table: " . $conn->error;
		//    		Foreign key(patient_username) references patient(username) ON DELETE SET NULL,
		// Foreign key(doctor_username) references doctor(username) ON DELETE SET NULL
		}	

		//*************************************************************************CREATE TABLES
	}
	/**
	* this function connect to our database
	*
	* @param $servername 
	* @param $username
	* @param $password
	* @param $databaseName
	* @return $conn an object
	*/
	public function connect(){

	$conn = new mysqli($this->servername, $this->username, $this->password, $this->databaseName);

	if($conn->connect_error){
		die(" connection failed " . $conn->connect_error);
	}
	else{
		////echo "connected to database successfully"
	}
	return $conn;
	}
	//insert into patient table
	public function insert_patient($username, $password, $number){
	$conn = $this->connect();
	$sql = "INSERT INTO patient(username, password, phoneNumber) VALUES('$username', '$password' , '$number')";
	if ($conn->query($sql) === TRUE){
		//echo " inserted to patient table ";

	} else{
		//echo $conn->query($sql);
		//echo "can not insert in patient table ";
	}
	$conn->close();

	return new Response();
	}

	//get patient password
	public function patient_getPass($username){
	$conn = $this->connect();

	$sql = "SELECT password
			FROM patient
			where username = '$username'";

	$pass = NULL;
	if ($result = $conn->query($sql)){
		// //echo " inserted to order_factor table ";
			while ($row = $result->fetch_assoc()) {
			$pass = $row['password'];
			}	
		//echo "pass is = ";
		//echo $pass;

	} else{
		// //echo $conn->query($sql);
		// //echo " can not insert in order_factor table ";
	}
	$conn->close();

	return $pass;
	}

	//select patient with username
	public function select_patient($username){
	$conn = $this->connect();

	$sql = "SELECT * from patient where username = '$username'";

	$rec = array();
	if ($result = $conn->query($sql)){
			while ($row = $result->fetch_assoc()) {
			$count = 0;
			$rec[$count] = $row['password'];
			$count++;
			$rec[$count] = $row['phoneNumber'];
			}
		}
	 else{
	 	//echo "not find";
	}
	$conn->close();

	return $rec;
	}

	//update patient table
	public function update_patient($username, $password, $phoneNumber){
	$conn = $this->connect();
	$sql = "UPDATE patient SET password = '$password' , phoneNumber = '$phoneNumber' WHERE username = '$username'";
	if ($conn->query($sql) === TRUE){
		//echo " updated patient table ";

	} else{
		//echo $conn->query($sql);
		//echo " can not update patient table ";
	}
	$conn->close();

	return new Response();
	}

	//insert into doctor table
	public function insert_doctor($username, $password, $phoneNumber, $name, $spec, $drNumber, $onlinePay ,$experienceYears, $address, $saturday, $sunday, $monday, $tuesday, $wednesday, $thursday, $friday, $image){
	$conn = $this->connect();
	$sql = "INSERT INTO doctor(username, password, phoneNumber, name, spec, drNumber, onlinePay ,
		experienceYears, address, saturday, sunday, monday, tuesday, wednesday, thursday, friday, image) VALUES('$username', '$password', '$phoneNumber', '$name', '$spec', '$drNumber', '$onlinePay' ,
		'$experienceYears', '$address', '$saturday', '$sunday', '$monday', '$tuesday', '$wednesday', '$thursday', '$friday', '$image')";
	if ($conn->query($sql) === TRUE){
		//echo " inserted to doctor table ";

	} else{
		//echo $conn->query($sql);
		//echo "can not insert in doctor table ";
	}
	$conn->close();

	return new Response();
	}

	//select doctor with username
	public function select_doctor($username){
	$conn = $this->connect();

	$sql = "SELECT * from doctor where username = '$username'";

	$rec = array();
	if ($result = $conn->query($sql)){
			while ($row = $result->fetch_assoc()) {
			$count = 0;
			$rec[$count] = $row['password'];
			$count++;
			$rec[$count] = $row['phoneNumber'];
			$count++;
			$rec[$count] = $row['name'];
			$count++;
			$rec[$count] = $row['spec'];
			$count++;
			$rec[$count] = $row['drNumber'];
			$count++;
			$rec[$count] = $row['onlinePay'];
			$count++;
			$rec[$count] = $row['experienceYears'];
			$count++;
			$rec[$count] = $row['address'];
			$count++;
			$rec[$count] = $row['saturday'];
			$count++;
			$rec[$count] = $row['sunday'];
			$count++;
			$rec[$count] = $row['monday'];
			$count++;
			$rec[$count] = $row['tuesday'];
			$count++;
			$rec[$count] = $row['wednesday'];
			$count++;
			$rec[$count] = $row['thursday'];
			$count++;
			$rec[$count] = $row['friday'];
			$count++;
			$rec[$count] = $row['image'];
			}
		}
	 else{
	 	//echo "not find";
	}
	$conn->close();

	return $rec;
	}

	//get doctor password
	public function doctor_getPass($username){
	$conn = $this->connect();

	$sql = "SELECT password
			FROM doctor
			where username = '$username'";

	$pass = NULL;
	if ($result = $conn->query($sql)){
			while ($row = $result->fetch_assoc()) {
			$pass = $row['password'];
			}	
		//echo "pass is = ";
		//echo $pass;

	} else{

	}
	$conn->close();

	return $pass;
	}

	//search doctors
	public function search_doctors($name){
	$conn = $this->connect();

	$sql = "SELECT * from doctor where name LIKE '%$name%'";

	$records = array();

	if ($result = $conn->query($sql)){
		//echo "selected doctors",
  			  $counter =0;
			while ($row = $result->fetch_assoc()) {
			$myObje = (object)array();
			$myObje->username = $row['username'];
			$myObje->password = $row['password'];
			$myObje->phoneNumber = $row['phoneNumber'];
			$myObje->name = $row['name'];
			$myObje->spec = $row['spec'];
			$myObje->drNumber = $row['drNumber'];
			$myObje->onlinePay = $row['onlinePay'];
			$myObje->experienceYears = $row['experienceYears'];
			$myObje->address = $row['address'];
			$myObje->saturday = $row['saturday'];
			$myObje->sunday = $row['sunday'];
			$myObje->monday = $row['monday'];
			$myObje->tuesday = $row['tuesday'];
			$myObje->wednesday = $row['wednesday'];
			$myObje->thursday = $row['thursday'];
			$myObje->friday = $row['friday'];
			$records[$counter] = $myObje;
			$counter++;
			}
		}
	 else{

	}
	$conn->close();

	return $records;
	}

	//search doctors
	public function search_doctorsBySpec($spec){
	$conn = $this->connect();

	$sql = "SELECT * from doctor where spec = '$spec'";

	$records = array();

	if ($result = $conn->query($sql)){
		//echo "selected doctors",
  			  $counter =0;
			while ($row = $result->fetch_assoc()) {
			$myObje = (object)array();
			$myObje->username = $row['username'];
			$myObje->password = $row['password'];
			$myObje->phoneNumber = $row['phoneNumber'];
			$myObje->name = $row['name'];
			$myObje->spec = $row['spec'];
			$myObje->drNumber = $row['drNumber'];
			$myObje->onlinePay = $row['onlinePay'];
			$myObje->experienceYears = $row['experienceYears'];
			$myObje->address = $row['address'];
			$myObje->saturday = $row['saturday'];
			$myObje->sunday = $row['sunday'];
			$myObje->monday = $row['monday'];
			$myObje->tuesday = $row['tuesday'];
			$myObje->wednesday = $row['wednesday'];
			$myObje->thursday = $row['thursday'];
			$myObje->friday = $row['friday'];
			$records[$counter] = $myObje;
			$counter++;
			}
		}
	 else{

	}
	$conn->close();

	return $records;
	}

	//insert into comment table
	public function insert_comment($patient_username, $doctor_username, $commentText){
	$conn = $this->connect();
	$sql = "INSERT INTO comment(patient_username, doctor_username, commentText) VALUES('$patient_username', '$doctor_username' , '$commentText')";
	if ($conn->query($sql) === TRUE){
		//echo " inserted to comment table ";

	} else{
		//echo $conn->query($sql);
		//echo "can not insert in comment table ";
	}
	$conn->close();
	return new Response();
	}
}
 ?>