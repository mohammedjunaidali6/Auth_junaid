import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { getBlogs, addBlog, deleteBlog, editBlog } from '../../redux/actions/blogs';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './blog.css'


function Blog() {

  const initialState = { author : "" , text : "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);
  console.log(blogs);

  // const editHandler = () => {
  //   dispatch(editBlog());
  // }

  const deleteHandler = (data) => {
    dispatch(deleteBlog({ id: data }))
    .then(res=>{
      console.log(res);
      setShouldCall(!shouldCall);
    })
  }

  useEffect(()=>{
    dispatch(getBlogs())
  },[shouldCall])

  const handleEditSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    dispatch(editBlog(formData, editId))
    .then(res=>{
      console.log(res);
      setShouldCall(!shouldCall);
      setShow(false);
      setFormData(initialState);
    })
  }

  const handleAddSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    dispatch(addBlog(formData,blogs))
    .then(res=>{
      setShouldCall(!shouldCall);
     console.log(res)
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, author, text) => {
    setEditId(id)
    setFormData({
      author : author,
      text : text
    })
    setShow(true);
  }

  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (author, text) => {
    setFormData({
      author : author,
      text : text
    })
    setShows(true);
  }
  return(
    <div className="Apps">
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label>Author Name</label>
          <InputGroup className="mb-3">
            <FormControl
              name="author"
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={formData.author}
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  [e.target.name] : e.target.value,
                })
              }}
           required 
            />
          </InputGroup>

          <label>Text</label>
          <InputGroup className="mb-3">
            <FormControl
              name="text"
              placeholder="Enter Blog Here"
              type="text"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={formData.text}
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  [e.target.name] : e.target.value,
                })
              }}
           required
            />
          </InputGroup>
             <Button
               className="sub"
               type="submit"
              >
                Submit
              </Button>
              <Button
                className="cancel" 
                onClick={handleClose}
               >
                 Cancel
               </Button>
               </div>
          </form>
        </Modal.Body>
      </Modal>

      <div>
        <Modal show={shows} onHide={handleCloses}  >
        <Modal.Header>
          <Modal.Title>Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleAddSubmit}>
        <div className="form-group">
          <label>Author Name</label>
          <InputGroup className="mb-3">
            <FormControl
              name="author"
              placeholder="Author Name"
              type="text"
              className=""
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  [e.target.name] : e.target.value,
                })
              }}
           required
            />
          </InputGroup>

          <label>Text</label>
          <InputGroup className="mb-3">
            <FormControl
              name="text"
              placeholder="Enter Blog Here"
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  [e.target.name] : e.target.value,
                })
              }}
           required 
            />
          </InputGroup>
             <Button
               className="sub"
               type="submit"
               onClick={handleCloses}
              >
                Submit
              </Button>
              <Button 
                className="cancel" 
                onClick={handleCloses}
              >
                Cancel
              </Button>
               </div>
          </form>
        </Modal.Body>
      </Modal>
      <Button  
       className="add"
       onClick={()=>handleShows()}
      >
        Add Blog
      </Button> 
        </div>
        <Table striped bordered hover>
        
            <tr>
                <th>Author</th>
                <th >Text</th>
                <th >Actions </th>
            </tr>
       
        {blogs && blogs.length>0 ?
        blogs.map(b=>{
          return(
           <>
            <tr key={b._id}>
              <td>{b.author}</td>
              <td>{b.text}</td>
              <Button 
                onClick={()=>{
                 handleShow(b._id, b.author, b.text)}} 
                className="btn1" 
                
              >
                Edit
              </Button>
              <Button
                className="btn2"
                onClick={() => deleteHandler(b._id)}
                >
                  Delete
                </Button>
            </tr>
            
            </>
          )
        }): ''}
      </Table>
        
      </div>
  )
}

export default Blog;
