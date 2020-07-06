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
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Event Details Found",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
						eventTitle: "string",
						creatorName: "string",
						creatorId: "string",
						userId: "string",
						startDate: "Date",
						startTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
                        endDate: "Date",
                        endTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
						color : "string",
						createdOn: "date",
						modifiedOn: "date"
					}
	    		]
	    	
		
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find event Details",
	    "status": 404/500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/all/:userId`, auth.isAuthorized, eventController.getAllEventsOfSingleUser)

    /**
	 * @api {get} /api/v1/events/all/:userId Get all events of single user
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of user as parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Event Details of a single user Found",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
						eventTitle: "string",
						creatorName: "string",
						creatorId: "string",
						userId: "string",
						startDate: "Date",
						startTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
                        endDate: "Date",
                        endTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
						color : "string",
						createdOn: "date",
						modifiedOn: "date"
					}
	    		]
	    	
		
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find event Details of a single user",
	    "status": 404/500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/:eventId`, auth.isAuthorized, eventController.getSingleEventByEventId)

/**
	 * @api {get} /api/v1/events/:eventId Get single event by eventId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId eventId of event as parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event Details Found",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
						eventTitle: "string",
						creatorName: "string",
						creatorId: "string",
						userId: "string",
						startDate: "Date",
						startTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
                        endDate: "Date",
                        endTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
						color : "string",
						createdOn: "date",
						modifiedOn: "date"
					}
	    		]
	    	
		
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find event Details",
	    "status": 404/500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/count/all`, auth.isAuthorized, eventController.getCountOfAllEvents)

/**
	 * @api {get} /api/v1/events/count/all Get single event by eventId
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
	    "message": "Failed To count all event Details",
	    "status": 404/500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/count/:userId`, auth.isAuthorized, eventController.getAllEventsCountOfSingleUser)

/**
	 * @api {get} /api/v1/events/count/:userId Get single event by eventId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of a user as parameter
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
	    "message": "Failed To count all event Details of a single user",
	    "status": 404/500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/create`, auth.isAuthorized, eventController.createEvent)

/**
	 * @api {post} /api/v1/events/create Create event
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventTitle eventTitle of the event passed as a body parameter
	 * @apiParam {String} userId userId of the event passed as a body parameter
	 * @apiParam {Date} startDate startDate of the event passed as a body parameter
	 * @apiParam {Object} startTime startTime of the event passed as a body parameter
     * @apiParam {Date} endDate endDate of the event passed as a body parameter
	 * @apiParam {Object} endTime endTime of the event passed as a body parameter
	 * @apiParam {String} color color code in hexadecimal form(#000000) as body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event Created successfully",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
						eventTitle: "string",
						userId: "string",
						startDate: "Date",
						startTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
						endDate: "Date",
						endTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
                        createdOn: "date",
                        color : "string"
					}
	    		]
	    	}
		
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

    app.post(`${baseUrl}/:eventId/delete`, auth.isAuthorized, eventController.deleteEventByEventId)

/**
	 * @api {post} /api/v1/events/:eventId/delete Delete event by eventId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId eventId of the event passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event Deleted Successfully",
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

    app.put(`${baseUrl}/:eventId/edit`, auth.isAuthorized, eventController.editEventByEventId)

/**
	 * @api {put} /api/v1/events/:eventId/edit Edit blog by blogId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} eventId eventId of the event passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Event Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						eventId: "string",
						eventTitle: "string",
						userId: "string",
						startDate: "Date",
						startTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
						endDate: "Date",
						endTime: {
                            hour:"number",
                            minute:"number",
                            second:"number"
                        },
                        createdOn: "date",
                        color : "string",
                        modifiedOn : "date"
					}
					
	    		]
	    	
		
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

}