define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/events/all",
    "title": "Get all events",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Events Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n                        eventTitle: \"string\",\n                        userId: \"string\",\n                        startDate : \"Date\",\n                        startTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        endDate: : \"Date\",\n                        endTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        color : boolean,\n                        createdOn:  : \"Date\",\n                        modifiedOn : \"Date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Event Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/events/all/:userId",
    "title": "Get all events of a single user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of user as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Events Details of a single user Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n                        eventTitle: \"string\",\n                        userId: \"string\",\n                        startDate : \"Date\",\n                        startTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        endDate: : \"Date\",\n                        endTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        color : boolean,\n                        createdOn:  : \"Date\",\n                        modifiedOn : \"Date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Event Details of user\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsAllUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/events/count/all",
    "title": "Get count of all events",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Count retrieved\",\n\t    \"status\": 200,\n\t    \"data\": \"Number\"\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to get count\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsCountAll"
  },
  {
    "type": "get",
    "url": "/api/v1/events/count/:userId",
    "title": "Get count of all events of single user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of a user as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Count retrieved\",\n\t    \"status\": 200,\n\t    \"data\": \"Number\"\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to get count\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsCountUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/events/create",
    "title": "Create an event",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventTitle",
            "description": "<p>eventTitle of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the event passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color code in hexadecimal form(#000000) as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n                        eventTitle: \"string\",\n                        userId: \"string\",\n                        startDate : \"Date\",\n                        startTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        endDate: : \"Date\",\n                        endTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        color : boolean,\n                        createdOn:  : \"Date\",\n                        modifiedOn : \"Date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To create event\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsCreate"
  },
  {
    "type": "get",
    "url": "/api/v1/events/:eventId",
    "title": "Get all events of a single user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>eventId of user as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event Details\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n                        eventTitle: \"string\",\n                        userId: \"string\",\n                        startDate : \"Date\",\n                        startTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        endDate: : \"Date\",\n                        endTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        color : boolean,\n                        createdOn:  : \"Date\",\n                        modifiedOn : \"Date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Event Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "GetApiV1EventsEventid"
  },
  {
    "type": "post",
    "url": "/api/v1/events/:eventId/delete",
    "title": "Delete event",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>The eventId passed as URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Deleted successfull.\",\n\t    \"status\": 200,\n\t    \"data\": null\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured while deleting event.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "PostApiV1EventsEventidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/events/:eventID/edit",
    "title": "Edit an event",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>eventId of the event passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event edited successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n                        eventTitle: \"string\",\n                        userId: \"string\",\n                        startDate : \"Date\",\n                        startTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        endDate: : \"Date\",\n                        endTime: {\n                                    hour:\"number\",\n                                    minute:\"number\",\n                                    second:\"number\"\n                                },\n                        color : boolean,\n                        createdOn:  : \"Date\",\n                        modifiedOn : \"Date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to edit event\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\eventRoutes.js",
    "name": "PostApiV1EventsEventidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all",
    "title": "Get all users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All User Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n                        firstName: \"string\",\n                        lastName: \"string\",\n                        fullName : \"string\",\n                        country: \"string\",\n                        mobileNumber: \"string\",\n                        email: \"Date\",\n                        isAdmin: boolean,\n                        uniqueUserName : \"string\",\n                        createdOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find User Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserAll"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all/admin",
    "title": "Get all Admin users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Admin User Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n                        firstName: \"string\",\n                        lastName: \"string\",\n                        fullName : \"string\",\n                        country: \"string\",\n                        mobileNumber: \"string\",\n                        email: \"Date\",\n                        isAdmin: boolean,\n                        uniqueUserName : \"string\",\n                        createdOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Admin User Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserAllAdmin"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all/normal",
    "title": "Get all Normal users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Normal User Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n                        firstName: \"string\",\n                        lastName: \"string\",\n                        fullName : \"string\",\n                        country: \"string\",\n                        mobileNumber: \"string\",\n                        email: \"Date\",\n                        isAdmin: boolean,\n                        uniqueUserName : \"string\",\n                        createdOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Normal User Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserAllNormal"
  },
  {
    "type": "get",
    "url": "/api/v1/user/count/admin",
    "title": "Get count of all Admin users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Admin Users count Found\",\n\t    \"status\": 200,\n\t    \"data\": \"number\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To get count of all Admin Users\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserCountAdmin"
  },
  {
    "type": "get",
    "url": "/api/v1/user/count/normal",
    "title": "Get count of all Normal users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Normal Users count Found\",\n\t    \"status\": 200,\n\t    \"data\": \"number\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To get count of all Normal Users\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserCountNormal"
  },
  {
    "type": "get",
    "url": "/api/v1/user/:userId",
    "title": "Get a single user by userId",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\tuserId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    fullName : \"string\",\n                    country: \"string\",\n                    mobileNumber: \"string\",\n                    email: \"Date\",\n                    isAdmin: boolean,\n                    uniqueUserName : \"string\",\n                    createdOn: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "GetApiV1UserUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "Login user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Login successfull.\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    authToken: \"string\",\n                    userId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    fullName : \"string\",\n                    country: \"string\",\n                    mobileNumber: \"string\",\n                    email: \"Date\",\n                    isAdmin: boolean,\n                    uniqueUserName : \"string\",\n                    createdOn: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/user/logout",
    "title": "Logout user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Logout successfull.\",\n\t    \"status\": 200,\n\t    \"data\": null\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/user/recoverymail",
    "title": "Recoverymail to reset password",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Email sent successfull.\",\n\t    \"status\": 200,\n\t    \"data\": \"Please check your email\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserRecoverymail"
  },
  {
    "type": "post",
    "url": "/api/v1/user/resetpassword/:recoveryToken",
    "title": "Reset password",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recoveryToken",
            "description": "<p>as URl parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Password set successfully\",\n\t    \"status\": 200,\n\t    \"data\": \"Password set successfully\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserResetpasswordRecoverytoken"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "Singnup user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telCode",
            "description": "<p>telCode of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>isAdmin of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uniqueUserName",
            "description": "<p>uniqueUserName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Signup successfull.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\tuserId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    fullName : \"string\",\n                    country: \"string\",\n                    mobileNumber: \"string\",\n                    email: \"Date\",\n                    isAdmin: boolean,\n                    uniqueUserName : \"string\",\n                    createdOn: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/user/:userId/delete",
    "title": "Delete user",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The UserId passed as URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Deleted successfull.\",\n\t    \"status\": 200,\n\t    \"data\": null\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "group": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "groupTitle": "C:\\Users\\HimRamesh\\Desktop\\edWisor\\FinalProject\\MeetingOrganizer\\app\\routes\\userRoutes.js",
    "name": "PostApiV1UserUseridDelete"
  }
] });
