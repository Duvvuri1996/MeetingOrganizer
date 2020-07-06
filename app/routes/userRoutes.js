const express = require('express');
const appConfig = require('../Configuration/appConfig');
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/user`

    app.get(`${baseUrl}/all`, auth.isAuthorized, userController.getAllUsers)

    /**
    	 * @api {get} /api/v1/user/all Get all users
    	 * @apiVersion 0.0.1
    	 * @apiGroup read
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Users Details Found",
    	    "status": 200,
    	    "data": [
    					{
    						userId: "string",
    						firstName: "string",
                            lastName: "string",
                            fullName : "string",
    						country: "string",
    						mobileNumber: "string",
    						email: "Date",
                            isAdmin: boolean,
    						uniqueUserName : "string",
    						createdOn: "date"
    					}
    	    		]
    	    	
    		
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find users Details",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.get(`${baseUrl}/all/normal`, auth.isAuthorized, userController.getAllNormalUsers)

    /**
    	 * @api {get} /api/v1/user/all/normal Get all normal users
    	 * @apiVersion 0.0.1
    	 * @apiGroup read
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Normal Users Details Found",
    	    "status": 200,
    	    "data": [
    					{
    						userId: "string",
    						firstName: "string",
                            lastName: "string",
                            fullName : "string",
    						country: "string",
    						mobileNumber: "number",
    						email: "string",
                            isAdmin: boolean,
    						uniqueUserName : "string",
    						createdOn: "date"
    					}
    	    		]
    	    	
    		
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Normal users Details",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.get(`${baseUrl}/all/admin`, auth.isAuthorized, userController.getAllAdminUsers)

    /**
    	 * @api {get} /api/v1/user/all/admin Get all admin users
    	 * @apiVersion 0.0.1
    	 * @apiGroup read
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Admin Users Details Found",
    	    "status": 200,
    	    "data": [
    					{
    						userId: "string",
    						firstName: "string",
                            lastName: "string",
                            fullName : "string",
    						country: "string",
    						mobileNumber: "number",
    						email: "string",
                            isAdmin: boolean,
    						uniqueUserName : "string",
    						createdOn: "date"
    					}
    	    		]
    	    	
    		
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Admin users Details",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.get(`${baseUrl}/:userId`, auth.isAuthorized, userController.getUserByUserId)

    /**
    	 * @api {get} /api/v1/user/:userId Get User by userId
    	 * @apiVersion 0.0.1
    	 * @apiGroup read
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 * @apiParam {String} userId userId of event as parameter
         * 
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "User Details Found",
    	    "status": 200,
    	    "data": [
    					{
    						userId: "string",
    						firstName: "string",
                            lastName: "string",
                            fullName : "string",
    						country: "string",
    						mobileNumber: "number",
    						email: "string",
                            isAdmin: boolean,
    						uniqueUserName : "string",
    						createdOn: "date"
    					}
    	    		]
    	    	
    		
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find user Details",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.post(`${baseUrl}/signup`, userController.signUpFunction)

    /**
    	 * @api {post} /api/v1/user/signup signup User
    	 * @apiVersion 0.0.1
    	 * @apiGroup create
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 * @apiParam {String} firstName firstName of the user passed as a body parameter
    	 * @apiParam {String} lastName lastName of the user passed as a body parameter
    	 * @apiParam {String} country country of the user passed as a body parameter
         * @apiParam {String} telCode telCode of the user passed as a body parameter
    	 * @apiParam {Number} mobileNumber mobileNumber of the user passed as a body parameter
         * @apiParam {Boolean} isAdmin isAdmin of the user passed as a body parameter
         * @apiParam {String} uniqueUserName uniqueUserName of the user passed as a body parameter
         * @apiParam {String} email email of the user passed as a body parameter
         * @apiParam {String} password password of the user passed as a body parameter
         * 
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "User signup successfull",
    	    "status": 200,
    	    "data": [
    					{
    						userId: "string",
    						firstName: "string",
                            lastName: "string",
                            fullName : "string",
    						country: "string",
    						mobileNumber: "number",
    						email: "string",
                            isAdmin: boolean,
    						uniqueUserName : "string",
    						createdOn: "date"
    					}
    	    		]
    	    	
    		
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed to signup user",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.post(`${baseUrl}/login`, userController.loginFunction)

    /**
        	 * @api {post} /api/v1/user/login Login User
        	 * @apiVersion 0.0.1
        	 *
        	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
             * @apiParam {String} email email of the user passed as a body parameter
             * @apiParam {String} password password of the user passed as a body parameter
             * 
        	 *  @apiSuccessExample {json} Success-Response:
        	 *  {
        	    "error": false,
        	    "message": "User Login successfull",
        	    "status": 200,
        	    "data": [
                            {   
                                authToken : "string",
                                userDetails:{
                                userId: "string",
        						firstName: "string",
                                lastName: "string",
                                fullName : "string",
        						country: "string",
        						mobileNumber: "number",
        						email: "string",
                                isAdmin: boolean,
        						uniqueUserName : "string",
        						createdOn: "date"
                                }
        						
        					}
        	    		]
        	    	
        		
        	}
        	  @apiErrorExample {json} Error-Response:
        	 *
        	 * {
        	    "error": true,
        	    "message": "Failed to Login user",
        	    "status": 404/500,
        	    "data": null
        	   }
        	 */

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logoutFunction)

    /**
            	 * @api {post} /api/v1/user/logout logout User
            	 * @apiVersion 0.0.1
            	 *
            	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
             
            	 *  @apiSuccessExample {json} Success-Response:
            	 *  {
            	    "error": false,
            	    "message": "User Logged out successfully",
            	    "status": 200,
            	    "data": null
            	}
            	  @apiErrorExample {json} Error-Response:
            	 *
            	 * {
            	    "error": true,
            	    "message": "Failed Logout user",
            	    "status": 404/500,
            	    "data": null
            	   }
            	 */

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUserByUserId)

    /**
    	 * @api {post} /api/v1/user/:userId/delete Delete user by userId
    	 * @apiVersion 0.0.1
    	 * @apiGroup delete
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    	 * @apiParam {String} userId userId of the user passed as the URL parameter
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "User Deleted Successfully",
    	    "status": 200,
    	    "data": null
    		}
    		
    	 * @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Error Occured.,
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.post(`${baseUrl}/recoverymail`, userController.recoveryMail)

    /**
    	 * @api {post} /api/v1/user/recoverymail Generate email to reset password by user
    	 * @apiVersion 0.0.1
    	 *
    	 * @apiParam {String} email email of the user passed as body parameter
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "Email sent successfully to the user",
    	    "status": 200,
    	    "data": "Please check your email for the link to reset password"
    		}
    		
    	 * @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Error Occured while sending email.,
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.post(`${baseUrl}/resetpassword/:recoveryToken`, userController.resetPassword)

    /**
    	 * @api {post} /api/v1/user/resetpassword/:recoveryToken To reset password
    	 * @apiVersion 0.0.1
    	 *
         * @apiParam {String} recoveryToken as URl parameter
    	 * @apiParam {String} password password of the user passed as body parameter
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "Password Reset successfull",
    	    "status": 200,
    	    "data": "Please Login to continue"
    		}
    		
    	 * @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Error Occured while reset password.,
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.get(`${baseUrl}/count/normal`, auth.isAuthorized, userController.getAllNormalUsersCount)

    /**
    	 * @api {get} /api/v1/user/count/:normal Get all normal users count
    	 * @apiVersion 0.0.1
    	 * @apiGroup read
    	 *
    	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
         * 
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "Count retrieved",
    	    "status": 200,
    		"data": "number"
    	 }
    	 * @apiErrorExample {json} Error-Response:
    	
    	 * {
    	    "error": true,
    	    "message": "Failed To count all normal users count",
    	    "status": 404/500,
    	    "data": null
    	   }
    	 */

    app.get(`${baseUrl}count/admin`, auth.isAuthorized, userController.getAllAdminUsersCount)

    /**
	 * @api {get} /api/v1/events/count/admin Get all admin users count
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header) 
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Count retrieved",
	    "status": 200,
		"data": "number"
	 }
	 * @apiErrorExample {json} Error-Response:
	
	 * {
	    "error": true,
	    "message": "Failed To count all admin users count",
	    "status": 404/500,
	    "data": null
	   }
	 */
}