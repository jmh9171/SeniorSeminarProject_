import React from 'react';



function Testjs(){
  return (

    
    <div>

<div>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name" />
        <ul id="myUL">
          <li><a href="#">Adele</a></li>
          <li><a href="#">Agnes</a></li>
          <li><a href="#">Billy</a></li>
          <li><a href="#">Bob</a></li>
          <li><a href="#">Calvin</a></li>
          <li><a href="#">Christina</a></li>
          <li><a href="#">Cindy</a></li>
        </ul>
</div>



<style>{`
            * {
              box-sizing: border-box;
            }
            
            #myInput {
              background-image: url('/css/searchicon.png');
              background-position: 10px 12px;
              background-repeat: no-repeat;
              width: 100%;
              font-size: 16px;
              padding: 12px 20px 12px 40px;
              border: 1px solid #ddd;
              margin-bottom: 12px;
            }
            
            #myUL {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }
            
            #myUL li a {
              border: 1px solid #ddd;
              margin-top: -1px; /* Prevent double borders */
              background-color: #f6f6f6;
              padding: 12px;
              text-decoration: none;
              font-size: 18px;
              color: black;
              display: block
            }
            
            #myUL li a:hover:not(.header) {
              background-color: #eee;
            }
         
         
         `}</style>

    </div>




  );
}


export default Testjs