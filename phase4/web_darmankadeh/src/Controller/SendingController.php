<?php 
 /**
 * @category   web - darmankadeh
 * @author   Hosein Beheshti
 */
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\HttpFoundation\UrlHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use mysqli;
use Thread;
use Exception;

	//start session
	session_start();

    //destroy sessions
	// session_unset();
	// session_destroy();
	// session_write_close();
	// setcookie(session_name(),'',0,'/');

class SendingController extends Controller
{
	//handle session by setting a flag with different values
	public function session_handler()
    {
    	if (isset($_SESSION['patient'])) {
    		echo "****patient is here*****";
    		echo $_SESSION['patient'];
    		$session_flag = 1;
    	}elseif (isset($_SESSION['doctor'])) {
    		echo "****doctor is here*****";
    		echo $_SESSION['doctor'];  
       		$session_flag = 2;  	
    	}else{
    		echo "**you are not loged in**";
    		$session_flag = 0;
    	}
    	return $session_flag;
    }

	/**
	 * @Route("/")
	 *
	 * this function returns welcome page
	 * @return html file
	 */
    public function mainPage()
    {
    	// echo $this->UrlGenerator->generate('searchDoctors', [], UrlGenerator::ABSOLUTE_URL);

    	// echo $this->getAbsoluteUrl();
    	// $databaseController = new DatabaseController();
    	// echo "XX";
    	// $records = $databaseController->search_doctors('علی');
    	// $myJSON = json_encode($records);
    	// echo $myJSON;


		return $this->render('view/mainPage.html.twig', ['session' => $this->session_handler()]);    
	}
    /**
	 * @Route("/goToMainPage")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToMainPage()
    {
        return $this->render('view/mainpage.html.twig', ['session' => $this->session_handler()]);
    }
     /**
	 * @Route("/goToLoginPage")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToLoginPage()
    {
        return $this->render('view/loginpage.html.twig', ['session' => $this->session_handler()]);
    }
     /**
	 * @Route("/goToNeurologist")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToNeurologist(Request $request)
    {
    	echo "HIiiiiiiiiiiiiiiiiii";
    	$name = $request->get('val');
    	echo $name;
    	$spec = "0";
        return $this->render('view/neurologist.html.twig', ['name' => $name , 'spec' => $spec, 'session' => $this->session_handler()]);
    }
     /**
	 * @Route("/goToNeurologistSP")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToNeurologistSP(Request $request)
    {
    	echo "HIiiiiiiiiiiiiiiiiii goToNeurologistSP";
    	$spec = $request->get('spec');
    	echo $spec;
    	$name = "0";
        return $this->render('view/neurologist.html.twig', ['name' => $name, 'spec' => $spec,'session' => $this->session_handler()]);
    }
     /**
	 * @Route("/goToDoctorPage")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToDoctorPage(Request $request)
    {

    	echo "Hiiiiiiiiiiiiiiiiii goToDoctorPage";
    	$name = $request->get('id');
    	echo "name: ";
    	echo $name;

    	$databaseController = new DatabaseController();
    	$records = $databaseController->search_doctors($name);
    	$myJSON = json_encode($records);

    	echo "jason: ";
    	echo $myJSON;

        return $this->render('view/doctor.html.twig', ['doctorInformation' => $myJSON ,'session' => $this->session_handler()]);
    }
     /**
	 * @Route("/goToSkillPage")
	 *
	 * this function returns main page
	 * @return html file
	 */
    public function goToSkillPage(Request $request)
    {
    	echo "HIiiiiiiiiiiiiiiiiii skil page";
    	$name = $request->get('val');
    	echo $name;
        return $this->render('view/skillPage.html.twig', ['name' => $name ,'session' => $this->session_handler()]);
    }
    /**
	 * @Route("/UserPanel")
	 *
	 * this function returns UserPanel page
	 * @return html file
	 */
    public function UserPanel()
    {
    	$databaseController = new DatabaseController();
    	echo $this->session_handler();
       return $this->render('view/UserPanel.html.twig', ['session' => $this->session_handler()]);
    }
     /**
	 * @Route("/signUpPatient")
	 *
	 * @param $request is an object
	 * @return html file
	 */
    public function signUpPatient(Request $request)
    {
	    $databaseController = new DatabaseController();

	    //geting phone number and user ane password from inputs
		$userName = $request->get('userName');
		$password = $request->get('password');
		$number = $request->get('Number');

		$databaseController->insert_patient($userName, $password, $number);

		return $this->render('view/signUpPatient.html.twig', ['session' => $this->session_handler()]);
	}

