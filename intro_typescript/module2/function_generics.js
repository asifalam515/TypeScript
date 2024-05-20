"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArraywithGeneric = (param) => {
        return [param];
    };
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const addCourseToStudent = (student) => {
        const course = 'Next level web development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const result1 = createArray('Bangladesh');
    const resultGeneric = createArraywithGeneric(true);
    const resGenericObj = createArraywithGeneric({ id: 222, name: 'Mr Pashan' });
    const resultTuple = createArrayWithTuple("Bangladesh", 222);
    const student1 = addCourseToStudent({ name: "mr x", email: "x@gmail.com", devType: 'NLWD' });
    const student2 = addCourseToStudent({ name: "mr y", email: "y@gmail.com", hasWatch: 'Apple watch' });
}
