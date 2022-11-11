// import React from "react";

// function EditCourse() {
//   return (
//     <div className="container-fluid px-4">
//       <div className="card mt-4">
//         <div className="card-header"></div>
//         <div className="card-body">
//           <form
//             id=""
//             //   onSubmit={updateBook}
//           >
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Select author
//               </label>
//               <select
//                 type="text"
//                 name="author_id"
//                 // onChange={handleInput}

//                 className="form-control"
//                 id="exampleInputPassword1"
//               >
//                 {authorlist.map((item) => {
//                   return (
//                     <option value={item.id} key={item.id}>
//                       {item.name}
//                     </option>
//                   );
//                 })}
//               </select>
//               <small className="text-danger">{errorlist.author_id}</small>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Select city
//               </label>
//               <select
//                 type="text"
//                 name="city_id"
//                 onChange={handleInput}
//                 value={bookInput.city_id}
//                 className="form-control"
//                 id="exampleInputPassword1"
//               >
//                 <option>Select</option>
//               </select>
//               <span></span>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputEmail1" className="form-label">
//                 Slug
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 name="slug"
//                 onChange={handleInput}
//                 value={bookInput.slug}
//               />
//               <small className="text-danger">{errorlist.slug}</small>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputEmail1" className="form-label">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 name="price"
//                 onChange={handleInput}
//                 value={bookInput.price}
//               />
//               <small className="text-danger">{errorlist.price}</small>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 onChange={handleInput}
//                 value={bookInput.title}
//               />
//               <small className="text-danger">{errorlist.title}</small>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 onChange={handleInput}
//                 value={bookInput.description}
//               />
//               <small className="text-danger">{errorlist.description}</small>
//             </div>

//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Image
//               </label>
//               <input
//                 type="file"
//                 name="image"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 onChange={handleImage}
//               />
//               <img
//                 src={`http://localhost:8000/${bookInput.image}`}
//                 width="50px"
//               />
//               <small className="text-danger">{errorlist.image}</small>
//             </div>
//             <button type="submit" className="btn btn-primary px-4 mt-2">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditCourse;