	 /**
	 * @Route("/logInPatient")
	 *
	 * @param $request is an object
	 * @return html file
	 */
    public function logInPatient(Request $request)
    {
	    $databaseController = new DatabaseController();

	    //user ane password from inputs
		$userName = $request->get('userName');
		$password = $request->get('password');

		$pass = NULL;
		$pass = $databaseController->patient_getPass($userName);
		if ($pass == NULL) {
			echo "there is no user with this Username !!!!!!!!!!!!!!!!!!";
		}
		elseif ($password == $pass) {
			echo "trueeeeeeeeeeeee";
			$_SESSION["patient"] = $userName;
		}
		else{
			echo "falseeeeeeeeeeee";
		}
     return $this->render('view/loginPatient.html.twig', ['session' => $this->session_handler()]);
	}

	 /**
	 * @Route("/updatePatientProfilePage")
	 *
	 * this function returns update patient page
	 * @return html file
	 */
    public function updatePatientProfilePage(Request $request)
    {
    	$username = $_SESSION['patient'];
    	echo "username: ";
    	echo $username;
    	$records = array();
    	$databaseController = new DatabaseController();
    	$records =  $databaseController->select_patient($username);
    	$password = $records[0];
    	$phoneNumber = $records[1];

     return $this->render('view/updatePatientProfile.html.twig', ['password' => $password , 'phoneNumber' => $phoneNumber, 'session' => $this->session_handler()]);
    }

     /**
	 * @Route("/updatePatientProfile")
	 *
	 * this function returns remove user page
	 * @return html file
	 */
    public function updatePatientProfile(Request $request)
    {
    	$username = $_SESSION['patient'];
    	$databaseController = new DatabaseController();
    	$password = $request->get('password');
		$phoneNumber = $request->get('Number');

		$databaseController->update_patient($username, $password, $phoneNumber);

     return $this->render('view/updatePatientProfile.html.twig', ['password' => $password , 'phoneNumber' => $phoneNumber, 'session' => $this->session_handler()]);   
      }


     /**
	 * @Route("/signUpDoctor")
	 *
	 * @param $request is an object
	 * @return html file
	 */
    public function signUpDoctor(Request $request)
    {
    $databaseController = new DatabaseController();

	$username = $request->get('userName');
	$password = $request->get('password');
	$phoneNumber = $request->get('phoneNumber');
	$name = $request->get('drName');
	$spec = $request->get('spec');
	$drNumber = $request->get('drNumber');
	$onlinePay = $request->get('onlinePay');
	$experienceYears = $request->get('experienceYears');
	$address = $request->get('address');
	$saturday = $request->get('saturday');
	$sunday = $request->get('sunday');
	$monday = $request->get('monday');
	$tuesday = $request->get('tuesday');
	$wednesday = $request->get('wednesday');
	$thursday = $request->get('thursday');
	$friday = $request->get('friday');
	$image = $request->get('image');



	$databaseController->insert_doctor($username, $password, $phoneNumber, $name, $spec, $drNumber, $onlinePay ,$experienceYears, $address, $saturday, $sunday, $monday, $tuesday, $wednesday, $thursday, $friday, $image);

	       return $this->render('view/signUpDoctor.html.twig',['session' => $this->session_handler()]);
	}


	/**
	 * @Route("/logInDoctor")
	 *
	 * @param $request is an object
	 * @return html file
	 */
    public function logInDoctor(Request $request)
    {
    $databaseController = new DatabaseController();

    //user ane password from inputs
	$userName = $request->get('userName');
	$password = $request->get('password');

	$pass = NULL;
	$pass = $databaseController->doctor_getPass($userName);
	if ($pass == NULL) {
		echo "there is no user with this Username !!!!!!!!!!!!!!!!!!";
	}
	elseif ($password == $pass) {
		echo "trueeeeeeeeeeeee";
		$_SESSION["doctor"] = $userName;
	}
	else{
		echo "falseeeeeeeeeeee";
	}
	    return $this->render('view/logInDoctor.html.twig', ['session' => $this->session_handler()]);
	}
	/**
	 * @Route("/doctorProfile")
	 *
	 * this function returns doctor profile page
	 * @return html file
	 */
    public function doctorProfile(Request $request)
    {
    	$username = $_SESSION['doctor'];
    	$records = array();
    	$databaseController = new DatabaseController();
    	$records =  $databaseController->select_doctor($username);
    	$password = $records[0];
    	$phoneNumber = $records[1];
    	$name = $records[2];
    	$spec = $records[3];
    	$drNumber = $records[4];
    	$onlinePay = $records[5];
    	$experienceYears = $records[6];
    	$address = $records[7];


     return $this->render('view/doctorProfile.html.twig', ['username' => $username , 'password' => $password , 'phoneNumber' => $phoneNumber, 'name' => $name, 'spec' => $spec, 'drNumber' => $drNumber, 'onlinePay' => $onlinePay, 'experienceYears' => $experienceYears, 'address' => $address]); 
      }

