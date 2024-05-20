{
    // constraints =>force kora
    const addCourseToStudent =<T extends {id:number;name:string;email:string}> (student:T)=>{
        const course = 'Next level web development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({id:222,name:"mr x",email:"x@gmail.com",devType:'NLWD'})
    const student2 = addCourseToStudent({id:444,name:"mr y",email:"y@gmail.com",hasWatch:'Apple watch'})
    const student3 = addCourseToStudent({id:44,name:"Mr z",email:"asib@gmail.com",emni:"emni"})
}