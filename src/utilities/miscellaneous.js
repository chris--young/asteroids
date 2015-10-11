/**
 * utilities/miscellaneous.js
 *
 * @description: Helper functions to check variable type
 * @author: Chris Young (mail@chrisyou.ng)
 */

const types = [
  "Object",
  "Number",
  "Array",
  "String",
  "Boolean",
  "Function"
];

/**
 * ensureType()
 * @description: Throws an exception if variable is unexpected type
 * @param: {*} variable
 * @param: {String|Object} type
 */
export function ensureType(variable, type) {
  if (!variable) throw new ReferenceError("Unexpected undefined value for 'variable'");
  if (!type) throw new ReferenceError("Unexpected undefined value for 'type'");

  let found = Object.prototype.toString.call(variable);

  if (~types.indexOf(type)) {
    if (found !== `[object ${type}]`)
      throw new TypeError(`Invalid type: expected '${type}' found '${found}'`);
  } else {
    if (variable instanceof type !== true)
      throw new TypeError(`Invalid type: expected instance of '${type}'`); 
  }
}

/**
 * ensureArrayType()
 * @description: Throws an errory if any element in array in unexpected type
 * @param: {Array} array
 * @param: {String|Object} type
 */
export function ensureArrayType(array, type) {
  ensureType(array, "Array");
  array.forEach((element) => ensureType(element, type));
}


