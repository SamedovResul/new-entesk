import React,{useEffect} from 'react'

const TimetableFunc = (
  // class
  classReducer,
  newTimetable,
  setCategory,
  Category,
  // student
  studentReducer,
  // teacher
  teacherReducer,
  // timetable
  timetableReducer,
  id,
  setId,
  setNewtimetable,
  // createTimetbale
  dispatch,
  UpdateTimetable,
  Array,
  CreateTimetable,
  setArray,
  Swal
  ) => {
  

  // class
  useEffect(() => {
    classReducer.map((Class) => {
      const { name, _id,class_Category } = Class;
      if (_id === newTimetable.class_Id) {
        newTimetable.class_Name = name;
        Category.length === 0 && setCategory(class_Category)
      }
    });

  }, [newTimetable]);


  // student
  useEffect(() => {
    studentReducer.map((student) => {
      const { name, _id } = student;
      if (_id === newTimetable.student_Id) {
        newTimetable.student_Name = name;
      }
    });
  }, [newTimetable]);



  // teacher
  useEffect(() => {
    teacherReducer.map((student) => {
      const { name, _id, email } = student;
      if (_id === newTimetable.teacher_Id) {
        newTimetable.teacher_Name = name;
        newTimetable.teacher_Email = email;
      }
    });
  }, [newTimetable]);


  // timetable
  useEffect(() => {
    timetableReducer.map((timetable) => {
      const { _id } = timetable;
      if (_id === id) {
        setNewtimetable(timetable);
      }
    });

  }, [id]);


  // create timatable
  const createTimetbale = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(UpdateTimetable(newTimetable, id));
      setNewtimetable({
        ...newTimetable,
        student_Name: "",
        student_Id: "",
        teacher_Name: "",
        class_Name: "",
        class_Id: "",
        class_Category:"",
        date: "",
      });
      setId('')
      setCategory([])
    } else {
      if ( Array.length > 0 && !newTimetable.class_Name &&  !newTimetable.student_Name && !newTimetable.date ) {
        dispatch(CreateTimetable(Array));
        setArray([])
        Swal.fire({
          color: "green",
          text: "Great",
        });
      } else {
        Swal.fire({
          color: "red",
          text: "please add time table",
        });
      }
    }
  };


  // 

  const addToArray = (e) =>{
      e.preventDefault();
      if(newTimetable.condition){
          setArray( (data) => {
            return data.map(
              (data,index) => index === newTimetable.index ? newTimetable : data )
          })
          setNewtimetable({
            ...newTimetable,
            student_Name: "",
            student_Id: "",
            class_Name: "",
            class_Id: "",
            category_name:"",
            date: "",
            index:'',
            condition:false
          })
        } else if( 
          newTimetable.student_Id &&
          newTimetable.teacher_Id &&
          newTimetable.class_Id &&
          newTimetable.date){
            setArray([...Array, newTimetable]);
            setNewtimetable({
              ...newTimetable,
              student_Name: "",
              student_Id: "",
              class_Name: "",
              class_Id: "",
              category_name:"",
              date: "",
            })
            setCategory([])
        } else{
          Swal.fire({
            color: "red",
            text: "please complete form",
          });
        }
    }

    let Name, value;
    const onChangeFunction = (e) => {
      e.preventDefault();
      Name = e.target.name;
      value = e.target.value;
      setNewtimetable({
        ...newTimetable,
        [Name]: value,
      });
      classReducer.map((data) =>{
        const {name,_id,class_Category} = data
        if(_id === value){
          setCategory(class_Category)
        }
      })
    };

  return {
    // create timatable
    createTimetbale,
    // create Array
    addToArray,
    onChangeFunction
  }
}

export default TimetableFunc