     /**
	 * @Route("/searchDoctors")
	 *
	 * this function returns remove user page
	 * @return html file
	 */
    public function searchDoctors(Request $request)
    {
    	$name = $request->get('name');
    	$databaseController = new DatabaseController();
    	$records = $databaseController->search_doctors($name);
    	// $myJSON = json_encode($records);
    	// echo $myJSON;
    	// echo "entereeeeeeeeeed";
    	 return new JsonResponse(array(
            'status' => 'OK',
            'massage' => $records),200);
    	// return $myJSON;
		// $name = $request->get('name');
		// echo $name;
  //   	$databaseController = new DatabaseController();
  //   	$records =  $databaseController->search_doctors($name);
  //   	$myJSON = json_encode($records);

    	if (!$request->isXmlHttpRequest()) {
        	return new JsonResponse(array(
            'status' => 'Error',
            'massage' => 'Error'),
        		400);
    		}

    	$databaseController = new DatabaseController();
    	echo "XX";
    	$records = $databaseController->search_doctors('ali');
    	$myJSON = json_encode($records);

    	
    	 return new JsonResponse(array(
            'status' => 'OK',
            'massage' => $myJSON),
        200);
    }

     /**
	 * @Route("/searchDoctorsBySpec")
	 *
	 * this function returns remove user page
	 * @return html file
	 */
    public function searchDoctorsBySpec(Request $request)
    {
    	$spec = $request->get('spec');
    	$databaseController = new DatabaseController();
    	$records = $databaseController->search_doctorsBySpec($spec);
    	// $myJSON = json_encode($records);
    	// echo $myJSON;
    	// echo "entereeeeeeeeeed";
    	 return new JsonResponse(array(
            'status' => 'OK',
            'massage' => $records),200);
    	// return $myJSON;
		// $name = $request->get('name');
		// echo $name;
  //   	$databaseController = new DatabaseController();
  //   	$records =  $databaseController->search_doctors($name);
  //   	$myJSON = json_encode($records);

    	if (!$request->isXmlHttpRequest()) {
        	return new JsonResponse(array(
            'status' => 'Error',
            'massage' => 'Error'),
        		400);
    		}

    	$databaseController = new DatabaseController();
    	echo "XX";
    	$records = $databaseController->search_doctors('ali');
    	$myJSON = json_encode($records);

    	
    	 return new JsonResponse(array(
            'status' => 'OK',
            'massage' => $myJSON),
        200);
    }

	//instants of DatabaseController class

	//call insert function and passing variables

	// $databaseController->insert_customer('hosein', 'beheshti', '56484', '09123273259', 20);
	// $databaseController->insert_address('home', 'hakimie', '02177000000', 1);
	// $databaseController->insert_delivery('aref', 'motamedi', '56484', '09000000000');
	// $databaseController->insert_order_factor(1, 1, NULL, '1220000', '2018-01-11');
	// $databaseController->insert_food_list(1, "hotdog" , '120000');
	// $databaseController->insert_menu("hotdog" , '120000');
	// $databaseController->insert_store("hypermarket");
	// $databaseController->insert_material_factor(1, "2000000", '2018-01-11');
	// $databaseController->insert_material_list(1, "tey" , "20000");

	// $databaseController->update_customer(1, 'ali', 'beheshti', '99', '09123273259', 23);
	// $databaseController->update_menu("hotdog", "10000");
	// $databaseController->update_store("hypermarket");
	// $databaseController->update_delivery(1, 'ali', 'beheshti', '99', '09123273259');

	// // $databaseController->delete_customer(1);
	// // $databaseController->delete_menu("hotdog");
	// // $databaseController->delete_delivery(1);

	// $databaseController->insert_order_factor(NULL, 1, NULL, '1120000', '2018-01-11');
	// $databaseController->insert_order_factor(NULL, 1, NULL, '1220000', '2018-01-11');
	// $databaseController->insert_order_factor(NULL, 1, NULL, '1220000', '2018-01-11');


	// echo $databaseController->select_totalPurchase(1);
	// echo $databaseController->select_favoriteFood(1);
	// echo $databaseController->select_totalDailySales('2018-01-11');
	// echo $databaseController->select_totalDailyPurchase('2018-01-11');
	// $databaseController->select_listOfDailySales('2018-01-11');
	// $databaseController->select_listOfDailyPurchase('2018-01-11');
	// echo $databaseController->select_totalDailyPurchase('2018-01-11');



       // return $this->render('view/1.html.twig' ,['topnumbers' => $topNumbers]);
   	
}
 ?>