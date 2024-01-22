const fs = require("fs");
const yaml = require("js-yaml");
const _ = require("lodash");
const {generateClassFromJson, StringUtil} = require('./classGenerator.ts');


const schemaType = ["array", "boolean", "integer", "number", "object", "string"];
// Assuming your data has a valid structure similar to this
const apiData = require('../public/api.json');

const openApiConfig = {
    openapi: "3.0.3",
    info: {
        version: "1.0.0",
        title: "Leekwars API",
    },
    servers: [
        {
            url: "https://leekwars.com/api",
            description: "Leekwars API server",
        },
    ],
    tags: [], // Add an empty array for tags
    paths: {},
    components: {
        schemas: {},
        securitySchemes: {
            BearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
    },
    // security: [
    //     {
    //         BearerAuth: [],
    //     },
    // ],
};

apiData.forEach((endpoint) => {
    const path = `/${endpoint.module}/${endpoint.function}`;

    if (typeof endpoint.example === 'string' && StringUtil.isJSON(endpoint.example)) {
        endpoint.example = JSON.parse(endpoint.example);
    }

    console.log('endpoint', endpoint);

    openApiConfig.paths[path] = {};
    openApiConfig.paths[path][endpoint.method] = {
        summary: `${endpoint.module} - ${endpoint.function}`,
        security: (endpoint.auth === true) ? [{BearerAuth: []}] : [],
        responses: {
            "200": {
                description: "Successful operation",
                content: {
                    "application/json": {
                        schema: {
                            type: schemaType.includes(typeof endpoint.example) ? typeof endpoint.example : 'object',
                            properties: (() => {
                                if (endpoint.example) {
                                    return {}
                                    // const jsonObject = endpoint.example;
                                    // const className = StringUtil.toCamelCase(`${endpoint.module}_${endpoint.function}_response`);
                                    // openApiConfig.components.schemas[className] = generateClassFromJson(jsonObject, className);
                                    // return {$ref: `#/components/schemas/${className}`};
                                }
                                return undefined;
                            })(),
                        },
                    },
                },
            },
        },
        tags: [StringUtil.toCamelCase(endpoint.module)], // Add the module as a tag
    };

    // Add parameters to the OpenAPI definition if available
    if (endpoint.parameters && endpoint.parameters.length > 0) {
        const listOfNames = []
        openApiConfig.paths[path][endpoint.method].parameters = endpoint.parameters.map(
            (param, index) => {
                if ((endpoint.parameters_types && endpoint.parameters_types[index] && endpoint.parameters_types[index] === "file")) {
                    listOfNames.push(param)
                    return null
                } else {
                    return {
                        name: param,
                        // in: endpoint.parameters_types && endpoint.parameters_types[index] === "file" ? "formData" : "query",
                        in: "query",
                        schema: (() => {
                            const schema = {
                                type: endpoint.parameters_types && endpoint.parameters_types[index] ? endpoint.parameters_types[index] : 'string',
                            }

                            if (!schemaType.includes(schema.type)) {
                                schema.type = StringUtil.replaceArray(schema.type, ['json'], ['string'])
                            }else{
                                schema.type = 'object'
                            }

                            if (schema.type === 'array') {
                                schema['items'] = {}
                            }

                            return schema
                        })(),
                        required: true,
                    }
                }
            }
        ).filter(v => v !== null);

        // Add requestBody for files if needed
        if (endpoint.method === "post") {
            openApiConfig.paths[path][endpoint.method].requestBody = {
                content: (() => {
                    const index = _.findIndex(endpoint.parameters_types, (v) => v === 'file');
                    const contentObj = {};
                    let contentType = "application/x-www-form-urlencoded; charset=UTF-8";

                    if (index >= 0) {
                        contentType = "multipart/form-data";
                    }

                    contentObj[contentType] = {
                        schema: {
                            type: "object",
                            properties: {
                                // file: {
                                //   type: "string",
                                //   format: "binary",
                                // },
                            },
                        },
                    };

                    listOfNames.forEach(name => {
                        contentObj[contentType].schema.properties[name] = {
                            type: "string",
                            format: "binary",
                        }
                    })

                    return contentObj;
                })(),
            };
        }
    }

    // Add the module as a tag
    if (!openApiConfig.tags.some((tag) => tag.name === StringUtil.toCamelCase(endpoint.module))) {
        openApiConfig.tags.push({name: StringUtil.toCamelCase(endpoint.module)});
    }
});

// console.log('openApiConfig.components.schemas', openApiConfig.components.schemas)

// fs.writeFileSync("generator/swaggerClass.ts", [
//     _.map(openApiConfig.components.schemas, v => v).join("\n\n"),
//     ["const listOfClass = {", Object.keys(openApiConfig.components.schemas).map(v => `${v}: ${v}`).join(",\n"), "}"].join("\n"),
//     `
// module.exports = {
//     listOfClass,
// };
//     `
// ].join("\n\n"));
fs.writeFileSync("swagger.yaml", yaml.dump(openApiConfig));
