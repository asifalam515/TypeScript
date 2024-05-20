{
    const createArray=(param:string):string[] =>{
        return [param]
    }
    
    const createArraywithGeneric =<T>(param:T):T[] =>{
        return [param]
    }
    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }

    const addCourseToStudent =<T> (student:T)=>{
        const course = 'Next level web development'
        return {
            ...student,
            course
        }
    }


    type User ={id:number;name:string}
    const result1 =createArray('Bangladesh')
    const resultGeneric =createArraywithGeneric<boolean>(true)
    const resGenericObj =createArraywithGeneric<User>({id:222,name:'Mr Pashan'})
    const resultTuple = createArrayWithTuple<string,number>("Bangladesh",222);
    const student1 = addCourseToStudent({name:"mr x",email:"x@gmail.com",devType:'NLWD'})
    const student2 = addCourseToStudent({name:"mr y",email:"y@gmail.com",hasWatch:'Apple watch'})
    


}
