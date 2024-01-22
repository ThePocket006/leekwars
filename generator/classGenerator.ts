// classGenerator.js

class StringUtil {
    static toCamelCase(input) {
        const camelCaseString = input.replace(/[-_ ](.)/g, (_, char) => char.toUpperCase());
        return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
    }

    static isJSON(str) {
        try {
            return JSON.parse(str) && !!str;
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param str string
     * @param find string|string[]|RegExp|RegExp[]
     * @param replace string|string[]|RegExp|RegExp[]
     */
    static replaceArray(str = '', find, replace) {
        if (typeof find === 'string') {
            find = [find]
        }

        if (typeof replace === 'string') {
            replace = [replace]
        }

        for (let i = 0; i < find.length; i++) {
            str = str.replace((find[i] instanceof RegExp) ? find[i] : (new RegExp(find[i], "g")), replace[i]);
        }
        return str;
    }
}

function generateClassFromJson(jsonObject, className = 'GeneratedClass', isSub = false) {
    if (Array.isArray(jsonObject)) {
        jsonObject = jsonObject ? jsonObject[0] : null
    }

    const properties = Object.keys(jsonObject).map(key => `${StringUtil.toCamelCase(key)}: ${getTypeScriptType(jsonObject[key])};`).join('\n  ');

    className = isSub ? '' : `class ${className}`
    return `${className} {
  ${properties}
}`;
}

function getTypeScriptType(value) {
    if (Array.isArray(value)) {
        const arrayItemType = value.length > 0 ? getTypeScriptType(value[0]) : 'any';
        return `${arrayItemType}[]`;
    }

    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
            return typeof value;
        case 'object':
            if (value === null) {
                return 'any';
            }
            if (value instanceof Array) {
                const className = 'generateClass';
                return `${generateClassFromJson(value[0], className, true)}[]`;
            }
            return generateClassFromJson(value, undefined, true);
        default:
            return 'any';
    }
}

module.exports = {
    generateClassFromJson,
    StringUtil,
};
