/*

// no json 
#DCECOMP 


// no closing bracket
#DCECOMP {
    "class": "ClassAndNumberProperty",
    "properties": [
        {
            "name": "property1",
            "type": "number"
        }
    ]

// valid json, but a comment in the middle
#DCECOMP {
    "class": "ClassAndNumberProperty",
    "properties": [
        {
            "name": "property1",
            some comment that is not permitted
            "type": "number"
        }
    ]
}

// valid json, but a comment in the end of a line
#DCECOMP {
    "class": "ClassAndNumberProperty",
    "properties": [
        {
            "name": "property1",  some comment that is not permitted
            "type": "number"
        }
    ]
}

*/