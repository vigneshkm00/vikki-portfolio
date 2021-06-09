export default {
    name :"project",
    title:"Project",
    type: "document",
    fields:[
        {
            name:"title",
            type:"string",
        },
        {
            name:"date",
            type:"datetime",

        },
        {
            name:"place",
            type:"string",
        },
        {
            name:"description",
            type:"text",
        },
        {
            name:"projectType",
            title:"Project type",
            type:"string",
            options:{
                list:[
                    {value:"personal", title:"Personal"},
                    {value:"client", title:"Client"},
                    {value:"college", title:"College"},
                ],    
                },
            },
        {
                name:"projectDomain",
                title:"Project domain",
                type:"string",
                options:{
                    list:[
                        {value:"androidapp",title:"Android Application"},
                        {value:"iosapp",title:"IOs Application"},
                        {value:"webapp",title:"Web Application"},
                        {value:"website",title:"Website"},
                    ],
                },

        },
        {
            name:"link",
            type:"url",
        },
        {
            name:"tags",
            type:"array",
            of:[
                {
                    type:"string",
                },
            ],
            options:{
                layout:"tags",
            },
        },
    ],

};