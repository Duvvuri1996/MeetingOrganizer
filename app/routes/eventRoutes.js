const express = require('express')
const appConfig = require('../Configuration/appConfig')
const auth = require('../middlewares/auth')
const eventController = require('../controllers/eventController')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/events`

	app.get(`${baseUrl}/all`, auth.isAuthorized, eventController.getAllEvents)
	/**
	 * @api {get} /api/v1/events/all Get all events
	 * @apiVersion 0.0.1
	 * 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Events Details Found",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
                        eventTitle: "string",
                        userId: "string",
                        startDate : "Date",
                        startTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        endDate: : "Date",
                        endTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        color : boolean,
                        createdOn:  : "Date",
                        modifiedOn : "Date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Event Details",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.get(`${baseUrl}/all/:userId`, auth.isAuthorized, eventController.getAllEventsOfSingleUser)
	/**
	 * @api {get} /api/v1/events/all/:userId Get all events of a single user
	 * @apiVersion 0.0.1
	 * 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of user as parameter
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Events Details of a single user Found",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
                        eventTitle: "string",
                        userId: "string",
                        startDate : "Date",
                        startTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        endDate: : "Date",
                        endTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        color : boolean,
                        createdOn:  : "Date",
                        modifiedOn : "Date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Event Details of user",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.get(`${baseUrl}/:eventId`, auth.isAuthorized, eventController.getSingleEventByEventId)
	/**
	 * @api {get} /api/v1/events/:eventId Get all events of a single user
	 * @apiVersion 0.0.1
	 * 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId eventId of user as parameter
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event Details",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
                        eventTitle: "string",
                        userId: "string",
                        startDate : "Date",
                        startTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        endDate: : "Date",
                        endTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        color : boolean,
                        createdOn:  : "Date",
                        modifiedOn : "Date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Event Details",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.get(`${baseUrl}/count/all`, auth.isAuthorized, eventController.getCountOfAllEvents)
	/**
	 * @api {get} /api/v1/events/count/all Get count of all events
	 * @apiVersion 0.0.1
	 * 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Count retrieved",
	    "status": 200,
	    "data": "Number"	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to get count",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.get(`${baseUrl}/count/:userId`, auth.isAuthorized, eventController.getAllEventsCountOfSingleUser)
	/**
	 * @api {get} /api/v1/events/count/:userId Get count of all events of single user
	 * @apiVersion 0.0.1
	 * 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of a user as parameter
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Count retrieved",
	    "status": 200,
	    "data": "Number"	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to get count",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.post(`${baseUrl}/create`, auth.isAuthorized, eventController.createEvent)
	/**
	 * @api {get} /api/v1/events/create Create an event
	 * @apiVersion 0.0.1
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventTitle eventTitle of the event passed as a body parameter
	 * @apiParam {String} userId userId of the event passed as a body parameter
	 * @apiParam {Date} startDate startDate of the event passed as a body parameter
	 * @apiParam {Object} startTime startTime of the event passed as a body parameter
	 * @apiParam {Date} endDate endDate of the event passed as a body parameter
	 * @apiParam {Object} endTime endTime of the event passed as a body parameter
	 * @apiParam {String} color color code in hexadecimal form(#000000) as body parameter
	 * 
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event created successfully",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
                        eventTitle: "string",
                        userId: "string",
                        startDate : "Date",
                        startTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        endDate: : "Date",
                        endTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        color : boolean,
                        createdOn:  : "Date",
                        modifiedOn : "Date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To create event",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.post(`${baseUrl}/:eventId/delete`, auth.isAuthorized, eventController.deleteEventByEventId)
	/**
	 * @api {post} /api/v1/events/:eventId/delete Delete event
	 * @apiVersion 0.0.1
     * 
     * 
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId The eventId passed as URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Deleted successfull.",
	    "status": 200,
	    "data": null
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured while deleting event.",
	    "status": 404/500,
	    "data": null
	   }
	 */

	app.put(`${baseUrl}/:eventId/edit`, auth.isAuthorized, eventController.editEventByEventId)
	/**
	 * @api {post} /api/v1/events/:eventID/edit Edit an event
	 * @apiVersion 0.0.1
	 * 
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId eventId of the event passed as the URL parameter
	 * 
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event edited successfully",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
                        eventTitle: "string",
                        userId: "string",
                        startDate : "Date",
                        startTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        endDate: : "Date",
                        endTime: {
                                    hour:"number",
                                    minute:"number",
                                    second:"number"
                                },
                        color : boolean,
                        createdOn:  : "Date",
                        modifiedOn : "Date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to edit event",
	    "status": 404/500,
	    "data": null
	   }
	 */

}