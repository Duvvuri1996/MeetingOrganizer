define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "Login User",
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
          "content": "{\n       \t    \"error\": false,\n       \t    \"message\": \"User Login successfull\",\n       \t    \"status\": 200,\n       \t    \"data\": [\n                           {   \n                               authToken : \"string\",\n                               userDetails:{\n                               userId: \"string\",\n       \t\t\t\t\t\tfirstName: \"string\",\n                               lastName: \"string\",\n                               fullName : \"string\",\n       \t\t\t\t\t\tcountry: \"string\",\n       \t\t\t\t\t\tmobileNumber: \"number\",\n       \t\t\t\t\t\temail: \"string\",\n                               isAdmin: boolean,\n       \t\t\t\t\t\tuniqueUserName : \"string\",\n       \t\t\t\t\t\tcreatedOn: \"date\"\n                               }\n       \t\t\t\t\t\t\n       \t\t\t\t\t}\n       \t    \t\t]\n       \t    \t\n       \t\t\n       \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \t    \"error\": true,\n        \t    \"message\": \"Failed to Login user\",\n        \t    \"status\": 404/500,\n        \t    \"data\": null\n        \t   }",
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
    "title": "logout User",
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
          "content": "{\n           \t    \"error\": false,\n           \t    \"message\": \"User Logged out successfully\",\n           \t    \"status\": 200,\n           \t    \"data\": null\n           \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \t    \"error\": true,\n            \t    \"message\": \"Failed Logout user\",\n            \t    \"status\": 404/500,\n            \t    \"data\": null\n            \t   }",
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
    "title": "Generate email to reset password by user",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"Email sent successfully to the user\",\n   \t    \"status\": 200,\n   \t    \"data\": \"Please check your email for the link to reset password\"\n   \t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Error Occured while sending email.,\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
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
    "title": "To reset password",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"Password Reset successfull\",\n   \t    \"status\": 200,\n   \t    \"data\": \"Please Login to continue\"\n   \t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Error Occured while reset password.,\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
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
    "url": "/api/v1/events/create",
    "title": "Create event",
    "version": "0.0.1",
    "group": "create",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n\t\t\t\t\t\teventTitle: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tstartDate: \"Date\",\n\t\t\t\t\t\tstartTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n\t\t\t\t\t\tendDate: \"Date\",\n\t\t\t\t\t\tendTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n                        createdOn: \"date\",\n                        color : \"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "create",
    "name": "PostApiV1EventsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "signup User",
    "version": "0.0.1",
    "group": "create",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"User signup successfull\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tuserId: \"string\",\n   \t\t\t\t\t\tfirstName: \"string\",\n                           lastName: \"string\",\n                           fullName : \"string\",\n   \t\t\t\t\t\tcountry: \"string\",\n   \t\t\t\t\t\tmobileNumber: \"number\",\n   \t\t\t\t\t\temail: \"string\",\n                           isAdmin: boolean,\n   \t\t\t\t\t\tuniqueUserName : \"string\",\n   \t\t\t\t\t\tcreatedOn: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t\n   \t\t\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed to signup user\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "create",
    "name": "PostApiV1UserSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/events/:eventId/delete",
    "title": "Delete event by eventId",
    "version": "0.0.1",
    "group": "delete",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1EventsEventidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/user/:userId/delete",
    "title": "Delete user by userId",
    "version": "0.0.1",
    "group": "delete",
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
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"User Deleted Successfully\",\n   \t    \"status\": 200,\n   \t    \"data\": null\n   \t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Error Occured.,\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1UserUseridDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/events/:eventId/edit",
    "title": "Edit blog by blogId",
    "version": "0.0.1",
    "group": "edit",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n\t\t\t\t\t\teventTitle: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tstartDate: \"Date\",\n\t\t\t\t\t\tstartTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n\t\t\t\t\t\tendDate: \"Date\",\n\t\t\t\t\t\tendTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n                        createdOn: \"date\",\n                        color : \"string\",\n                        modifiedOn : \"date\"\n\t\t\t\t\t}\n\t\t\t\t\t\n\t    \t\t]\n\t    \t\n\t\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1EventsEventidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/events/all",
    "title": "Get all events",
    "version": "0.0.1",
    "group": "read",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Event Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n\t\t\t\t\t\teventTitle: \"string\",\n\t\t\t\t\t\tcreatorName: \"string\",\n\t\t\t\t\t\tcreatorId: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tstartDate: \"Date\",\n\t\t\t\t\t\tstartTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n                        endDate: \"Date\",\n                        endTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n\t\t\t\t\t\tcolor : \"string\",\n\t\t\t\t\t\tcreatedOn: \"date\",\n\t\t\t\t\t\tmodifiedOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find event Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/events/all/:userId",
    "title": "Get all events of single user",
    "version": "0.0.1",
    "group": "read",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Event Details of a single user Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n\t\t\t\t\t\teventTitle: \"string\",\n\t\t\t\t\t\tcreatorName: \"string\",\n\t\t\t\t\t\tcreatorId: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tstartDate: \"Date\",\n\t\t\t\t\t\tstartTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n                        endDate: \"Date\",\n                        endTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n\t\t\t\t\t\tcolor : \"string\",\n\t\t\t\t\t\tcreatedOn: \"date\",\n\t\t\t\t\t\tmodifiedOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find event Details of a single user\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsAllUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/events/count/admin",
    "title": "Get all admin users count",
    "version": "0.0.1",
    "group": "read",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Count retrieved\",\n\t    \"status\": 200,\n\t\t\"data\": \"number\"\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t    \"error\": true,\n\t    \"message\": \"Failed To count all admin users count\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsCountAdmin"
  },
  {
    "type": "get",
    "url": "/api/v1/events/count/all",
    "title": "Get single event by eventId",
    "version": "0.0.1",
    "group": "read",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Count retrieved\",\n\t    \"status\": 200,\n\t\t\"data\": \"number\"\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t    \"error\": true,\n\t    \"message\": \"Failed To count all event Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsCountAll"
  },
  {
    "type": "get",
    "url": "/api/v1/events/count/:userId",
    "title": "Get single event by eventId",
    "version": "0.0.1",
    "group": "read",
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
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Count retrieved\",\n\t    \"status\": 200,\n\t\t\"data\": \"number\"\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t    \"error\": true,\n\t    \"message\": \"Failed To count all event Details of a single user\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsCountUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/events/:eventId",
    "title": "Get single event by eventId",
    "version": "0.0.1",
    "group": "read",
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
            "description": "<p>eventId of event as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Event Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\teventId: \"string\",\n\t\t\t\t\t\teventTitle: \"string\",\n\t\t\t\t\t\tcreatorName: \"string\",\n\t\t\t\t\t\tcreatorId: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tstartDate: \"Date\",\n\t\t\t\t\t\tstartTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n                        endDate: \"Date\",\n                        endTime: {\n                            hour:\"number\",\n                            minute:\"number\",\n                            second:\"number\"\n                        },\n\t\t\t\t\t\tcolor : \"string\",\n\t\t\t\t\t\tcreatedOn: \"date\",\n\t\t\t\t\t\tmodifiedOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find event Details\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/eventRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1EventsEventid"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all",
    "title": "Get all users",
    "version": "0.0.1",
    "group": "read",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Users Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tuserId: \"string\",\n   \t\t\t\t\t\tfirstName: \"string\",\n                           lastName: \"string\",\n                           fullName : \"string\",\n   \t\t\t\t\t\tcountry: \"string\",\n   \t\t\t\t\t\tmobileNumber: \"string\",\n   \t\t\t\t\t\temail: \"Date\",\n                           isAdmin: boolean,\n   \t\t\t\t\t\tuniqueUserName : \"string\",\n   \t\t\t\t\t\tcreatedOn: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t\n   \t\t\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find users Details\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1UserAll"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all/admin",
    "title": "Get all admin users",
    "version": "0.0.1",
    "group": "read",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Admin Users Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tuserId: \"string\",\n   \t\t\t\t\t\tfirstName: \"string\",\n                           lastName: \"string\",\n                           fullName : \"string\",\n   \t\t\t\t\t\tcountry: \"string\",\n   \t\t\t\t\t\tmobileNumber: \"number\",\n   \t\t\t\t\t\temail: \"string\",\n                           isAdmin: boolean,\n   \t\t\t\t\t\tuniqueUserName : \"string\",\n   \t\t\t\t\t\tcreatedOn: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t\n   \t\t\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Admin users Details\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1UserAllAdmin"
  },
  {
    "type": "get",
    "url": "/api/v1/user/all/normal",
    "title": "Get all normal users",
    "version": "0.0.1",
    "group": "read",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Normal Users Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tuserId: \"string\",\n   \t\t\t\t\t\tfirstName: \"string\",\n                           lastName: \"string\",\n                           fullName : \"string\",\n   \t\t\t\t\t\tcountry: \"string\",\n   \t\t\t\t\t\tmobileNumber: \"number\",\n   \t\t\t\t\t\temail: \"string\",\n                           isAdmin: boolean,\n   \t\t\t\t\t\tuniqueUserName : \"string\",\n   \t\t\t\t\t\tcreatedOn: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t\n   \t\t\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Normal users Details\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1UserAllNormal"
  },
  {
    "type": "get",
    "url": "/api/v1/user/count/:normal",
    "title": "Get all normal users count",
    "version": "0.0.1",
    "group": "read",
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
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"Count retrieved\",\n   \t    \"status\": 200,\n   \t\t\"data\": \"number\"\n   \t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To count all normal users count\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1UserCountNormal"
  },
  {
    "type": "get",
    "url": "/api/v1/user/:userId",
    "title": "Get User by userId",
    "version": "0.0.1",
    "group": "read",
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
            "description": "<p>userId of event as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"User Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tuserId: \"string\",\n   \t\t\t\t\t\tfirstName: \"string\",\n                           lastName: \"string\",\n                           fullName : \"string\",\n   \t\t\t\t\t\tcountry: \"string\",\n   \t\t\t\t\t\tmobileNumber: \"number\",\n   \t\t\t\t\t\temail: \"string\",\n                           isAdmin: boolean,\n   \t\t\t\t\t\tuniqueUserName : \"string\",\n   \t\t\t\t\t\tcreatedOn: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t\n   \t\t\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find user Details\",\n    \t    \"status\": 404/500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer/app/routes/userRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1UserUserid"
  }
] });
