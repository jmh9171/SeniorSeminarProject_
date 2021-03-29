import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Group from '../components/group'


export default function about() {
return(
    <div>
    <Head>
        <title>My groups</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
<div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
</div>

        <center><img src="images/GroupsBG.jpg" style={{opacity: '0.9', width: '100%', maxHeight: '1200px'}} className="w3-margin-top" /></center>
        <div className="w3-display-middle w3-center" style={{width: '50%', height: '85%'}}>
          <span className="w3-text-white" style={{fontSize: '90px'}}>Create Group<br /></span>

<div>
        <h3 style={{color: "white"}}>Create Group Form</h3>
        <div className="container">
          <form action="/action_page.php">
            <label htmlFor="gname">Group Name</label>
            <input type="text" id="gname" name="groupname" placeholder="Group name.." />
            
            <label htmlFor="tag1">Tag #1</label>
            <select id="tag1" name="tag1">
              <option value="fps">FPS</option>
              <option value="mmorpg">MMORPG</option>
              <option value="casual">CASUAl</option>
              <option value="competitive">COMPETITIVE</option>
              <option value="racing">RACING</option>
            </select>

            <label htmlFor="tag2">Tag #2</label>
            <select id="tag2" name="tag2">
              <option value="fps">FPS</option>
              <option value="mmorpg">MMORPG</option>
              <option value="casual">CASUAl</option>
              <option value="competitive">COMPETITIVE</option>
              <option value="racing">RACING</option>
            </select>

            <label htmlFor="tag3">Tag #3</label>
            <select id="tag3" name="tag3">
              <option value="fps">FPS</option>
              <option value="mmorpg">MMORPG</option>
              <option value="casual">CASUAl</option>
              <option value="competitive">COMPETITIVE</option>
              <option value="racing">RACING</option>
            </select>




            <label htmlFor="subject">Description</label>
            <textarea id="description" name="description" placeholder="Write something about your group.." style={{height: '200px'}} defaultValue={""} />
            <input type="submit" defaultValue="Submit" style={{color: "white"}}/>
          </form>
        </div>
</div>

</div>

 


    <style>{`
       body {font-family: Arial, Helvetica, sans-serif;}
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
         background-color: blue;
         color: white;
         padding: 12px 20px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
       }
       
       input[type=submit]:hover {
         background-color: #45a049;
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

      <Footer/>
    </div>
);
}