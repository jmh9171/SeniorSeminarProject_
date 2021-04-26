import React from 'react';




const Profileedit = () => (
    <profileedit>
   <center>
   <div style={{width: "80%"}}>
       <center> <h3 style={{color: "white"}}>Edit Profile Form</h3></center>
        <div className="container">
          <form>
        <label htmlFor="pgame">Preferred Game #1</label>
        <input type="text" id="p1" name="pg1" placeholder="Preferred game.." />

        <label htmlFor="pgame">Preferred Game #2</label>
        <input type="text" id="p2" name="pg2" placeholder="Preferred game.." />

        <label htmlFor="pgame">Preferred Game #3</label>
        <input type="text" id="p3" name="pg3" placeholder="Preferred game.." />

        <label htmlFor="intro">Introduction</label>
        <textarea id="introduction" name="introduction" placeholder="Write something about yourself.." style={{height: '200px'}} defaultValue={""} />


            
        <label htmlFor="tag1">Tag</label>
        <select id="tag1" name="tag1">
            <option value="casual">CASUAL</option>
            <option value="competitive">COMPETITIVE</option>
        </select>


            <center><input type="submit" defaultValue="Submit" style={{color: "white", margin: "10px"}}/></center>
          </form>

        </div>
        
</div>
</center>


<style>{`
       body {font-family: Arial}
       * {box-sizing: border-box;}
       
       input[type=text], select, textarea {
         width: 100%;
         padding: 12px;
         border: 1px solid #ccc;
         border-radius: 4px;
         box-sizing: border-box;
         margin-top: 6px;
         margin-bottom: 16px;
         resize: vertical;
       }
       
       input[type=submit] {
         background-color: #4c9aaf;
         color: white;
         padding: 12px 20px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
       }
       
       input[type=submit]:hover {
         background-color: #white;
       }
       
       .container {
         border-radius: 5px;
         background-color: #f2f2f2;
         padding: 20px;
       }

      `}</style>


    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
  

    </profileedit>
)

export default Profileedit