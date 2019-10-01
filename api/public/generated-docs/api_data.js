define({ "api": [
  {
    "type": "get",
    "url": "/api/appointment",
    "title": "Retrieve all appointments",
    "group": "Appointment",
    "description": "<p>Retrieve all the appointments for the current logged in doctor</p>",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "AppointmentsRetrieved",
            "description": "<p>Appointments retrieved from the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AppointmentsRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5d798ec109ecdc16df0f9973\",\n    \"date\": \"2019-09-13T00:00:00.000+00:00\",\n    \"slot\": 1,\n    \"doctor\": \"5d798dc63bc1121663d863cb\",\n    \"patient\": \"5d67108ec015f61ed413444d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401 Error": [
          {
            "group": "401 Error",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Response-Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"Invalid Usertype, only a doctor can make this request\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Appointment",
    "name": "GetApiAppointment"
  },
  {
    "type": "post",
    "url": "/api/appointment",
    "title": "Make an appointment",
    "group": "Appointment",
    "description": "<p>Make a new appointment with your doctor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>Date the appointment is to be made</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Slot",
            "description": "<p>Selection slot of the appointment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "doctorId",
            "description": "<p>Id of the doctor with whom appointment is to be made</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Appointment-Request-Example:",
          "content": "{\n \"Date\": \"2019-09-19T00:00:00.000+00:00\", \n \"Slot\": 3, \n \"doctorId\": \"5d73ba97c3756200048cbe85\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "AppointmentMade",
            "description": "<p>Appointmnet made with the doctor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AppointmentMade-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Appointment made\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "AppointmnetFilled",
            "description": "<p>Appointment Already filled</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AppointmentFilled-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"Appointment Already filled\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Appointment",
    "name": "PostApiAppointment"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/generated-docs/main.js",
    "group": "C__Users_Idhant_Desktop_Idhant_Deakin_2019_2019_T2_SIT209_Project_ABI_Care_SIT209_ABI_Care_api_public_generated_docs_main_js",
    "groupTitle": "C__Users_Idhant_Desktop_Idhant_Deakin_2019_2019_T2_SIT209_Project_ABI_Care_SIT209_ABI_Care_api_public_generated_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/devices",
    "title": "Retrieve all devices",
    "group": "Device",
    "description": "<p>Retrieve all the devices registered to the current user</p>",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "DevicesRetrieved",
            "description": "<p>All devices retrieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "DevicesRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    name: \"test-device\",\n    owner: \"5d73ba97c3756200048cbe85\",\n    type: \"HRM\",\n    data: \"[\n           0:\n               0: \"2019/02/08\"\n               1: \"1234\"\n           1:\n               0: \"2019/08/08\"\n               1: \"22\"\n           ]\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Could not found user in the database</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound-Response-Example:",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"Could not found user in the database\"  \n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Device",
    "name": "GetApiDevices"
  },
  {
    "type": "get",
    "url": "/api/devices/:deviceId",
    "title": "Retrieve a specific device",
    "group": "Device",
    "description": "<p>Retrieve a specific device for the current user from the database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>Id of the device to be retrieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Patient-Request-Example:",
          "content": "{\n  \"deviceId\": \"5d73ba97c3756200048cbe85\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "DeviceRetrieved",
            "description": "<p>Device retrieved from the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "DeviceRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    name: \"test-device\",\n    owner: \"5d73ba97c3756200048cbe85\",\n    type: \"HRM\",\n    data: \"[\n           0:\n               0: \"2019/02/08\"\n               1: \"1234\"\n           1:\n               0: \"2019/08/08\"\n               1: \"22\"\n           ]\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "UnknownDevice",
            "description": "<p>Device doesn`t exist in the database</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UnknownDevice-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"Device doesn`t exist in the database\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Device",
    "name": "GetApiDevicesDeviceid"
  },
  {
    "type": "post",
    "url": "/api/devices",
    "title": "Create a new Device",
    "group": "Device",
    "description": "<p>Create a new device out of the options for the current user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DeviceType",
            "description": "<p>Type of the device out of the supported options</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Patient-Request-Example:",
          "content": "{\n  \"User\": \"test\",\n  \"DeviceType\": \"BPM\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "DeviceCreated",
            "description": "<p>New Device Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "DeviceCreated-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"newDevice\": \"newDevice\",\n    \"success\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User doesn`t exist in the database</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"Cannot find the user\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Device",
    "name": "PostApiDevices"
  },
  {
    "type": "get",
    "url": "/api/history",
    "title": "Retrieve medical history",
    "group": "MedicalHistory",
    "description": "<p>Retrieve medical history for the current logged-in user</p>",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "HistoryRetrieved",
            "description": "<p>Medical history retrieved from the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HistoryRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\":\"5d820452211349a8d1f5c0cf\",\n    \"details\":\"Test details\",\n    \"notes\":\"test notes\",\n    \"doctor\": \"5d798dc63bc1121663d863cb\",\n    \"patient\": \"5d67108ec015f61ed413444d\",\n    \"date\":\"18/09/2019\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "MedicalHistory",
    "name": "GetApiHistory"
  },
  {
    "type": "post",
    "url": "/api/history",
    "title": "Store new medical history",
    "group": "MedicalHistory",
    "description": "<p>Create a new medical record for the selected patient.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Details",
            "description": "<p>Brief detail about the new medical record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Notes",
            "description": "<p>Precise notes about the new medical record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>Date of creation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patientId",
            "description": "<p>Id of the patient the medical record is being created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MedicalHistory-Request-Example:",
          "content": "{\n \"Details\": \"Test Details\",\n \"Notes\": \"Lorem Ipsum\",\n \"Date\": \"DD/MM/YYYY\", \n \"patientId\": \"5d73ba97c3756200048cbe85\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "MedicalHistoryCreated",
            "description": "<p>New medical data is created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MedicalHistoryCreated-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    newHistory: \"newHistory\",\n    success: \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "PatientNotFound",
            "description": "<p>No such patient exists in the database.</p>"
          }
        ],
        "401 Error": [
          {
            "group": "401 Error",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized.</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PatientNotFound-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"No such patient exists in the database\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Response-Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"Invalid Usertype, only a doctor can make this request\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "MedicalHistory",
    "name": "PostApiHistory"
  },
  {
    "type": "get",
    "url": "/api/doctors",
    "title": "Retrieve all doctors",
    "group": "User",
    "description": "<p>Retrieve all the doctors registered in the database</p>",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "DoctorsRetrieved",
            "description": "<p>All Doctors retrieved from the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "DoctorsRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "User",
    "name": "GetApiDoctors"
  },
  {
    "type": "get",
    "url": "/api/patients",
    "title": "Retrieve all paitents",
    "group": "User",
    "description": "<p>Retrieve all the paitents registered to the current logged-in doctor</p>",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "PatientsRetrieved",
            "description": "<p>Patients retrieved from the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PatientsRetrieved-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401 Error": [
          {
            "group": "401 Error",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Response-Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"Device doesn`t exist in the database\"\n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "User",
    "name": "GetApiPatients"
  },
  {
    "type": "post",
    "url": "/api/authenticate",
    "title": "Authenticate the user",
    "group": "User",
    "description": "<p>Authenticates the user and redirects to the login page if successful</p>",
    "sampleRequest": [
      {
        "url": "https://abi-care-api.herokuapp.com/api/authenticate"
      }
    ],
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "User",
    "name": "PostApiAuthenticate"
  },
  {
    "type": "post",
    "url": "/api/registration",
    "title": "Register a new user",
    "group": "User",
    "description": "<p>Registers a new user and redirects to the login page if successful</p>",
    "sampleRequest": [
      {
        "url": "https://abi-care-api.herokuapp.com/api/registration"
      }
    ],
    "parameter": {
      "fields": {
        "patient": [
          {
            "group": "patient",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "patient",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "patient",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "Password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "patient",
            "type": "String",
            "optional": false,
            "field": "Usertype",
            "description": "<p>Usertype of the user</p>"
          }
        ],
        "doctor": [
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "Password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "Usertype",
            "description": "<p>Usertype of the user</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "StreetAddress",
            "description": "<p>Address of the user</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>City the user resides in</p>"
          },
          {
            "group": "doctor",
            "type": "String",
            "optional": false,
            "field": "State",
            "description": "<p>State the user resides in</p>"
          },
          {
            "group": "doctor",
            "type": "int",
            "optional": false,
            "field": "Postcode",
            "description": "<p>Postcode of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Patient-Request-Example:",
          "content": "{\n  \"User\": \"test\",\n  \"Email: test@email.com\",\n  \"Password\": \"test123\",\n  \"Usertype\": \"patient\"\n}",
          "type": "json"
        },
        {
          "title": "Doctor-Request-Example:",
          "content": "{\n  \"User\": \"test\",\n  \"Email: test@email.com\",\n  \"Password\": \"test123\",\n  \"Usertype\": \"doctor\",\n  \"StreetAdress\": \"123 Street Name\",\n  \"City\": \"City Name\",\n  \"State\": \"State Name\",\n  \"Postcode\": \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "PatientCreated",
            "description": "<p>New Patient Created</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "DoctorCreated",
            "description": "<p>New Doctor Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Patient-Created-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": \"true\",\n    \"message\": \"Created new Patient\"\n}",
          "type": "json"
        },
        {
          "title": "Doctor-Created-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": \"true\",\n    \"message\": \"Created new Doctor\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Error": [
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "IncompleteInformation",
            "description": "<p>Some information is incomplete</p>"
          },
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "IncorrectInformation",
            "description": "<p>Given information is incorrect</p>"
          },
          {
            "group": "400 Error",
            "type": "String",
            "optional": false,
            "field": "EmailAlreadyRegistered",
            "description": "<p>Given Email is already registered</p>"
          }
        ],
        "500 Error": [
          {
            "group": "500 Error",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong serverside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "IncompleteInformation-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"Incomplete information\"  \n}",
          "type": "json"
        },
        {
          "title": "IncorrectInformation-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"Information incorrect\"  \n}",
          "type": "json"
        },
        {
          "title": "EmailAlreadyRegistered-Response-Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"This email is already registered\"  \n}",
          "type": "json"
        },
        {
          "title": "ServerError-Response-Example:",
          "content": "HTTP/1.1 500 Internal Error\n{\n    \"Something went wrong serverside\"  \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "User",
    "name": "PostApiRegistration"
  }
] });